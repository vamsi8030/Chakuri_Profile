import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { AiFillFileAdd } from 'react-icons/ai';
import {Button, ButtonGroup} from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GTS_Education_Display = () => {
    const [education,setEducation] = useState([]);
    useEffect(() => {loadUsers();},[]);
    const loadUsers = async() => {
        const result = await axios.get("http://localhost:3003/gts_user_degree_details");
        setEducation(result.data);
    };

	const deleteEducation = async id => {
		await axios.delete(`http://localhost:3003/gts_user_degree_details/${id}`);
        loadUsers();
        console.log("Deleted Successfully");
   }

	return(
		<div className="container align-items-center">
            <div className="mt-3">
                <div className="border border-dark rounded-lg">
                <div className="row">
                    <div className="col"><h5 class="mb-3 p-2">Education Details</h5></div>
                    <div className="col-1" style={{"float":"right"}}>
                        <Link to={"/AddEducationDetails"} className="btn btn-outline-info"><AiFillFileAdd/></Link>
                    </div>
                </div>
                    {
                        education.map((pro,index) => (
                            <div className="row">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <label>Name of degree: {pro.gts_user_degree_name}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label>Name of Institute/University: {pro.gts_user_degree_institute}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label>Start Date: {pro.gts_user_degree_start_date}</label>
                                        </div>
                                        <div className="col-4">
                                            <label>Completion Date: {pro.gts_user_degree_end_date}</label>
                                        </div>
                                    </div>
                                    <ButtonGroup style={{"float":"right"}}>
                                        <Link to={`/UpdateEducationDetails/${pro.id}`} className="btn btn-outline-success"><FaEdit/></Link>
                                        <Button onClick={() => deleteEducation(pro.id)} variant="outline-danger"><FaTrash/></Button>
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
export default GTS_Education_Display;