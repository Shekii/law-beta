import React, {Component} from 'react';

import CasesTable from './CasesTable';
import EditCaseForm from './EditCaseForm';
import RemoveCaseForm from './RemoveCaseForm';
import CaseCollection from './CaseCollection';

import * as constants from '../../static/constants.js';

import ClipLoader from '../Clip_Loader.js';

import {  Modal, Button, InputGroup, FormControl, Form} from 'react-bootstrap';

class ManageCasesLoaded extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            caseCollection:[],
            validated: false,
            search: '',
            searchCollection: [],
            formIsValid:false, 
            caseToEdit:[], 
            caseToRemove:[], 
            showEditCaseModal:false, 
            showCaseCaseModal:false,
            showAdd: false,
            showEdit: false,
            showDelete: false,
            deleteLoading: false,
            caseName:'', text:'', caseDate:''
        };

        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
        this.handleSubmitDelete = this.handleSubmitDelete.bind(this);


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleUpdateChange = this.handleUpdateChange.bind(this);

        this.handleOpenEditCaseModal = this.handleOpenEditCaseModal.bind(this);
        this.handleCloseEditCaseModal = this.handleCloseEditCaseModal.bind(this);
        this.editCase = this.editCase.bind(this);

        this.handleOpenRemoveCaseModal = this.handleOpenRemoveCaseModal.bind(this);
        this.handleCloseRemoveCaseModal = this.handleCloseRemoveCaseModal.bind(this);
        this.removeCase = this.removeCase.bind(this);

        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);

        this.handleShowDelete = this.handleShowDelete.bind(this);
        this.handleCloseDelete = this.handleCloseDelete.bind(this);

        this.viewCase = this.viewCase.bind(this); 
        this.editSearch = this.editSearch.bind(this);
        this.emptySearch = this.emptySearch.bind(this);

    }

    async componentDidMount() {
        console.log(this.props.dataCollection);
        const tempCollection = [];

        this.props.dataCollection.forEach(it => {
            let concept = '';
            if (it.enriched_text.concepts.length > 0) {
                concept = it.enriched_text.concepts[0].text;
            }
            tempCollection.push(<CaseCollection
                key={it.id}
                id={it.id}
                caseName={it.caseName}
                caseDate={it.caseDate}
                text={it.text}
                concept={concept}
                ec={this.editCase}
                dc={this.removeCase}
                vc={this.viewCase}
            />);
        });

        this.setState({ caseCollection: tempCollection });
        this.setState({ searchCollection: tempCollection });

    }

    async handleSubmitDelete(event) {
        //console.log(this.state.caseToRemove);
        
        event.preventDefault();
        if (!event.target.checkValidity()) {
            this.setState({ formIsValid: false });
            // form is invalid! so we do nothing
            return;
        }

        this.setState({ formIsValid: true });

        this.setState({deleteLoading: true});

        let url = 
            constants.API + '/cases_discovery/'+
            this.state.caseToRemove.id +'/delete';

        await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json; charset=utf-8" }
        })
        .then(res => res.json())
        .then(item => {
            console.log(item);
            if (item.success === true) {
                this.setState({loading: false});
                this.handleCloseRemoveCaseModal();
                window.location.reload();
            }
        })
    }

    handleSubmitUpdate(event) {
        event.preventDefault();
        if (!event.target.checkValidity()) {
            this.setState({ formIsValid: false });
            // form is invalid! so we do nothing
            return;
        }
        this.setState({ formIsValid: true });
        let url = constants.API + '/cases_discovery/'+ this.state.caseToEdit.id +'/edit';
        // console.log(url);

        fetch(url, {
            method: "POST",
            body:JSON.stringify(this.state.caseToEdit),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        })
        .then(response => {
            response.json()
            .then(status => {
                console.log("Successful "+ status);
            })
        })
        .then(this.handleCloseEditCaseModal())
        .then(window.location.reload())
    }


    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({ [name]: target.value });
    }

    handleUpdateChange(event) {
        const target = event.target;
        const name = target.name;
        let temp = this.state.caseToEdit;
        temp[name] = target.value;
        console.log(temp);
        this.setState({ caseToEdit:temp }); 
        // this.setState({ [name]: target.value});
    }

    downloadAllJson() {
        let data = this.state.showNewCaseModal;
        console.log(data);
    }


    handleCloseEdit() { this.setState({ showEdit: false }); }
    handleShowEdit() { this.setState({ showEdit: true }); }

    handleCloseDelete() { this.setState({ showDelete: false }); }
    handleShowDelete() { this.setState({ showDelete: true }); }

    handleCloseEditCaseModal () { this.setState({ showEditCaseModal: false }); }
    handleOpenEditCaseModal () { this.setState({ showEditCaseModal: true }); } 
    
    handleCloseRemoveCaseModal () { this.setState({ showRemoveCaseModal: false }); }
    handleOpenRemoveCaseModal () { this.setState({ showRemoveCaseModal: true }); }  

    editCase(orig, evt) {
        this.setState({ showEdit:true, caseToEdit:orig }); 
    }

    removeCase(orig, evt) {
        this.setState ({showDelete:true, caseToRemove:orig })
    }

    viewCase(orig, evt) {
        console.log(orig.key);
    }

    editSearch() {
        if (this.state.search !== '') {
            let cases = this.state.caseCollection;
            let regex = this.state.search + "*";

            const reg = new RegExp(regex,'gi');

            cases = cases.filter(function(el) {
                return reg.test(el.props.caseName);
            });

            this.setState({searchCollection: cases});
        }
    }

    emptySearch() {
        this.setState({
            search: '',
            searchCollection: this.state.caseCollection
        });

    }

  async handleInputChange(event) {
      const target = event.target;
      const name = target.name;

      this.setState({ [name]: target.value });
  }

  render() {
    const { validated } = this.state;
    return (
        <div>
            <div className="container pageBody">

                <h4 className="display-4">Manage Cases</h4>

                <InputGroup className="mb-3">
                    <Form.Control
                    type="text"
                    required
                    name="search"
                    placeholder="Search by Case Name"
                    aria-label="Case Name"
                    onChange={this.handleInputChange} 
                    onKeyDown={this.editSearch}
                    onKeyUp={this.editSearch}
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button 
                        variant="outline-secondary"
                        onClick={this.editSearch}>
                        <span className="fa fa-search"/>
                    </Button>
                    <Button 
                        variant="outline-secondary"
                        onClick={this.emptySearch}>
                        <i className="fa fa-minus"/>
                    </Button>
                    </InputGroup.Append>
                </InputGroup>

                <CasesTable 
                    dataCollection={this.state.searchCollection} />  

                <p>
                    Matching {this.state.searchCollection.length} result(s).

                </p>
                <p>
                    {this.state.caseCollection.length} case(s) in total.
                </p>

                <Modal 
                    show={this.state.showEdit} 
                    onHide={this.handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Case</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                            <EditCaseForm 
                                hs={this.handleSubmitUpdate} 
                                hic={this.handleUpdateChange} 
                                cte={this.state.caseToEdit} />
                    </Modal.Body>
                </Modal>

                <Modal 
                    show={this.state.showDelete} 
                    onHide={this.handleCloseDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm delete?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <RemoveCaseForm 
                                hs={this.handleSubmitDelete} 
                                ctd={this.state.caseToRemove} />
                    </Modal.Body>
                    <Modal.Footer>
                        {<ClipLoader 
                            loading={this.state.deleteLoading}
                            size={20}/>
                        }
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    )
  }
}

export default ManageCasesLoaded;
