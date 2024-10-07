import image from "../assets/examination2.png"
import logo from "../assets/logo.png"
import { FloatingLabel } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { Button } from "flowbite-react";


export function Login() {
    
        

    return(
        <body className="flex justify-center items-center h-screen bg-gray-200 relative">
            <div className="logo absolute top-8 left-10">
                <img src={logo} alt="logo Virtusee" className="w-36" />
            </div>
            <div className="container flex w-full h-full max-w-full shadow-lg">
                <div className="left-section w-1/2 bg-white flex justify-center items-center p-20">
                    <img src={image} alt="Exam logo png" className="w-96 h-auto"/>
                </div>  
                <div className="right-section w-1/2 p-20 bg-white flex flex-col justify-center">
                    <h2 className="text-center pl-16 text-4xl mb-20 text-shadow font-bold">Login</h2>
                    <form id="Registration" className="space-y-6">
                    <div className="input-group  items-center pb-2">

                    <div className="input-group flex justify-end items-center">
                            <FontAwesomeIcon icon={faUser} className=" text-gray-400 mr-3" />
                            <FloatingLabel variant="standard" label="username" type="text" className="w-96 "/>
                        </div>

                        <div className="input-group flex justify-end items-center mt-2">
                            <FontAwesomeIcon icon={faLock} className=" text-gray-400 mr-3" />
                            <FloatingLabel variant="standard" label="Password" type="password" className="w-96 "/>
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button type="submit" className="btn w-96 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600">Login</Button>
                        </div>
                        
                    </div>
                    </form>
                </div>
                <div className="footer absolute bottom-2 w-full text-center text-gray-700 text-sm">
                CBTExam©2024
            </div>
            </div>
        </body>
    )
}
