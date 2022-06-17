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
    const [filledInputs, setFilledInputs] = useState([]);

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMoment({ ...moment, [name]: value });
        getFilledInputs();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.action(moment);
        resetValues();
    }

    const getFilledInputs = () => {
        let filledInputs = [];
        for (let field in moment) {
            if (moment[field] !== "") filledInputs.push(field);
        }
        setFilledInputs(filledInputs);
    }

    const resetValues = () => {
        setMoment({
            location: "",
            title: "",
            description: "",
            imgUrl: "",
            avatarUrl: "",
        });
        setMsg("");
        setFilledInputs([]);
    }

    console.log(filledInputs)
    return (
        <MForm onSubmit={handleSubmit}>{Object.keys(moment).map((field, key) => (
            <>
                <Label color={filledInputs.includes(field) ? "--interaction-color" : ""} >{field.replace("Url", " url")}</Label>
                <MInput 
                    border={filledInputs.includes(field) ? `2px solid var(--ux-border-color);` : ""} 
                    type={moment[field].includes("Url") ? "url" : "text"} 
                    name={field} value={moment[field]} 
                    placeholder={field.replace("Url", " url")} 
                    onChange={handleInputChange} />
            </>
        ))}
            <SButton>Upload</SButton>
        </MForm>
    )
}