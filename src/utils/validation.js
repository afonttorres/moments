import React from "react";
import { Text, TextBold } from "../pages/Styles.styled";
import { formatUtil } from "./format";

export const validationUtil = {
    fields: ['name', 'username', 'email', 'password', 'location', 'description', 'search', 'comment', 'imgUrl', 'avatarUrl', 'bannerUrl'],
    notEmpty(str, field) {
        if (str !== undefined || str !== null || str.length > 1) return;
        return { msg: `${formatUtil.capitalize(field)} can't be empty.` }
    },
    type(str, field) {
        if (typeof str === "string") return;
        return { msg: `${formatUtil.capitalize(field)}'s input is wrong` }
    },
    spacing(str, field) {
        let spaceNotAllowedFields = ['username', 'email', 'password', 'imgUrl', 'avatarUrl', 'bannerUrl'];
        if (!spaceNotAllowedFields.includes(field)) return;
        if (!str.includes(' ')) return;
        return { msg: `${formatUtil.capitalize(field)} can't contain spaces.` }
    },
    regex(str, field) {
        let invalidInputs = ['""', '#', '$', '%', '&', '@', '(', ')', '=', '?', '¿', '!', '¡', '*', '+', '{', '}', '[', ']', '<', '>',
            'à', 'á', 'À', 'Á', 'è', 'é', 'È', 'É', 'í', 'ì', 'Í', 'Ì', 'ó', 'ò', 'Ò', 'Ó', 'ú', 'ù', 'Ú', 'Ù'];
        let inputs = [];
        if (field.includes('Url')) return;
        if (field.includes('email')) invalidInputs = invalidInputs.filter(input => input !== '@');
        if (field.includes('description')) invalidInputs = invalidInputs.filter(input => input !== '!' && input !== '?' && input !== '¡' && input !== '¿');
        invalidInputs.forEach(input => {
            if (str.includes(input)) {
                inputs.push(input);
            }
        })
        if (inputs.length === 0) return;
        return { msg: `${formatUtil.capitalize(field)} can't contain`, tokens: inputs }
    },
    validationSum(str, field) {
        let invalid;
        let validations = [
            validationUtil.notEmpty(str, field),
            validationUtil.type(str, field),
            validationUtil.spacing(str, field),
            validationUtil.regex(str, field)
        ];
        validations.forEach(val => { if (val) invalid = val })
        if (!invalid) return;
        return this.print(invalid);
    },
    print(validation) {
        if (!validation) return;
        return <Text> {validation.msg} <TextBold style={{ color: 'var(--interaction-color)' }}>{validation.tokens ? validation.tokens.map((token, key) => (key < validation.tokens.length - 1 ? token + ', ' : token)) : null}</TextBold>.</Text>
    }
}
