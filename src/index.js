function print(message, group) {
    const classes = `info${
        group && group > 0 && group < 13 ? ` group${group}` : ""
    }`;
    document.body.innerHTML += `<div class="${classes}">${message}</div>`;
    console.log(message);
}

function responseToHtmlUl(response) {
    return `<ul>
                <li>${response.status} : ${response.statusText} (${response.ok})</li>
                <li>${response.headers.get("Content-Type")}</li>
            </ul>`
}

const baseUrl = "https://iut-info.univ-reims.fr/users/jonquet";

print("Début");
print("Fetch hello", 1);
print("Fetch resources", 2);
print("Fetch du sujet de TP", 3);

const retourHello = fetch(`${baseUrl}/resources/fetch/hello.php`);
const retourResources = fetch(`${baseUrl}/resources/fetch/`);
const retourSujetTP = fetch(`${baseUrl}/intranet/but/r301/tp/fetch/`);

print("Fin");

retourHello.then((response) => {
    print(`Fetch hello ${responseToHtmlUl(response)}`, 1)
    return response.text()
})
    .then((text) => {
        print(text, 1)
    });

retourResources.then((response) => {
    print(`Réponse resources ${responseToHtmlUl(response)}`, 2)
});

retourSujetTP.catch((response) => {
    print(`Erreur du sujet de TP`, 3)
});
