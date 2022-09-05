import React, { Component, useState } from "react";
import css from './Styles.module.css';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link, useParams, useHistory } from "react-router-dom";



function Update(props) {
    const { id } = useParams();
    const history = useHistory();
    const [unique , setUnique]= React.useState("")

    const [data, setData] = React.useState({
        _id:'',
        name: "",
        type: "",
        description: "",
        skills: ["", "", ""]
    });

    const [errors, setErrors] = React.useState({
        nameError: "",
        typeError: "",
        descriptionError: "",
    });

    const handleOnChange = (event) => {
        event.preventDefault();
        setErrors({
            ...errors,
            nameError: "",
            typeError: "",
            descriptionError: ""
        })
        setUnique('')
        // -----------------------------
        if (event.target.name == "skills1") {
            const newSkills = data.skills
            newSkills[0] = event.target.value
            setData({ ...data, shills: newSkills })
        }
        if (event.target.name == "skills2") {
            const newSkills = data.skills
            newSkills[1] = event.target.value
            setData({ ...data, shills: newSkills })
        }
        if (event.target.name == "skills3") {
            const newSkills = data.skills
            newSkills[2] = event.target.value
            setData({ ...data, shills: newSkills })
        }
        // -----------------------------
        setData({ ...data, [event.target.name]: event.target.value })
        console.log(event.target.name);

    }

    const onsubmitFunction = (event) => {
        //prevent default behavior of the submit
        event.preventDefault();
        axios.get("http://localhost:8000/api/pets/name/"+ data.name)
        .then(res=>{
            console.log(res)
            // console.log(res.data.pet._id , "-----",data._id);
            if(res.data.pet != null && res.data.pet._id != data._id){
                    setUnique('sorry, but the name is already in the database')
            }else{
                axios.put("http://localhost:8000/api/pets/update/" + id, { ...data })
            .then(res => {
                console.log(res)
                if ('error' in res.data) {
                    if ("name" in res.data.error.errors) {
                        setErrors({ ...errors, nameError: res.data.error.errors.name.message })
                    }
                    if ("type" in res.data.error.errors) {
                        setErrors({ ...errors, typeError: res.data.error.errors.type.message })
                    }
                    if ("description" in res.data.error.errors) {
                        setErrors({ ...errors, descriptionError: res.data.error.errors.description.message })
                    }
                } else {
                    setErrors({
                        ...errors,
                        nameError: "",
                        typeError: "",
                        descriptionError: ""
                    })
                    history.push('/');
                }
            })
            .catch(err => console.log(err));
            }
        })
        .catch(err=> console.log(err))

        
    }


useEffect(() => {
    console.log("--- I'm in useEffect --- ");
    axios.get('http://localhost:8000/api/pets/' + id)
        .then(res => {
            console.log(res.data);
            if (res.data.pet == null) { history.push('/error') }
            setData({
                ...data,
                _id: res.data.pet._id,
                name: res.data.pet.name,
                type: res.data.pet.type,
                description: res.data.pet.description,
                skills: res.data.pet.skills
            })
        })
        .catch((error) => console.log(error));

}, [])


return (
    <div className={css.page}>
            <div className={css.navPetbar}>
                <h1>Pet Shelter</h1>
                <Link to='/'>back home</Link>
            </div>
            <h3>Edit {data.name}</h3>
    <div className={css.App}>
        <div className={css.box2}>

            {/* --- the unique name message --- */}
            {(unique != '') ? (<div className="alert alert-danger">{unique}</div>) : null}
            {/* ----- the div the display the errors -----  */}
            {(errors.nameError != '') ? (<div className="alert alert-danger">{errors.nameError}</div>) : null}
            {(errors.typeError != '') ? (<div className="alert alert-danger">{errors.typeError}</div>) : null}
            {(errors.descriptionError != '') ? (<div className="alert alert-danger">{errors.descriptionError}</div>) : null}
            {/* ----- the end of the div errors ----- */}

            <form onSubmit={onsubmitFunction} className={css.form2}>
                <div className="row">
                    <div className="col">
                        <div className={css.formDive}>
                            <label>Pet Name:</label>
                            <input type="text" name="name" value={data.name} onChange={handleOnChange} required />
                        </div>
                        <div className={css.formDive}>
                            <label>Pet Type:</label>
                            <input type="text" name="type" value={data.type} onChange={handleOnChange} />
                        </div>
                        <div className={css.formDive}>
                            <label>Pet Description:</label>
                            <input type="text" name="description" value={data.description} onChange={handleOnChange} />
                        </div>
                    </div>
                    <div className="col">
                        <label>Skills (optional):</label>
                        <div className={css.formDive}>
                            <label>Skill 1:</label>
                            <input type="text" name="skills1" value={data.skills[0]} onChange={handleOnChange} />
                        </div>
                        <div className={css.formDive}>
                            <label>Skill 2:</label>
                            <input type="text" name="skills2" value={data.skills[1]} onChange={handleOnChange} />
                        </div>
                        <div className={css.formDive}>
                            <label>Skill 3:</label>
                            <input type="text" name="skills3" value={data.skills[2]} onChange={handleOnChange} />
                        </div>
                    </div>
                </div>

                <div className={css.divCenter}>
                    <input type="submit" value='Edit Pet' className="btn btn-primary" />
                    <Link to='/' className={css.btnCancel} >Cancel</Link>
                </div>
            </form>
        </div>
    </div>
    </div>
);

}

export default Update;