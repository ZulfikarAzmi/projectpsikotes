import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/registration';
import LoginAdmin from './components/loginadmin'; 
import Dashboard from './components/dashboard';
import Soal from './components/soal'; 
import QuestionComponent from './components/questioncomponent'; 
import ExamDone from './components/examdone'; 


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/loginadmin" element={<LoginAdmin/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/soal" element={<Soal/>}/>
                <Route path="/questioncomponent" element={<QuestionComponent/>}/>
                <Route path="/examdone" element={<ExamDone/>}/>
            </Routes>
        </Router>
    );
};

export default App;
