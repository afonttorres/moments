import React from "react";
import { useState } from "react";
import { generalServices } from "../../services/generalServices";
import { useNavigate } from 'react-router-dom';
import { BgButton } from "../Buttons/Buttons.styled";
import { SetFormRow, Input, Label, SetBtnPos, SetForm } from "./Forms.styled";

export const SettingsForm = ({ user, checkUser, showPreview, update, openModal }) => {

    const [formData, setFormData] = useState(
        {
            name: user.name,
            username: user.username,
            description: user.description,
            avatarUrl: user.avatarUrl,
            bannerUrl: user.bannerUrl,
        }
    )

    const [filledInputs, setFilledInputs] = useState([]);

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
            if (formData[field] !== "" && formData[field] !== checkUser[field]) filledInputs.push(field);
        }
        setFilledInputs(filledInputs);
    }

    const resetInputs = () => {
        setFormData(
            {
                name: user.name,
                username: user.username,
                description: user.description,
                avatarUrl: user.avatarUrl,
                bannerUrl: user.bannerUrl,
            }
        )
        setFilledInputs([]);
    }

    const updateData = (e) => {
        e.preventDefault();
        let data = sanitize();
        if (!data) return;
        update(data);
        resetInputs();
    }


    const sanitize = () => {
        let data;
        for (let field in formData) {
            data = { ...data, [field]: formData[field].trim() };
            if (typeof formData[field] !== 'string') { openModal(`Wrong type of input`); return };
            if (typeof formData[field] !== 'string') { openModal(`Wrong type of input`); return };
            let token = generalServices.regex(formData[field], field);
            if (token) { openModal(`${generalServices.capitalize(field)} can't contain ${token}`); return };
            if (field.includes('username') && formData[field].includes(' ')) { openModal(`Username can't contain spaces`); return };
            if (!field.includes('description') || field.includes('Url'))
                data = { ...data, [field]: formData[field].toLowerCase() };
        }
        return data;
    }

    return (
        <SetForm onSubmit={updateData}>
            {Object.keys(formData).map((field, key) => (
                <SetFormRow key={key}>
                    <Label color={filledInputs.includes(field) ? "--interaction-color" : "--font-color-plain-noBg"}>{field.replace('Url', ' url')}</Label>
                    <Input
                        border={filledInputs.includes(field) ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}
                        value={formData[field]}
                        type={field.includes("Url") ? 'url' : 'text'}
                        name={field}
                        placeholder={field.replace("Url", " url")}
                        onChange={handleInputChange}
                        onFocus={(e) => e.target.select()}
                    />
                </SetFormRow>
            ))}
            <SetBtnPos><BgButton type='submit'>Done</BgButton></SetBtnPos>
        </SetForm>
    )
}