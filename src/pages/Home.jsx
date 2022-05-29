// import React from 'react'
import {Header} from '../components/header/Header'
import {Slider} from '../components/slider/Slider'
import {ListServices} from '../components/listServices/ListServices'
import {ListBrands} from '../components/listBrands/ListBrands'
import {Faq} from '../components/faq/Faq'
import {Feedback} from '../components/feedback/Feedback'
import {Footer} from '../components/footer/Footer'
import {Request} from '../components/request/Request'


const Home = () => {
    return (
        <div>
        <Header/>
        <Slider/>
        <ListServices/>
        <Request/>
        <ListBrands/>
        <Faq/>
        <Feedback/>
        <Footer/>
        </div>
    )
}

export default Home
