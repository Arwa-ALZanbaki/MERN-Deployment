import React, { Component, useState } from "react";
import css from './Styles.module.css';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Delete from "./Delete";


function OneInfo(props) {
    const { id } = useParams();
    const history = useHistory();
    const [likes, setLikes] = React.useState(0)
    const [disabledTrigger, setDisabledTrigger] = React.useState(true)
    const [useEffectDatd, setUseEffectDatd] = React.useState({
        pet: {
            _id: '',
            name: '',
            type: '',
            description: '',
            skills: []
        }
    });

    useEffect(() => {
        console.log("--- I'm in useEffect --- ");
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                console.log(res.data);
                if (res.data.pet == null) { history.push('/error') }
                setUseEffectDatd(res.data);
            })
            .catch((error) => console.log("erro: " + error))
        setDisabledTrigger(false)
    }, [])

    return (
        <div className={css.page}>
            <div className={css.navPetbar}>
                <h1>Pet Shelter</h1>
                <Link to='/'>back home</Link>
            </div>
            <div className="d-flex justify-content-between">
            <h3>Details about: {useEffectDatd.pet.name}</h3>
            <Delete id={useEffectDatd.pet._id} name={useEffectDatd.pet.name} />
            </div>
            <div className={css.App}>
                <div className={css.box2}>
                    <div>
                        <h3>Pet Type: {useEffectDatd.pet.type}</h3>
                        <h3>Description: {useEffectDatd.pet.description}</h3>
                        <h3>Skills:</h3>
                        <div className="mx-5">
                            {useEffectDatd.pet.skills.map((pet, i) =>
                                <p key={i} >{pet}</p>
                            )}
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="text-bg-success px-3" onClick={() => setLikes(likes + 1)} disabled={disabledTrigger}>Like {useEffectDatd.pet.name}</button>
                            <p className="mb-0 mx-4">{likes} Like(s)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default OneInfo;