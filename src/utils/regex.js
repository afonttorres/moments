export const regex = {
    regex(){
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