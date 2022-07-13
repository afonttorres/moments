import React from "react";
import { useState } from "react";
import { generalServices } from "../../services/generalServices";
import { useNavigate } from 'react-router-dom';
import { BgButton } from "../Buttons/Buttons.styled";
import { SetFormRow, Input, Label, SetBtnPos, SetForm } from "./Forms.styled";

export const SettingsForm = ({ user, checkUser, showPreview, update }) => {

    const [formData, setFormData] = useState(
        {
            name: user.name,
            username: user.username,
            email: user.email,
            description: user.description,
            avatarUrl: user.avatarUrl,
            bannerUrl: user.bannerUrl,
        }
    )

    const [filledInputs, setFilledInputs] = useState([]);
    const navigate = useNavigate();
    const s = 3;
    const ms = s * 1000;


    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        showPreview({ ...formData, [name]: value });
        setFormData({ ...formData, [name]: value });
        getFilledInputs();
    }


    const getFilledInputs = () => {
        let filledInputs = [];
        for (let field in formData) {
            console.log(user[field])
            if (formData[field] !== "" && formData[field] !== checkUser[field]) filledInputs.push(field);
        }
        setFilledInputs(filledInputs);
    }

    const resetInputs = () => {
        // let data = {};
        // Object.keys(formData).forEach((key)=> data = {...data, [key]:''});
        // setFormData(data);
        setFormData(generalServices.castObj(user, ["name", "username", "email", "description", "avatarUrl", "bannerUrl"]));
        setFilledInputs([]);
    }

    const updateData = (e) => {
        e.preventDefault();
        //sanitize
        update();
        resetInputs();
        setTimeout(() => { navigate('/profile') }, ms)
    }

    console.log(formData);
    return (
        <SetForm onSubmit={updateData}>
            {Object.keys(formData).map((field, key) => (
                <SetFormRow key={key}>
                    <Label color={filledInputs.includes(field) ? "--interaction-color" : "--font-color-plain-noBg"}>{field.replace('Url', ' url')}</Label>
                    <Input
                        border={filledInputs.includes(field) ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}
                        value={formData[field]}
                        type={field.includes("Url") ? "url" : 'text'}
                        name={field}
                        placeholder={field.replace("Url", " url")}
                        onChange={handleInputChange}
                    />
                </SetFormRow>
            ))}
            <SetBtnPos><BgButton type='submit'>Done</BgButton></SetBtnPos>
        </SetForm>
    )
}