import React from "react";
import { useState } from "react";
import { formatUtil } from "../../utils/format";
import { regexUtil, validationUtil } from "../../utils/validation";
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
        if (!sanitize()) return;
        formData.username = formData.username.toLowerCase();
        update(formatUtil.objToTrimed(formData));
        resetInputs();
    }


    const sanitize = () => {
        let invalid;
        for (let field in formData) {
            let validations = [
                validationUtil.notEmpty(formData[field], field),
                validationUtil.type(formData[field], field),
                validationUtil.spacing(formData[field], field),
                validationUtil.regex(formData[field], field)
            ];
            validations.forEach(val => { if (val) invalid = val })
        }
        if (invalid) {
            openModal(validationUtil.print(invalid));
            return;
        }
        return true;
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