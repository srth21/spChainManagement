import Footercat from './footerforcatalogue';
import Headercat from './headerforcat';
import React, { Component } from 'react';
import {Container, Col, Form, Fade,
    FormGroup, Label, Input, Button} from 'reactstrap';
class Myacc extends Component{
    render() {
        return (    
            <div>
                <Headercat></Headercat>
                <body>
                  <center>
                  <h2>My details</h2>
                    <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label> Enterprise Name :</Label>
                            <Label> XYZ</Label><br></br>
                            <Label>Email  :</Label>
                            <Label>xyz@demo.com</Label><br></br>
                            <Label>CIN     :</Label>
                            <Label>215589962335</Label><br></br>
                            <Label>Address:</Label><br></br>
                            <Label>
                                sector-1<br></br>
                                industrial area<br></br>
                                Bangalore
                            </Label>
                        </FormGroup>
                    </Col>
                    <Button>Change Password</Button> <Button>Change details</Button>
                    </Form>
                    
                  </center>
                </body>
                <Footercat></Footercat>
            </div>
        );
    }
}
export default Myacc;