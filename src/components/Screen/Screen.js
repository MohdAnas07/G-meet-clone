import React, { useState } from 'react'
import CSS from './style.module.css'
import Video from '../video/Video'

const Screen = ({ micOn, camOn, shareOn, userName }) => {


    return (
        <>
            {
                userName ? (<div className={CSS.screen} >
                    {
                        camOn ? <Video /> :
                            <h1 className={CSS.screenName}>{userName[0]} </h1>
                    }
                    <p className={CSS.screenFullName} >{userName} ( You ) </p>
                </div >) : (
                    <h1 style={CSS.noFills}>Please Enter the name and join again</h1>
                )
            }
        </>
    )
}

export default Screen
