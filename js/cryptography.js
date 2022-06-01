const encodeMessage = () => {
    const textInput = document.getElementById('textInput');
    const encodedMessage = encode(textInput.value);
    document.getElementById('encodeOutput').innerText = encodedMessage;
}
const encode = (input) => {
    var text = '';
    let num = Math.floor((Math.random() * 9));
    text += num;
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) === 'Z' || input.charAt(i) === 'z') {
            text = text + String.fromCharCode(input.charCodeAt(i) - 25);
        }
        else {
            text = text + (String.fromCharCode(input.charCodeAt(i) + 1));
        }
    }

    return text;
}
const decodeMessage = () => {
    const encodedText = document.getElementById('encodedText');
    const decodedMessage = decode(encodedText.value);
    document.getElementById('decodedText').innerText = decodedMessage;
}
const decode = (input) => {
    var text = '';
    for (let i = 1; i < input.length; i++) {
        if (input.charAt(i) === 'A' || input.charAt(i) === 'a') {
            text = text + String.fromCharCode(input.charCodeAt(i) + 25);
        }
        else {
            text = text + (String.fromCharCode(input.charCodeAt(i) - 1));
        }
    }

    return text;
}