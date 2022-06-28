export const generalServices = {
    cutString(str, char1, char2) {
        return str.substring((str.indexOf(char1)) + 1, str.indexOf(char2))
    },

    shortenText(text, maxLength) {
        let data;
        text.length > maxLength ? data = `${text.substring(0, maxLength)} ...` : data = text;
        return data;
    },
    capitalize(text){
        return text[0].toUpperCase() + text.substring(1, text.length);
    },
    capitalizeName(str){
            let capitalized = []
            str.split(' ').forEach(word => capitalized.push(this.capitalize(word)))
            return capitalized.join(' ')

    },
    objToLowerCase(obj){
        let lower = {...obj}
        for (let key in obj){
            if( typeof obj[key] === 'string') lower = {...lower, [key] : obj[key].toLowerCase()}
        }
        return lower;
    }
}