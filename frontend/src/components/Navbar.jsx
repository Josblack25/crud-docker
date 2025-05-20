import React from 'react'
import { Link } from 'react-router-dom'

import {github} from '../assets/index.js'






export default function Navbar() {

      
  return (
    <>
        <div className="navbar navBar  flex justify-between p-2 ml-20">
            <div className=" navbar-start ml-5">
                <Link to="/" className="btn btn-ghost normal-case text-xl ">
                <span>CRUD</span>
                </Link>
             
            </div>

            <div className="navbar-center">
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"} className="btn btn-ghost normal-case text-xl mr-5">
                                <span>Home</span>
                            </Link>
                            <Link to={"trash"} className="btn btn-ghost normal-case text-xl ml-5">
                                <span>Trash</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="navbar-end mr-5">
                <a href="https://github.com/Josblack25/crud-flask-react" target='_blank' >
                    <img src={github} alt="github" className=' imgGit object-contain'/>
                </a>
                          
            </div>
        </div>
    </>
  )
}
