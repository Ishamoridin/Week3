const textInput = document.getElementById(`imageUrlInput`), submitBtn = document.getElementById(`submitBtn`);
submitBtn.addEventListener(`click`, () => {
    document.getElementById(`imageUrl`).src = textInput.value;
})
