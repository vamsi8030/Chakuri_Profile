import React, { Component } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Menu extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">

                    <div className="col border-right ">
                        <label> <big><FaUser/></big></label>
                        <div className="row">
                            <div className="col-3 pl-0 pr-0 ">
                                <label >Name:</label>
                            </div>
                            <div className="col-9  pr-0 "  >
                                <label className="text-primary"> Yaswanth</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col  pl-0 pr-0">
                                <label>CurrentRole:</label>
                            </div>
                            <div className="col  pl-0 pr-0 ">
                                <label className="text-primary text-left">Employer </label>
                            </div>
                        </div>
                        <div className="row"  >
                            <div className="col-3">
                                <button type="button" className="btn btn-primary btn-sm btn-center text-center">Switch Mode</button>
                            </div>
                        </div>
                    </div>

                    <div className="col border-right ">
                        <ul className="nav navbar-nav">
                            <li className="dropdown ">
                                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">PROFILE</span> <span className="caret"></span></Link>
                                <div className="dropdown-menu text-white bg-dark">
                                    <h6 className="dropdown-header text-white">PROFILE MANAGEMENT </h6>
                                    <Link to={"/Profile"} className="dropdown-item text-white">UPDATE PROFILE</Link>
                                    <Link className="dropdown-item text-white">PASSWORD CHANGE</Link>
                                    <Link className="dropdown-item text-white">YOUR CONTRACTS</Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col border-right">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">JOB</span> <span className="caret"></span></Link>
                                <div className="dropdown-menu  text-white bg-dark">
                                    <h6 className="dropdown-header text-white"href="#">POST A JOB</h6>
                                    <Link className="dropdown-item text-white">JOB POST ACTIVITY</Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="col border-right">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">JOB SEEKER LOOK OUT</span> <span className="caret"></span></Link>
                                <div className="dropdown-menu  text-white bg-dark">
                                    <h6 className="dropdown-header text-white">TOP QUALIFIED JOB SEEKERS</h6>
                                    <Link className="dropdown-item text-white">SKILLS EVALUATION</Link>
                                    <Link className="dropdown-item text-white">CHAKURI SKILL BASE</Link>
                                    <Link className="dropdown-item text-white">SEARCH JOB SEEKERS</Link>
                                    <Link className="dropdown-item text-white">CANDIDATE SELECTED/REJECTED</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
    
    
                    <div className="col border-right">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <Link className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">EMPLOYMENT ACTIVITY </span> <span className="caret"></span></Link>
                                <div className="dropdown-menu  text-white bg-dark">
                                    <h6 className="dropdown-header text-white">EMPLOYMENT AGREEMENT</h6>
                                    <Link className="dropdown-item text-white">CURRENT EMPLOYMENT</Link>
                                    <Link className="dropdown-item text-white">EMPLOYMENT HISTORY</Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    };
};

export default Menu;