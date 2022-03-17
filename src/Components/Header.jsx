import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FaAlignJustify } from 'react-icons/fa'


export default function Header(props) {
    const [resMenu, setResMenu] = useState(false);
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/"><h1>{props.title}</h1></Link>
                </div>
                <div className={resMenu ? "menu show" : "menu hide"}>
                    <ul>
                        <li><Link to="/">Latest</Link></li>
                        <li><Link to="/world">World</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
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
