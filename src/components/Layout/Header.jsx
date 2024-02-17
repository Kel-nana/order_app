import React, { Fragment } from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import mealsImg from '../../assets/mealsE.jpg';
import classes from './header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartBtn />
        </header>
        <div className={classes['main_image']}>
            <img className={classes['main_img']} src={mealsImg} alt="Food Art"/> 
        </div>
    </Fragment>
};

export default Header;