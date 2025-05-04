import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Navbar/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/Services/services'
import Portfolio from './components/Portfolio/portfolio'
import Testimonials from './components/Testimonials/testimonials'
import Contacts from './components/Contacts/contacts'
import Footer from './components/Footer/footer'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contacts />
            <Footer />
        </>
    )
}

export default App 