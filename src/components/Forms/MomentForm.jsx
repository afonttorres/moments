import React, { useState } from "react";
import { useEffect } from "react";
// import { Col } from "../../pages/Styles.styled";
import { Row } from "../../pages/Styles.styled";
import { validationUtil } from "../../utils/validation";
import { FileButton } from "../Buttons";
import { BgButton } from "../Buttons/Buttons.styled";
import { ChangeImageButton } from "../Buttons/ChangeImgButton";
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

    const hiddenInput = React.useRef(null);
    const clickHiddenInput = (e) => {
        e.preventDefault();
        hiddenInput.current.click();
    };

    const changeImg = (e) => {
        setMoment({ ...moment, imgUrl: "" });
        clickHiddenInput(e);
    }

    return (
        <Form heightDT={'100%'} onSubmit={handleSubmit}>{Object.keys(moment).map((field, key) => (
            <React.Fragment key={key}>
                <Label key={key} color={filledInputs.includes(field) ? "--interaction-color" : "--font-color-plain-noBg"} >{field.replace("Url", " url")}</Label>
                <>{field !== 'description' ?
                    <>
                        <Input
                            style={field.includes("Url") && moment[field] === '' ? { display: 'none' } : null}
                            ref={hiddenInput}
                            key={key}
                            border={filledInputs.includes(field) ? `2px solid var(--ux-border-color)` : `1px solid var(--border-color)`}
                            type={field.includes("Url") && moment[field] === '' ? "file" : 'text'}
                            name={field} value={moment[field]}
                            placeholder={field.replace("Url", " url")}
                            onChange={field.includes("Url") && moment[field] === '' ? handleFileChange : handleInputChange}
                            onFocus={(e) => e.target.select()}
                        />

                        {field.includes("Url") && moment[field] === '' && <Row style={{ height: 'fit-content' }}><FileButton action={clickHiddenInput} /></Row>}
                        {field.includes("Url") && moment[field] !== '' && <Row style={{ height: 'fit-content' }}><ChangeImageButton action={changeImg} /></Row>}
                    </>

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
            </React.Fragment>
        ))}
            <BgButton type="submit">{props.title}</BgButton>
        </Form>
    )
}