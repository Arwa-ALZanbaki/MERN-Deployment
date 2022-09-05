import React, { Component, useState } from "react";
import css from './Styles.module.css';
import { useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Delete from "./Delete";


function Home(props) {

    const [useEffectDatd, setUseEffectDatd] = React.useState([]);
    const [update, setUpdat] = React.useState(false);

    useEffect(() => {
        console.log("--- I'm in useEffect --- ");
        axios.get('http://localhost:8000/api/pets/')
            .then(res => {
                console.log(res.data);
                setUseEffectDatd(res.data)
            })
            .catch((error) => console.log(error))
        setUpdat(true)
        console.log("--- the end of useEffect --- ");
    }, [update])


    return (
        <div className={css.page}>
            <div className={css.navPetbar}>
                <h1>Pet Shelter</h1>
                <Link to='/pets/new/'>Add a pet to the shelter</Link>
            </div>
            <h3>Thes pets are looking for a good home</h3>
            <div className={css.box}>

                <div>
                    {/* ------------------------- */}
                    {(useEffectDatd.length == 0) ? null :
                        (<table className="table table-dark table-striped mt-3 text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {useEffectDatd.sort((a, b) => (a.type < b.type ? -1 : 1)).map(data => (
                                    <tr key={data._id} >
                                        <td>{data.name}</td>
                                        <td>{data.type}</td>
                                        <td>
                                            <Link to={'/pets/edit/' + data._id} className="mx-2">edit</Link> |
                                            <Link to={'/pets/' + data._id} className="mx-2">details</Link>
                                            {/* <Delete name={data.name} id={data._id} update={update} setUpdat={setUpdat}/> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>)}
                    {/* ------------------------- */}
                </div>
            </div>
        </div>
    );

}

export default Home;