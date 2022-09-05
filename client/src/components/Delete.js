import React, { Component, useState } from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import css from './Styles.module.css';
import { useEffect } from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route, Link ,useHistory} from "react-router-dom";



function Delete(props) {
    const { id , name } = props
    const history = useHistory();
    function deleteFunction(id) {

        // confirmAlert({
        //     // title: 'Confirm Delete',
        //     message: 'Are you sure you want to remove the pet?',
        //     buttons: [
        //         {
        //             label: 'Yes',
        //             onClick: () => {
        //                 console.log(" *** deleteing *** ");
        //                 axios.delete('http://localhost:8000/api/pets/delete/' + id)
        //                     .then(res => console.log(res))
        //                     .catch((error) => console.log(error))
        //                 console.log(" *** end of deleteing *** ");
        //                 (update) ? props.setUpdat(false) : props.setUpdat(true)
        //             }
        //         },
        //         {
        //             label: 'No',
        //             onClick: () => console.log("... Canceled ...")
        //         }
        //     ]
        // });

        console.log(" *** deleteing *** ");
                        axios.delete('http://localhost:8000/api/pets/delete/' + id)
                            .then(res => console.log(res))
                            .catch((error) => console.log(error))
                        console.log(" *** end of deleteing *** ");
                        history.push('/')


    }

    return (
        <input type="submit" value={'Adopt '+ name} className="btn btn-danger px-4" onClick={() => deleteFunction(id)} />
    );

}

export default Delete;