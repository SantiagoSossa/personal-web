import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationItems = (props) => {
    <li>
        <NavLink to="/about" exact>About</NavLink>
        <NavLink to="/proyects" exact>Proyects</NavLink>
    </li>
};

export default NavigationItems;