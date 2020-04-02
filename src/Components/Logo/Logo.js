import React from 'react';
import pokeLogo from '../../Assets/Images/pokedexPic.png';
import classes from './Logo.module.css';

//imports logo - reusable

const logo = (props) => (
    <div style={{height: props.height}}>
        <img src = {pokeLogo} alt="MyPoke" />
    </div>
    /* <div className={classes.Logo} style={{height: props.height}}>
        <img src = {burgerLogo} alt="MyBurger" />
    </div> */
);

export default logo;