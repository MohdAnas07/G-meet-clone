import React, { useState } from 'react'
import Screen from './Screen/Screen'
import Footer from './Footer/Footer'
import CSS from './index.module.css'
// import Video from './video/Video'

const Index = ({ userName }) => {
    const [micOn, setMicOn] = useState(false);
    const [camOn, setCamOn] = useState(true);
    const [shareOn, setShareOn] = useState(false);

    const props = {
        micOn,
        setMicOn,
        camOn, setCamOn,
        shareOn,
        setShareOn,
        userName
    }
    console.log(userName);

    return (
        <>
            <div className={CSS.container}>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Screen {...props} />
                    <hr />
                </div>
                <Footer {...props} />
            </div>

        </>
    )
}

export default Index
