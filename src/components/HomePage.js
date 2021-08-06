import React from 'react'
import Header from './Header'
import Medicines from './Medicines'
import Recete from './Recete'



const HomePage = () => {

    return (
        <>
            <Header />
            <div className="home-container">
            <Recete />
            <Medicines />
            </div>
        </>

    )
}

export default HomePage
