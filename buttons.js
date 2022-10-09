function generate_button() {
    const page_id = window.location.href.match(/([1-9]).html/)[1];
    if (page_id > 1) {
        let buttonPrev = document.createElement("a");
        buttonPrev.innerText = "Página Anterior"
        buttonPrev.setAttribute("href", `${parseInt(page_id) - 1}.html`)
        document.body.appendChild(buttonPrev)
    }
    if (page_id < 5) {
        let buttonNext = document.createElement("a");
        buttonNext.innerText = "Próxima Página"
        buttonNext.setAttribute("href", `${parseInt(page_id) + 1}.html`)
        document.body.appendChild(buttonNext)
    } 
}

// comment the line below to remove buttons
generate_button()


