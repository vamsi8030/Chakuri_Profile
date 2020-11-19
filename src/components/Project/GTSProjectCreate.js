import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link,useHistory,} from "react-router-dom";
import { Form, Col, ButtonGroup } from "react-bootstrap";
import { FaPlusSquare} from "react-icons/fa";

const GTS_Project_Create = () => {
    let history = useHistory();
    const [cities,setCities] = useState([]);
    useEffect(()=>{loadCities();},[]);
    const loadCities = async() => {
        const res = await axios.get("http://localhost:2809/indian_cities_list");
        setCities(res.data);
    };
    const [project,setUser] = useState({
        gts_user_employer_name: "",
        gts_user_employment_type: "",
        gts_user_project_skill_ids: "",
        gts_user_role_description: "",
        gts_user_role: "",
        gts_user_project_start_date: "",
        gts_user_project_end_date: "",
        gts_user_project_site: "",
        gts_user_client: "",
        gts_user_project_description: "",
        gts_user_designation: "",
        gts_user_project_location: "",
        gts_user_team_size: ""
	});
    const {
        gts_user_employer_name,
        gts_user_employment_type,
        gts_user_project_skill_ids,
        gts_user_role_description,
        gts_user_role,
        gts_user_project_start_date,
        gts_user_project_end_date,
        gts_user_project_site,
        gts_user_client,
        gts_user_project_description,
        gts_user_project_location,
        gts_user_team_size,
    } = project;
    const onInputChange = e =>{
        setUser({...project,[e.target.name] : e.target.value});
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/gts_user_project_details",project);
        history.push("/Profile");
    };

    return(
        <div className="container align-items-center">
            <div className='mt-3'>
                <div className="border border-dark rounded-lg">
                    <div className="row">
                        <div className="col"><h5 className="mb-3 p-2">Add Project Details:</h5></div>
                        <div className="col-1"><FaPlusSquare size={25}/></div>
                        <div className="container">
                            <Form onSubmit={e => onSubmit(e)}>
                                <div className="row">
                                    <div className="col">
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Title:</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_user_employer_name" value={gts_user_employer_name} placeholder="Enter Project Title" />
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Start Date:</Form.Label>
                                                <Form.Control required type="date" onChange = {e => onInputChange(e)} name="gts_user_project_start_date" value={gts_user_project_start_date} placeholder="Project Start Date" />
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>End Date:</Form.Label>
                                                <Form.Control required type="date" onChange = {e => onInputChange(e)} name="gts_user_project_end_date" value={gts_user_project_end_date} placeholder="Project End Date" />
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Nature of project</Form.Label>
                                                <Form.Control required as="select" onChange = {e => onInputChange(e)} name="gts_user_employment_type" value={gts_user_employment_type}>
                                                    <option>--select--</option>
                                                    <option>Full Time</option>
                                                    <option>Part Time</option>
                                                    <option>Contract</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Institute/University:</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_user_client" value={gts_user_client} placeholder="Name of project done" />
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                            <Form.Label> degree_location:</Form.Label>
                                            <Form.Control required type="text" list="datalist1"  placeholder="Enter the Location " name="gts_user_project_location" value={gts_user_project_location} onChange = {e => onInputChange(e)} />
                                            <datalist id="datalist1">
                                            {
                                                cities.map((city)=>(
                                                    <option value={city.name}>{city.name}</option>
                                                ))
                                            }
                                            </datalist>
                                        </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Skills Used:</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_user_project_skill_ids" value={gts_user_project_skill_ids} placeholder="Used skills in project" />
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Team Size</Form.Label>
                                                <Form.Control required as="select" onChange = {e => onInputChange(e)} name="gts_user_team_size" value={gts_user_team_size} placeholder="Team Size">
                                                    <option>--select--</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Role</Form.Label>
                                                <Form.Control required type="test" onChange = {e => onInputChange(e)} name="gts_user_role" value={gts_user_role} placeholder="Project Role" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Project Site</Form.Label>
                                                <Form.Control required as="select" onChange = {e => onInputChange(e)} name="gts_user_project_site" value={gts_user_project_site}>
                                                    <option>--select--</option>
                                                    <option>On site</option>
                                                    <option>Off site</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project role description:</Form.Label>
                                                <Form.Control required as="textarea" rows={1} onChange = {e => onInputChange(e)} name="gts_user_role_description" value={gts_user_role_description} placeholder="Project Role Description" />
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Project Description:</Form.Label>
                                                <Form.Control required as="textarea" rows={5} onChange = {e => onInputChange(e)} name="gts_user_project_description" value={gts_user_project_description} placeholder="Project Description" />
                                            </Form.Group>
                                        </Form.Row>
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
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default GTS_Project_Create;