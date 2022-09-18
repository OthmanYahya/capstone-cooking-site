import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Searched />} />
            <Route path='/recipe/:id' element={<Recipe />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Pages