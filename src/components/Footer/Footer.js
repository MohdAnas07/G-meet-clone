import React, { useState } from 'react'
import CSS from './style.module.css'
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';
import CallEndIcon from '@material-ui/icons/CallEnd';
import { Link } from 'react-router-dom';


const Footer = ({ micOn,
    setMicOn,
    camOn, setCamOn,
    shareOn,
    setShareOn }) => {



    const styled = {
        width: '3rem',
        height: '3rem'
    }

    const on = {
        'background-color': 'red',
        color: '#fff'
    }
    const off = {
        'background-color': '#fff',
        color: '#000'
    }

    return (
        <div className={CSS.footer}>
            <div className={CSS.iconContainer}>
                <div title={micOn ? 'off mic' : 'on mic'} style={micOn ? on : off} className={CSS.icon} onClick={() => {
                    setMicOn(p => !p)
                }}>
                    {micOn ? <MicIcon style={styled} /> : <MicOffIcon style={styled} />
                    }
                </div>

                <div title={camOn ? 'off camera' : 'on camera'} style={camOn ? on : off} className={CSS.icon} onClick={() => {
                    setCamOn(p => !p)
                }}>
                    {camOn ? <VideocamIcon style={styled} /> : <VideocamOffIcon style={styled} />}
                </div>

                <div title={shareOn ? 'stop screen' : 'share screen'} style={shareOn ? on : off} className={CSS.icon} onClick={() => {
                    setShareOn(p => !p)
                }}>
                    {shareOn ? <ScreenShareIcon style={styled} /> : <StopScreenShareIcon style={styled} />}
                </div>

                <Link exact to='/'>
                    <div title='leave meet' style={{ 'background-color': '#fff', color: 'red' }} className={CSS.icon}>
                        {shareOn ? <CallEndIcon style={styled} /> : <CallEndIcon style={styled} />}
                    </div>
                </Link>


            </div>
        </div>
    )
}

export default Footer
