document.addEventListener(`keydown`, (ev) => {
    document.getElementById(`header`).innerText = `You have pressed the ${ev.key} key.`,
    document.getElementById(`codeOutput`).innerText = `The code for this key is ${ev.code}.`,
    document.getElementById(`valueOutput`).innerText = `The value of this key is ${ev.keyCode}`
console.log(ev)
})