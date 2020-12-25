import React from 'react'
import Navbar from './Navbar'

function Admin() {

    return (
        <>
            <Navbar pad="-70px" color="blue" />            
            <video width="100%" height="100%" loop autoPlay muted>
                <source src='/Videos/calm.mp4' type='video/mp4' />
            </video> 
        </>
    )
}

export default Admin
