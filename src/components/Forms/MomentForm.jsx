import React, { useState } from "react";
import { useEffect } from "react";
import { validationUtil } from "../../utils/validation";
import { BgButton } from "../Buttons/Buttons.styled";
import { Form, Input, Label, TextArea } from "./Forms.styled";
export const MomentForm = (props) => {

    const [moment, setMoment] = useState({
        location: props.moment ? props.moment.location : "",
        description: props.moment ? props.moment.description : "",
        imgUrl: props.moment ? props.moment.imgUrl : ""
    })

    const [filledInputs, setFilledInputs] = useState([]);

    useEffect(() => {
        setMoment({
            location: props.moment ? props.moment.location : "",
            description: props.moment ? props.moment.description : "",
            imgUrl: props.moment ? props.moment.imgUrl : ""
        })
    }, [props])

    const handleFileChange = (e) => {
        console.log(e.target.name, e.target.files[0]);
        let data = { ...moment, file: e.target.files[0] };
        props.uploadImg(data);
    }

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value ? e.target.value : "";
        setMoment({ ...moment, [name]: value });
        getFilledInputs();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!sanitize()) return;
        props.action(moment);
        resetValues();
    }

    const sanitize = () => {
        const validation = validationUtil.validationSumObj(moment)
        if (typeof validation !== 'boolean') {
            props.openModal(validation);
            return;
        }
        return validation;
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
            description: "",
            imgUrl: "",
        });
        setFilledInputs([]);
    }

    console.log(props.moment);
    return (
        <Form heightDT={'100%'} onSubmit={handleSubmit}>{Object.keys(moment).map((field, key) => (
            <>
                <Label key={key} color={filledInputs.includes(field) ? "--interaction-color" : "--font-color-plain-noBg"} >{field.replace("Url", " url")}</Label>
                <>{field !== 'description' ?
                    <Input
                        key={key}
                        border={filledInputs.includes(field) ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}
                        type={field.includes("Url") && !props.moment ? "file" : 'text'}
                        name={field} value={moment[field]}
                        placeholder={field.replace("Url", " url")}
                        onChange={field.includes("Url") && !props.moment ? handleFileChange : handleInputChange}
                        // onChange={handleInputChange}
                        onFocus={(e) => e.target.select()}
                    />
                    :
                    <TextArea
                        key={key}
                        border={filledInputs.includes(field) ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}
                        type='text'
                        name={field} value={moment[field]}
                        placeholder={field}
                        onChange={handleInputChange}
                        onFocus={(e) => e.target.select()}
                    />}
                </>
            </>
        ))}
            <BgButton type="submit">{props.title}</BgButton>
        </Form>
    )
}