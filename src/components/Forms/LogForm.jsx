import React, { useState } from "react";
import { Input, Form, Label } from "./Forms.styled";
import { BgButton } from "../Buttons/Buttons.styled";
import { validationUtil } from "../../utils/validation";

export const LogForm = (props) => {

    const [userData, setUserData] = useState({ name: "", username: "", email: "", password: "" });
    const [filledInputs, setFilledInputs] = useState([]);

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserData({ ...userData, [name]: value })
        getFilledInputs();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.location === undefined) return;
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
        if (props.location.includes("log")) { delete userData["name"]; delete userData["username"]; } 
        setUserData(userData);
    }
    const sanitize = () => {
        const validation = validationUtil.validationSumObj(userData)
        if (typeof validation !== 'boolean') {
            props.openModal(validation);
            return;
        }
        return validation;
    }

    const setAction = () => {
        props.location.includes("log") ? props.functions.login(userData) : props.functions.signin(userData);
    }

    const resetValues = () => {
        setUserData({ name: "", username: "", email: "", password: "" });
        setFilledInputs([]);
    }

    return (
        <Form heightMB={'60%'} onSubmit={handleSubmit}>
            {props.location.includes("sign") ?
                <>
                    <Label color={filledInputs.includes("name") ? "--interaction-color" : "--font-color-plain-noBg"}>Your name</Label>
                    <Input border={filledInputs.includes("name") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} capi={'capitalize'} type="text" name="name" value={userData.name} placeholder="Name" onChange={handleInputChange} onFocus={(e) => e.target.select()} />
                    <Label color={filledInputs.includes("username") ? "--interaction-color" : "--font-color-plain-noBg"}>username</Label>
                    <Input border={filledInputs.includes("username") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} type="text" name="username" value={userData.username} placeholder="username" onChange={handleInputChange} onFocus={(e) => e.target.select()} />
                </>
                : null}
            <Label color={filledInputs.includes("email") ? "--interaction-color" : "--font-color-plain-noBg"}>Email</Label>
            <Input border={filledInputs.includes("email") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} type="email" name="email" value={userData.email} placeholder="Email" onChange={handleInputChange} onFocus={(e) => e.target.select()} />
            <Label color={filledInputs.includes("password") ? "--interaction-color" : "--font-color-plain-noBg"}>Password</Label>
            <Input border={filledInputs.includes("password") ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`} type="password" name="password" value={userData.password} placeholder="Password" onChange={handleInputChange}onFocus={(e) => e.target.select()}  />
            <BgButton type="submit">{props.title}</BgButton>
        </Form>
    )
}