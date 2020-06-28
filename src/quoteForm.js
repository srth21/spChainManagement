import React, {Component} from 'react';
import {Container, Col, Form, Fade,
    FormGroup, Label, Input,
    Button} from 'reactstrap';
import _ from 'lodash';
import Footercat from "./footerforcatalogue";
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';

class QuoteForm extends Component {
 
    render() {
        return (
          
          <Container className="App">
            <h2>Request Quote</h2>
            <Form className="form" type='POST'>
            <Col>
                <FormGroup>
                    <Label> Required Quantity </Label>
                    <Input
                        type="text"
                        name="amount"
                        id="amount"
                        placeholder = "Enter the quantity you need.."
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                    <Label> Phone Number </Label>
                    <Input
                        type="number"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder = "Phone Number goes here.."
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                    <Label> Address </Label>
                    <Input
                        type="text"
                        name="address"
                        id="address"
                        placeholder = "Address goes here"
                    />
                </FormGroup>
              </Col>
              <Button>Submit</Button>
            </Form>
          </Container>
          
        );
    }
}
 
const FromValidationError = props => (
    <Fade in={Boolean(props.field)}  tag="p" className="error">
       { props.field ?  Object.values(props.field).shift() : '' } 
  </Fade>
);

export default QuoteForm;