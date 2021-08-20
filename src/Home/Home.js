import React from 'react'
import { Input, Button } from '@material-ui/core'
import './home.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import homeImg from '../Assets/homeImg.svg'


const Home = ({ userName, setUserName }) => {

    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    const handleUser = () => {
        if (!userName) {
            alert('Please Enter your name !')
        }
    }

    // toast.error('Please Enter the Name !', { position: "top-center", hideProgressBar: true, });


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

                        <Link to={userName ? '/video' : '/'} >
                            <Button onclick={handleUser} variant="contained" color="primary" style={{ margin: "20px", padding: ' .5rem 3rem', fontSize: "1.5rem" }}>
                                Start
                            </Button >
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
