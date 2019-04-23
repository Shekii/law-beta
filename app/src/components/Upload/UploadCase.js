import React, {Component} from 'react';
import * as constants from '../../static/constants.js';

import ClipLoader from '../Clip_Loader.js';

import SuccessMessage from '../SuccessMessage';
import ErrorMessage from '../ErrorMessage';

import '../../css/main.css';

import { 
     Button, Form, Col} from 'react-bootstrap';

class UploadCase extends Component {

  constructor(props) {
    super(props);

    this.state = 
    { 
      validated: false,
      caseName: '',
      caseDate: '',
      message: '',
      error: '',
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
      .then(res => res.json())
      .then(item => {
        if (item.success === true) {
            this.setState({message: item.message});
            this.setState({loading: false});


            //this.setState({caseName: '', text: '', caseDate: ''});
        } else {
          this.setState({error: item.message})
        }
        console.log(item);
      })
      .catch((error) => {
          console.error(error);
      });
    }
  }

  render() {
    const { validated } = this.state;

    let result;

    if (this.state.message.length > 0) {
      result = <SuccessMessage 
          message={this.state.message}/>
     } else if (this.state.error.length > 0) {
        result = <ErrorMessage 
            error={this.state.message}/>
     }



    return (
      <div className="container pageBody">
        <h1>Upload New Case</h1><br></br>

        {result}

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
                rows="7"
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
        {<ClipLoader 
          loading={this.state.loading}
          size={55}/> }
      </div>
    );
  }
}

export default UploadCase;
