import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Profile from './components/Profile';
import AddEducationDetails from './components/Education/GTSEducationCreate';
import UpdateEducationDetails from './components/Education/GTSEducationUpdate';
import AddProjectDetails from './components/Project/GTSProjectCreate';
import UpdateProjectDetails from './components/Project/GTSProjectUpdate';
import Footer from './components/Footer';

function App() {
    return(
        <div>
            <Router>
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact path={"/Profile"} component={Profile}/>
                    <Route exact path={"/AddEducationDetails"} component={AddEducationDetails}/>
                    <Route exact path={"/UpdateEducationDetails/:id"} component={UpdateEducationDetails}/>
                    <Route exact path={"/AddProjectDetails"} component={AddProjectDetails}/>
                    <Route exact path={"/UpdateProjectDetails/:id"} component={UpdateProjectDetails}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;
