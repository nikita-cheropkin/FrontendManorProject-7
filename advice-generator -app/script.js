const quoteText = document.getElementById("quoteText");
const randomBtn = document.getElementById("randomBtn");
const adviceId = document.getElementById("adviceId");

randomBtn.addEventListener("click", async () => {
    try {
        const data = await fetch("https://api.adviceslip.com/advice");
        const value = await data.json();
        
        quoteText.textContent = value.slip.advice;
        adviceId.textContent = `ADVICE #${value.slip.id}`
    } catch(error) {
        console.log(error);
    }


    
})