import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/registration';
import LoginAdmin from './components/loginadmin'; 
import Dashboard from './components/dashboard';
import Soal from './components/soal'; 


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/loginadmin" element={<LoginAdmin />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/soal" element={<Soal />} />
            </Routes>
        </Router>
    );
};

export default App;
