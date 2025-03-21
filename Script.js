document.addEventListener("DOMContentLoaded", function () {
    // ik gebruik constante omdat de waarde niet verandert. 
    // met document.queryselector haal ik de waarde op.
    const hoofdimage = document.querySelector("#emojineutraal");
    const neutraalknop = document.querySelector("#neutraal");
    const happyknop = document.querySelector("#Buttonhappy");
    const sadknop = document.querySelector("#Buttonsad");
    const koptekst = document.querySelector("h1")
    function emotieKnop(waarde) {
        // hoofdImage.src verandert de url/source van waar de afbeelding opgehaald wordt
        if (waarde === "happy") {
            hoofdimage.src = "afbeeldingen/Middel1.png"
            playMusic("geluid/mesprit-happy.mp3")
            koptekst.textContent = "Ik ben happy!!!"
        }
        // Playmusic is een functie met een parameter die de URL van het geluidsbestand meekrijgt om het aftespelen
        else if (waarde === "sad") {
            hoofdimage.src = "afbeeldingen/Middel3.png"
            playMusic("geluid/glaceon_sad.mp3")
            koptekst.textContent = "Nu ben ik sad!!!"
        }

        else {
            hoofdimage.src = "afbeeldingen/Middel2.png"
            playMusic("geluid/ralts-neutraal.mp3")
            koptekst.textContent = "ik ben normal"
        }
    }
    function playMusic(waarde) {
        const geluid = new Audio(waarde)
        geluid.play()
    }
    neutraalknop.addEventListener("click", function () {
        emotieKnop("neutral");
        // add.Eventlistener is een javascript methode die luistert of de knop neutraal geklikt wordt. 
    })
    happyknop.addEventListener("click", function () {
        emotieKnop("happy");
    })
    sadknop.addEventListener("click", function () {
        emotieKnop("sad");
    })
})

