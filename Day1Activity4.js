document.addEventListener(`click`, (ev) => {
    console.log(ev)
    document.getElementById(`outputArea`).innerHTML+=`You just clicked at ${ev.clientX}, ${ev.clientY}. <br>`
})