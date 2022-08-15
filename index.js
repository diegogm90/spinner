
function spin() {
let text = document.getElementById("entrada-texto").value;
let matches, options, random;
let regEx = new RegExp(/{([^{}]+?)}/);
    while ((matches = regEx.exec(text)) !== null) {
        options = matches[1].split('|');
        random = Math.floor(Math.random() * options.length);
        text = text.replace(matches[0], options[random]);
        console.log("hola spin");
        console.log(text);
        let sitioTextoSpineado = document.getElementById("salida-texto");
        sitioTextoSpineado.innerHTML = text;
    }
}


function copySpin() {
    let textToCopy = document.getElementById("salida-texto").value;
    console.log(textToCopy);
    navigator.clipboard.writeText(textToCopy);
}