import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginAdmin = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 relative">
            <div className="logo absolute top-8 left-10">
                <img src="/assets/logo.png" alt="Logo E-Learning" className="w-36" />
            </div>

            <div className="container flex w-full h-full max-w-full shadow-lg">
                <div className="left-section w-1/2 bg-white flex justify-center items-center p-20">
                    <img src="/assets/exam.png" alt="E-Learning" className="w-full h-auto" />
                </div>
                
                <div className="right-section w-1/2 p-20 bg-white flex flex-col justify-center">
                    <h2 className="text-center text-2xl mb-8 text-shadow font-bold">Login</h2>
                    <form id="loginForm" className="space-y-6">
                    <div className="input-group flex items-center border-b border-gray-300 pb-2">
                        <i className="fas fa-envelope text-gray-400 mr-3"></i>
                        <input type="text" id="username" placeholder="Username" required className="w-full p-2 border-none focus:outline-none focus:ring-0 text-gray-700" />
                    </div>

                    <div className="input-group flex items-center border-b border-gray-300 pb-2">
                        <i className="fas fa-lock text-gray-400 mr-3"></i>
                        <input type="password" id="password" placeholder="Password" required className="w-full p-2 border-none focus:outline-none focus:ring-0 text-gray-700" /> 
                    </div>

                        <button type="submit" className="btn w-full bg-blue-500 text-white py-4 rounded hover:bg-blue-600">Login</button>
                    </form>
                </div>
            </div>

            <div className="footer absolute bottom-2 w-full text-center text-gray-700 text-sm">
                CBTExam©2024
            </div>
            
        </div>
    );
};

export default LoginAdmin;
