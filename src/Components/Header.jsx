import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Header(props) {
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to="/"><h1>{props.title}</h1></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to="/">Latest</Link></li>
                        <li><Link to="/world">World</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/entertainment">Entertainment</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
Header.defaultProps = {
    title: 'Hello'
}
