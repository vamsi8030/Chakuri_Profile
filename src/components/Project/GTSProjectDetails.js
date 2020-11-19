import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { AiFillFileAdd } from 'react-icons/ai';
import {Button, ButtonGroup} from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GTS_Project_Display = () => {
    const [project,setProject] = useState([]);
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await axios.get("http://localhost:3003/gts_user_project_details");
        setProject(result.data);
    };

	const deleteProject = async id => {
		await axios.delete(`http://localhost:3003/gts_user_project_details/${id}`);
		loadUsers();
   }

	return(
		<div className="container align-items-center">
            <div className="mt-3">
                <div className="border border-dark rounded-lg">
                <div className="row">
                    <div className="col"><h5 class="mb-3 p-2">Project Details</h5></div>
                    <div className="col-1" style={{"float":"right"}}>
                        <Link to={"/AddProjectDetails"} className="btn btn-outline-info"><AiFillFileAdd/></Link>
                    </div>
                </div>
                    {
                        
                        project.map((pro,index) => (
                            <div className="row">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <label>Project Title: {pro.gts_user_employer_name}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label>Institue/University: {pro.gts_user_client}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label>Start Date: {pro.gts_user_project_start_date}</label>
                                        </div>
                                        <div className="col-4">
                                            <label>End Date: {pro.gts_user_project_end_date}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><label>Details: </label>{pro.gts_user_project_description}</p>
                                        </div>
                                    </div>
                                    <ButtonGroup style={{"float":"right"}}>
                                        <Link to={`/UpdateProjectDetails/${pro.id}`} className="btn btn-outline-success"><FaEdit/></Link>
                                        <Button onClick={() => deleteProject(pro.id)} variant="outline-danger"><FaTrash/></Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
	);

};
export default GTS_Project_Display;