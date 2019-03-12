import React, {Component} from 'react';
import * as constants from '../../static/constants.js';

import DotLoader from '../Dot_Loader.js';

import { 
     Button, 
     FormGroup, Form, Col, InputGroup, FormControl} from 'react-bootstrap';

class UploadCase extends Component {

  constructor(props) {
    super(props);

    this.state = 
    { 
      validated: false,
      caseName: '',
      caseDate: '',
      message: '',
      loading: false,
      text: ''
     };

     this.handleInputChange = this.handleInputChange.bind(this);
  }


  async handleInputChange(event) {
      const target = event.target;
      const name = target.name;

      this.setState({ [name]: target.value });
  }

  async handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    if (form.checkValidity() === true) {
      event.preventDefault();

      this.setState({loading: true});

      let nu = {
          caseName:this.state.caseName,
          caseDate:this.state.caseDate,
          text:this.state.text
      };
      await fetch(constants.API + '/cases_discovery', {
          method: "POST",
          body:JSON.stringify(nu),
          headers: { "Content-Type": "application/json; charset=utf-8" }
      })
      .then(this.setState({loading: true}))
      .then(console.log(this.state.loading))
      .then(res => res.json())
      .then(item => {
        if (item.success === true) {
          this.setState({message: item.message});
          this.setState({loading: true});
        } else {

        }
        console.log(item);
      })
      .catch((error) => {
          console.error(error);
      });
    }
  }

    async handleSubmitNewCase(event) {
      event.preventDefault();

      const form = event.currentTarget;
      if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
      } else {
          this.setState({ formIsValid: true });

          let nu = {
              caseName:this.state.caseName,
              caseDate:this.state.caseDate,
              text:this.state.text,
          };
          fetch(constants.API + '/cases_discovery', {
              method: "POST",
              body:JSON.stringify(nu),
              headers: { "Content-Type": "application/json; charset=utf-8" }
          })
          .then(response => {
              response.json()
              .then(status => {
                  console.log("Successful "+ status);
              })
          })
          .then(this.handleCloseNewCaseModal())
          .then(window.location.reload());
      }

  }


  render() {
    const { validated } = this.state;
    return (
      <div className="container pageBody">
        <h3 className="display-4">Upload New Case</h3><br></br>
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
          <Form.Row>
            <Form.Group as={Col} controlId="validationCaseName">
              <Form.Label>Case Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="caseName"
                onChange={this.handleInputChange}
                value={this.state.caseName}
                placeholder="Case Name"
              />
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCaseName">
              <Form.Label>Case Date</Form.Label>
              <Form.Control
                required
                value={this.state.caseDate}
                onChange={this.handleInputChange}
                type="date"
                name="caseDate"
              />
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please select a date.</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCaseName">
              <Form.Label>Case Text</Form.Label>
              <Form.Control
                required
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleInputChange}
                as="textarea"
                rows="3"
                placeholder="Some text"
              />
              <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Please enter some text</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">
            Insert Case <span className="fa fa-plus"/>
           </Button>
        </Form>
        {<DotLoader loading={this.state.loading}/> }
      </div>
    );
  }
}

export default UploadCase;
