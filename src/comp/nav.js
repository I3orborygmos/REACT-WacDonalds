import React from 'react'
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './home'
import WacWards from './rewards'
import Deals from './deals'
import WacVents from './wacvents'
import About from './about'
import WacImage from './images/WacDonalds.jpg'


export default function MyNav(){
    return(
        <BrowserRouter>
            <NavBar sticky='top' className= 'bg-color'expand='lg'>
            <div className="d-flex align-items-center">
                <NavBar.Brand>
                <Link to= '/'>
                <img
                    src={WacImage}
                    padding='0'
                    margin='0'
                    width='auto'
                    height='90px'
                    alt='WacDonalds'
                />
                </Link>
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <NavBar.Collapse id="basic-navbar-nav" className='bg-color justify-content-center' >
                <Nav className= 'mx-auto'>
                    <Nav.Link as= {Link} className='mx-2 px-4 py-3' to='/'>Home</Nav.Link>
                    <Nav.Link as= {Link} className='mx-2 px-4 py-3' to={'/rewards'}>WacWards</Nav.Link>
                    <Nav.Link as= {Link} className='mx-2 px-4 py-3' to={'/deals'}>Deals</Nav.Link>
                    <Nav.Link as= {Link} className='mx-2 px-4 py-3' to= {'./wacvents'}>WacVents</Nav.Link>
                    <Nav.Link as= {Link} className='mx-2 px-4 py-3' to= {'./about'}>Manifesto</Nav.Link>
                </Nav> 
                </NavBar.Collapse>  
            </NavBar>
            <Routes>
                    <Route path='/' element = {<Home />} />
                    <Route index element = {<Home />}/>
                    <Route path = "/rewards" element= {<WacWards />} />
                    <Route path = "/deals" element ={<Deals />} />
                    <Route path = '/wacvents' element = {<WacVents />} />
                    <Route path = '/about' element = {<About />} />
            </Routes> 
        </BrowserRouter>
    )
}
