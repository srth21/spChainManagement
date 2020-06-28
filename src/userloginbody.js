import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { Col, Form, Fade,
    FormGroup, Label, Input
  } from 'reactstrap';
import { Button } from "react-bootstrap";
import history from './history';
import './userbody.css';
class UBody extends Component {
  
      navigatorfunc(){
        history.push("/loadcataloguepage");
         window.location.reload(false);
     }
    
    render(){
        return(
            <Container className="body">
                <h2>Login</h2>
            <Form className="form" type='POST'>
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
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                  />
                </FormGroup>
              </Col>
              <Button className ="btn btn-success" onClick={this.navigatorfunc}>submit</Button>
            </Form>
            </Container>
        );
    }
}

export default UBody;