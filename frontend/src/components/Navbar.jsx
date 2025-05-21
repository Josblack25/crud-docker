import React from 'react'
import { Link } from 'react-router-dom'

import {github} from '../assets/index.js'






export default function Navbar() {

      
  return (
    <>
        <div className="navbar navBar  flex  justify-between p-2 mx-auto w-full max-w-screen-lg">
            
            <div className=" navbar-start flex gap-5 ">
                <Link to="/" className="btn btn-ghost normal-case text-xl ">
                <span>CRUD</span>
                </Link>
             
            </div>

            <div className="navbar-center md:flex flex-wrap  justify-center">

                <nav>
                    <ul>
                        <li>
                            <Link to={"/"} className="btn btn-ghost normal-case text-xl space-x-5">
                                <span>Home</span>
                            </Link>
                            <Link to={"trash"} className="btn btn-ghost normal-case text-xl ml-5">
                                <span>Trash</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="navbar-end flex justify-end space-x-5">
                <a href="https://github.com/Josblack25/crud-docker" target='_blank' >
                    <img src={github} alt="github" className="imgGit object-contain w-10 md:w-12"/>

                </a>
                          
            </div>

        </div>
    </>
  )
}
