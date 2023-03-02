import React from 'react'
import './Navbar.css'

function Navbar(props) {
    const { variant = 'success', children, ...rest } = props
    return ( <
        div className = { `navbar ${variant}` } > { /* {children} */ } <
        div className = 'flex' >
        <
        ul > { /* <img src="https://findvectorlogo.com/wp-content/uploads/2019/03/myntra-vector-logo.png" alt="myntra" srcset="" class="responsive"/> */ } <
        li > < a className = 'active'
        href = "#home" > MEN < /a></li >
        <
        li > < a href = "#news" > WOMEN < /a></li >
        <
        li > < a href = "#contact" > KIDS < /a></li >
        <
        li > < a href = "#about" > HOME < /a></li >
        <
        li > < a href = "#about" > LIVING < /a></li >
        <
        li > < a href = "#about" > OFFERS < /a></li >
        <
        /ul> <
        /div> <
        /div>
    )
}
export default Navbar