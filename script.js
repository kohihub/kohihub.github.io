let inputSequence = "";
        const secretCode = "mikumikumiku";
        

        document.addEventListener('keydown', function(event) {
            inputSequence += event.key;
            if (inputSequence === secretCode) {
               window.open('https://www.youtube.com/watch?v=_-2dIuV34cs');
                inputSequence = "";
            }
           
            if (inputSequence.length > secretCode.length) {
                inputSequence = inputSequence.slice(1);
            }
        });
