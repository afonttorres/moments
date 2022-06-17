import React, { useState, useEffect } from "react";
import { Input, Form, Label, SButton } from "./Forms.styled";

export const LogForm = (props) => {

    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const [msg, setMsg] = useState("");

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.location == undefined) return;
        setData();
        if (!sanitize()) return;
        setAction();
        resetValues();
    }

    const setData = () => {
        if (props.location.includes("log")) delete userData["name"]; setUserData(userData);
    }
    const sanitize = () => {
        for (let key in userData) {
            if (userData[key] == "") { setMsg("Some inputs might be empty"); return false }
            if (typeof userData[key] !== "string") { setMsg("Wrong type of input!"); return false }
            if (key == "password" && userData[key].length < 7) { setMsg("Password should have at least 7 characters"); return false }
            if (key !== "password" && userData.password.length >= 7) {
                userData[key] = userData[key].toLowerCase();
                setUserData(userData);
                setMsg("");
            }
        }
        return true;
    }
    
    const setAction = () => {
        console.log(userData)
        props.location.includes("log") ? props.functions.login(userData) : props.functions.signin(userData);
    }

    const resetValues = () => {
        setUserData({ name: "", email: "", password: "" });
        setMsg("");
    }

    console.log(msg !== "" ? msg : "No message")
    return (
        <Form onSubmit={handleSubmit}>
            {props.location.includes("sign") ?
                <>
                    <Label>Your name</Label>
                    <Input type="text" name="name" value={userData.name} placeholder="Name" onChange={handleInputChange} />
                </>
                : null}
            <Label>Email</Label>
            <Input type="email" name="email" value={userData.email} placeholder="Email" onChange={handleInputChange} />
            <Label>Password</Label>
            <Input type="password" name="password" value={userData.password} placeholder="Password" onChange={handleInputChange} />
            <SButton>{props.location.split("-").join(" ")}</SButton>
        </Form>
    )
}