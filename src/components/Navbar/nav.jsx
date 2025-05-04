import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiBook2Line } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from 'react';

const nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            {/* {with on click we change the active button to one we click on} */}
            {/* {we use usestate so we can have an active state} */}
            {/* {we use className={activeNav === '#' ? 'active' : ''} 
            to show that if the active one is the class we have then it should make it active if not leave it} */}
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>< FaRegUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></a>
            {/* <a href="#services"><IoHomeOutline /></a> */}
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
        </nav>
    )
}

export default nav