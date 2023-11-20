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
print(`Retour fetch hello : ${retour}`, 1);
print("Fin");
