import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Input, Label, Button, TextArea } from "./Forms.styled";
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

    const handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
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
        for (let key in moment) {
            if (moment[key] === "" || moment[key] === undefined) { props.openModal('Some inputs might be empty.'); return false; }
            if (typeof moment[key] !== 'string') { props.openModal('Wrong type of input!'); return false; }
            //confirm modal when moment[key] === props.modal[key]
        }
        return true;
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

    return (
        <Form heightDT={'100%'} onSubmit={handleSubmit}>{Object.keys(moment).map((field, key) => (
            <>
                <Label key={key} color={filledInputs.includes(field) ? "--interaction-color" : "--font-color-plain-noBg"} >{field.replace("Url", " url")}</Label>
                <>{field !== 'description' ?
                    <Input
                        key={key}
                        border={filledInputs.includes(field) ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}
                        type={moment[field].includes("Url") ? "url" : 'text'}
                        name={field} value={moment[field]}
                        placeholder={field.replace("Url", " url")}
                        onChange={handleInputChange} />
                    :
                    <TextArea
                        key={key}
                        border={filledInputs.includes(field) ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}
                        type='text'
                        name={field} value={moment[field]}
                        placeholder={field}
                        onChange={handleInputChange} />}
                </>
            </>
        ))}
            <Button>{props.title}</Button>
        </Form>
    )
}