import React, { useState } from "react";
import { MForm, MInput, Label, SButton } from "./Forms.styled";
export const MomentForm = (props) => {

    const [moment, setMoment] = useState({
        location: "",
        title: "",
        description: "",
        imgUrl: "",
        avatarUrl: "",
    })
    const [msg, setMsg] = useState("");

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMoment({ ...moment, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.action(moment);
    }

    return (
        <MForm onSubmit={handleSubmit}>{Object.keys(moment).map((field, key) => (
            <>
                <Label>{field.replace("Url", " url")}</Label>
                <MInput type={moment[field].includes("Url") ? "url" : "text"} name={field} value={moment[field]} placeholder={field.replace("Url", " url")} onChange={handleInputChange} />
            </>
        ))}
            <SButton>Upload</SButton>
        </MForm>
    )
}