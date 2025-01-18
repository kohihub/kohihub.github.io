let inputSequence = "";
        const secretCode = "mikumikumiku";
        

        document.addEventListener('keydown', function(event) {
            inputSequence += event.key;
            if (inputSequence === secretCode) {
               window.open('https://c.wallhere.com/photos/7e/7a/anime_Hatsune_Miku_skirt_striped_panties_thigh_high_boots-1554631.jpg!d');
                inputSequence = "";
            }
           
            if (inputSequence.length > secretCode.length) {
                inputSequence = inputSequence.slice(1);
            }
        });