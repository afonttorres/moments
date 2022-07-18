export const formatUtil = {
    cutString(str, char1, char2) {
        return str.substring((str.indexOf(char1)) + 1, str.indexOf(char2))
    },

    shortenText(text, maxLength) {
        let data;
        text.length > maxLength ? data = `${text.substring(0, maxLength)} ...` : data = text;
        return data;
    },
    capitalize(text) {
        return text[0].toUpperCase() + text.substring(1, text.length);
    },
    capitalizeName(str) {
        let capitalized = []
        str.split(' ').forEach(word => capitalized.push(this.capitalize(word)))
        return capitalized.join(' ')

    },
    objToLowerCase(obj) {
        let lower = { ...obj }
        for (let key in obj) {
            if (typeof obj[key] === 'string') lower = { ...lower, [key]: obj[key].toLowerCase() }
        }
        return lower;
    },
    castObj(obj, remainingKeys) {
        let newObj = {};
        for (let key in obj) {
            if (remainingKeys.includes(key)) {
                newObj = { ...newObj, [key]: !key.includes('id' || 'Id') ? obj[key] : parseInt(obj[key]) }
            }
        }
        return newObj
    },
    regex(str, field) {
        let invalidInputs = ['""', '#', '$', '%', '&', '(', ')', '=', '?', '¿', '!', '¡', '*', '+', '{', '}', '[', ']', '<', '>'];
        let inputs = [];
        if (field.includes('Url')) return;
        if (field.includes('description')) invalidInputs = invalidInputs.filter(input => input != '!' && input != '?');
        invalidInputs.forEach(input => {
            if (str.includes(input)) {
                inputs.push(input);
            }
        })
        if (inputs.length == 0) return;
        return inputs;
    }
}