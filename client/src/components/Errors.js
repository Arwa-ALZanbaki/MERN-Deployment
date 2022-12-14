import React, { Component, useState } from "react";
import css from './Styles.module.css';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link, useParams, useHistory } from "react-router-dom";



function Errors(props) {

    return (
        <div className={css.App}>
            <div className={css.box}>
                <div className={css.divCenter}>
                    <h2 className="mb-2">We're sorry, but we could not find the pet you are looking for.</h2>
                    <h2 className="mt-3 mb-5">Would you like to add the pet to the shelter?</h2>
                    <div>
                        <Link to='/' className={css.btnNew} >Home</Link>
                        <Link to='/pets/new' className={css.btnNew}>Add a new pet</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Errors;