import React from 'react'
import {BsGithub , BsTelegram} from 'react-icons/bs';
import {AiFillTwitterCircle , AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <h6>COMPANY</h6>
                    <ul className='list-unstyled mx-4'>
                        <li>Bug Bounty</li>
                        <li>Jobs / Career</li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <h6>DEVELOPER</h6>
                    <ul className='list-unstyled mx-4'>
                        <li>Octa Farm Documentation</li>
                        <li>Explore Github</li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <h6>COMMUNITY</h6>
                    <ul className='list-unstyled mx-4'>
                        <li>Telegram</li>
                        <li>Blog</li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <h6>LEGAL</h6>
                    <ul className='list-unstyled mx-4'>
                        <li>Privacy & Terms</li>
                    </ul>

                </div>
            <hr className='mt-5'/>
            </div>
            <div className="row mt-4">
                <div className="d-flex justify-content-between">
                    <div>
                    <img src="Assets/octalogo.png" width={"190px"} alt="Octa logo" />
                    </div>
                    <div>
                        <p>© 2021-22 Octa Farm. All rights reserved.</p>
                    </div>
                    <div>
                    <BsGithub size={"35px"}/> &nbsp; &nbsp;
                    <AiFillTwitterCircle size={"38px"}/>  &nbsp; &nbsp;
                    <BsTelegram size={"35px"}/>&nbsp; &nbsp;
                    <AiFillInstagram size={"35px"}/>&nbsp; &nbsp;
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer