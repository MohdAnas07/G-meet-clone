import React, { useState } from 'react'
import { Input, Button, IconButton } from '@material-ui/core'
import './home.css'
import { Link } from 'react-router-dom'

import homeImg from '../Assets/homeImg.svg'

const Home = ({ userName, setUserName }) => {


    const handleChange = (e) => {
        setUserName(e.target.value)
        // if (!userName.length) {
        //     alert('Please Enter Your Name')
        // }
    }



    return (
        <>
            <div className="container2">

                <div>
                    <h1 className="first_head">Video Meeting</h1>
                </div>

                <div className="mid_container">
                    <div className='meet_form'>
                        <p className='desc'>Start or join a meeting</p>

                        <Input style={{ fontSize: '1.3rem', width: "166px", textAlign: "center" }} placeholder="Enter Your Name" onChange={handleChange} />

                        <Link to='/video'>
                            <Button variant="contained" color="primary" style={{ margin: "20px", padding: ' .5rem 4rem', fontSize: "1.5rem" }}>
                                Go
                            </Button>
                        </Link>
                    </div>

                    <div className="side_img">
                        <img className="home_img" src={homeImg} alt="homeImg" />
                    </div>
                </div>

            </div>

        </>
    )
}
export default Home


{/* // <div style={{ fontSize: "14px", background: "white", width: "10%", textAlign: "center", margin: "auto", marginBottom: "10px" }}>
                //     Source code:
                //     <IconButton style={{ color: "black" }} onClick={() => window.location.href = "https://github.com/0x5eba/Video-Meeting"}>
                //         <GitHubIcon />
                //     </IconButton>
                // </div> */}