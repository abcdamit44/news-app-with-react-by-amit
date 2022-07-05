import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FaAlignJustify } from 'react-icons/fa'


export default function Header(props) {
    const [resMenu, setResMenu] = useState(false);
    return (
        <>
            <nav>
                <div className="logo">
                    <NavLink to="/"><h1>{props.title}</h1></NavLink>
                </div>
                <div className={resMenu ? "menu show" : "menu hide"}>
                    <ul>
                        <li><NavLink to="/">Latest</NavLink></li>
                        <li><NavLink to="/world">World</NavLink></li>
                        <li><NavLink to="/business">Business</NavLink></li>
                        <li><NavLink to="/sports">Sports</NavLink></li>
                        <li><NavLink to="/entertainment">Entertainment</NavLink></li>
                    </ul>
                </div>
                <span className="mobMenu" onClick={() => { setResMenu(!resMenu) }}>
                    <FaAlignJustify />
                </span>
            </nav>
        </>
    )
}
Header.defaultProps = {
    title: 'Hello'
}
