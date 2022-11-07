// console.log(`Hello there!`);
// console.log(document.getElementsByTagName(`li`)[0]);

// const listItems = document.getElementsByTagName(`li`);

// for (let i=0;i<listItems.length;i++){
//     listItems[i].style.color="blue"
// };


// const listItems = document.querySelectorAll(`.listItem`);

// for (let i=0;i<listItems.length;i++){
//     listItems[i].style.color="blue"
// };

// console.log(document.getElementById("listWrapper").innerHTML += "<li>Heyup</li>")
// const heading = document.getElementById(`heading`);
// const submit = document.getElementById(`submit`);

// submit.addEventListener(`click`, () => {
//     heading.textContent = heading.textContent.toLowerCase()
// })
// const heading = document.getElementById(`heading`), input = document.getElementById(`inputBox`), submitBtn = document.getElementById(`submit`);
// submitBtn.addEventListener(`click`, () => {
//     heading.textContent = input.value
// })
document.addEventListener(`click`, (ev) => {
    console.log(ev.target)
})