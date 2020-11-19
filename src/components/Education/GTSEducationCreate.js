import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link,useHistory,} from "react-router-dom";
import {Card,Form,Col, ButtonGroup} from 'react-bootstrap';

const GTS_Education_Create = () => {
    let history = useHistory();
    const [cities,setCities] = useState([]);
    useEffect(()=>{loadCities();},[]);
    const loadCities = async() => {
        const res = await axios.get("http://localhost:2809/indian_cities_list");
        setCities(res.data);
    };
    const [education,setUser] = useState({
        gts_user_degree_name:'',
        gts_user_degree_institute:'',
        gts_user_degree_location:'',
        gts_user_degree_start_date:'',
        gts_user_degree_end_date:'',
        gts_user_degree_marks_percentage:'',
        gts_user_degree_grade:'',
        user_id:1            
    });
    const {
        gts_user_degree_name,
        gts_user_degree_institute,
        gts_user_degree_location,
        gts_user_degree_start_date,
        gts_user_degree_end_date,
        gts_user_degree_marks_percentage,
        gts_user_degree_grade,
    } = education;
    const onInputChange = e =>{
        setUser({...education,[e.target.name] : e.target.value});
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/gts_user_education_details",education);
        console.log("Added Successfully");
        history.push("/Profile");
    };
    return(
        <div className="container align-items-center">
            <div className='mt-3  mb-3'>
                <div className="border  rounded-lg" >
                    <Card className={"border border-dark  text-black"}>
                        <Form onSubmit={e => onSubmit(e)}>
                            <Card.Body>
                                <div class="row">
                                    <div class="col"><h2>Education Background:</h2></div>
                                </div>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label> Name of the Degree:</Form.Label>
                                            <Form.Control required type="test" placeholder="Enter the degree name" name="gts_user_degree_name" value={gts_user_degree_name} onChange = {e => onInputChange(e)}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label> Name of University/Institute:</Form.Label>
                                            <Form.Control required type="test"  placeholder="Enter the Institute name" name="gts_user_degree_institute" value={gts_user_degree_institute} onChange = {e => onInputChange(e)}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label> degree_location:</Form.Label>
                                            <Form.Control required type="text" list="datalist1"  placeholder="Enter the Location " name="gts_user_degree_location" value={gts_user_degree_location} onChange = {e => onInputChange(e)} />
                                            <datalist id="datalist1">
                                            {
                                                cities.map((city)=>(
                                                    <option value={city.name}>{city.name}</option>
                                                ))
                                            }
                                            </datalist>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Start Year:</Form.Label>
                                            <Form.Control required type="date" name="gts_user_degree_start_date" value={gts_user_degree_start_date} onChange = {e => onInputChange(e)}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>end year:</Form.Label>
                                            <Form.Control required type="date" name="gts_user_degree_end_date" value={gts_user_degree_end_date} onChange = {e => onInputChange(e)}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>degree_marks_percentage:</Form.Label>
                                            <Form.Control required type="test"  placeholder="Enter your percentage" name="gts_user_degree_marks_percentage" value={gts_user_degree_marks_percentage} onChange = {e => onInputChange(e)}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Label>degree_grade:</Form.Label>
                                            <Form.Control required type="test"   placeholder="Enter your grade" name="gts_user_degree_grade" value={gts_user_degree_grade} onChange = {e => onInputChange(e)}/>
                                        </Form.Group>
                                    </Form.Row>
                                </Card.Body>
                            <Card.Footer>
                                <ButtonGroup style={{"float":"right"}}>
                                    <div class="row py-3" >
                                        <div class="col col-sm  ">
                                            <button size="sm"  variant="outline-success"  type="submit" class="btn btn-primary"  >Save Details</button>{' '}
                                        </div>
                                    </div>{' '}
                                    <div class="row py-3" >
                                        <div class="col col-sm">
                                            <Link to={"/Profile"} className="btn btn-sm btn-outline-primary "  class="btn btn-primary " >View Data</Link>
                                        </div>
                                    </div>
                                </ButtonGroup>
                            </Card.Footer>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>        
    );
};

export default GTS_Education_Create;