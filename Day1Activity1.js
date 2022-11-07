   const toggleBtn = document.getElementById(`toggleBtn`), toggleImg = document.getElementById(`toggleImg`);
   toggleBtn.addEventListener(`click`, () => {
    if (toggleImg.style.display == "none"){
        toggleImg.style.display = "block";
    }
    else toggleImg.style.display = "none";
   })