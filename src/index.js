function print(message, group) {
    const classes = `info${
        group && group > 0 && group < 13 ? ` group${group}` : ""
    }`;
    document.body.innerHTML += `<div class="${classes}">${message}</div>`;
    console.log(message);
}

const baseUrl = "https://iut-info.univ-reims.fr/users/jonquet";

print("Début");
print("Fetch hello", 1);

const retour = fetch(`${baseUrl}/resources/fetch/hello.php`);
const retour2 = fetch(`${baseUrl}/resources/fetch/`);
const retour3 = fetch(`${baseUrl}/intranet/but/r301/tp/fetch/`);

print("Fin");
print(`Retour fetch hello ${retour}`, 1);

retour.then((response) => {print(`Fetch resources ${response.status}`, 2)});
retour2.then((response) => {print(`Réponse resources ${response.status}`, 2)});
retour3.then((response) => {print(`Réponse resources ${response.status}`, 3)});
