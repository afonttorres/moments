import React from "react";
import { useState } from "react";
import { formatUtil } from "../../utils/format";
import { validationUtil } from "../../utils/validation";
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
        console.log(sanitize())
        if (!sanitize()) return;
        formData.username = formData.username.toLowerCase();
        update(formatUtil.objToTrimed(formData));
        resetInputs();
    }


    const sanitize = () => {
        const validation = validationUtil.validationSumObj(formData)
        if (typeof validation !== 'boolean') {
            openModal(validation);
            return;
        }
        return validation;
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