
var translateButton = document.querySelector("#translate-button");

translateButton.addEventListener("click", buttonClickHandler)

var translateInput = document.querySelector("#translate-input");

var translateOutput = document.querySelector("#translate-output");

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var url = "https://api.funtranslations.com/translate/yoda.json"

function buttonClickHandler(event) {
    var input = translateInput.value;
    console.log(input)
    var finalURL = constructURL(input);
    console.log(finalURL)
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))

}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}
