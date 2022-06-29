import React, { useState, useEffect } from "react";
import { Input, Form, Label, Button } from "./Forms.styled";
import { generalServices } from '../../services/generalServices';
import { BgButton } from "../Buttons/Buttons.styled";

export const LogForm = (props) => {

    const [userData, setUserData] = useState({ name: "", alias: "", email: "", password: "" });
    const [filledInputs, setFilledInputs] = useState([]);

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserData({ ...userData, [name]: value })
        getFilledInputs();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.location == undefined) return;
        setData();
        if (!sanitize()) return;
        setAction();
        resetValues();
    }

    const getFilledInputs = () => {
        let filledInputs = [];
        for (let field in userData) {
            if (userData[field] !== "") filledInputs.push(field);
        }
        setFilledInputs(filledInputs);
    }

    const setData = () => {
        if (props.location.includes("log")) { delete userData["name"]; delete userData["alias"]; } 
        setUserData(userData);
    }
    const sanitize = () => {
        let data = userData;
        for (let key in userData) {
            data[key] = data[key].trim();
            if (data[key] === "" || data[key] === undefined) { props.openModal("Some inputs might be empty."); userData[key] = ''; return false }
            if (typeof data[key] !== "string" || data[key] === ' ') { props.openModal("Wrong type of input!"); userData[key] = ''; return false }
            if (key == "password") {
                if (data[key].includes(' ')) { props.openModal("Password shouldn't contain spaces."); userData[key] = ''; return false }
                if (data[key].length < 7) { props.openModal("Password should have at least 7 characters."); userData[key] = ''; return false }
            }
            if (key !== "password" && data.password.length >= 7) {
                data[key] = data[key].toLowerCase();
            }
            setUserData(data);
        }
        return true;
    }

    const setAction = () => {
        props.location.includes("log") ? props.functions.login(userData) : props.functions.signin(userData);
    }

    const resetValues = () => {
        setUserData({ name: "", alias: "", email: "", password: "" });
        setFilledInputs([]);
    }

    return (
        <Form heightMB={'60%'} onSubmit={handleSubmit}>
            {props.location.includes("sign") ?
                <>
                    <Label color={filledInputs.includes("name") ? "--interaction-color" : "--font-color-plain-noBg"}>Your name</Label>
                    <Input border={filledInputs.includes("name") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} capi={'capitalize'} type="text" name="name" value={userData.name} placeholder="Name" onChange={handleInputChange} />
                    <Label color={filledInputs.includes("alias") ? "--interaction-color" : "--font-color-plain-noBg"}>Alias</Label>
                    <Input border={filledInputs.includes("alias") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} type="text" name="alias" value={userData.alias} placeholder="Alias" onChange={handleInputChange} />
                </>
                : null}
            <Label color={filledInputs.includes("email") ? "--interaction-color" : "--font-color-plain-noBg"}>Email</Label>
            <Input border={filledInputs.includes("email") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} type="email" name="email" value={userData.email} placeholder="Email" onChange={handleInputChange} />
            <Label color={filledInputs.includes("password") ? "--interaction-color" : "--font-color-plain-noBg"}>Password</Label>
            <Input border={filledInputs.includes("password") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} type="password" name="password" value={userData.password} placeholder="Password" onChange={handleInputChange} />
            <BgButton>{props.title}</BgButton>
        </Form>
    )
}