import React, {Component} from 'react';
import {Container, Col, Form, Fade,
    FormGroup, Label, Input,
    Button} from 'reactstrap';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
 
    render() {
        return (
            <Container className="App">
            <h2>Register</h2>
            <Form className="form">
            <Col>
                <FormGroup>
                    <Label> Enterprise Name </Label>
                    <Input
                        type="text"
                        name="enterpriseName"
                        id="enterpriseName"
                        placeholder = "Enterprise Name goes here"
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
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
              <Col>
                <FormGroup>
                    <Label> UPI ID </Label>
                    <Input
                        type="text"
                        name="upiId"
                        id="upiId"
                        placeholder = "UPI ID Goes here.."
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                    <Label> Bank Name</Label>
                    <Input
                        type="text"
                        name="bankName"
                        id="bankName"
                        placeholder = "Bank Name Goes here.."
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                    <Label> IFSC COde </Label>
                    <Input
                        type="text"
                        name="ifscCode"
                        id="ifscCode"
                        placeholder = "IFSC Code goes here ...."
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                    <Label> Account Number </Label>
                    <Input
                        type="text"
                        name="accountNumber"
                        id="accountNumber"
                        placeholder = "Account Number goes here ...."
                    />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                    <Label> Commodity/ Category </Label>
                    <Input
                        type = "select"
                        name = "category"
                        id = "category"
                    >
                        <option>Type 1</option>
                        <option>Type 2</option>
                        <option>Type 3</option>
                        <option>Type 4</option>
                        <option>Type 5</option>
                    </Input>

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