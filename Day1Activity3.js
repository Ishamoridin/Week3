const newColour=document.getElementById(`newColour`);
document.getElementById(`submitColourBtn`).addEventListener(`click`, () => {
    document.getElementById(`header`).style.color = newColour.value;
}) 