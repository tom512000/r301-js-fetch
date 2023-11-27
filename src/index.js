button = document.querySelector("button");
div = document.querySelector("div.info");

compteurClics = 0;

button.addEventListener("click", () => {
    compteurClics += 1;
    button.innerHTML = compteurClics;

    const request = fetch(`https://iut-info.univ-reims.fr/users/jonquet/resources/fetch/echo.php?nb=${compteurClics}`);
    request.then((response) => response.text())
        .then((text) => {
            div.innerText = `Last response : ${text}`;
        });
});
