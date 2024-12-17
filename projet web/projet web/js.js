function verif() {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector('input[name=q' + i + ']:checked');
        if (selectedOption === null) {
            alert("Choisissez une réponse à la question " + i);
            return false; 
        } else {
            const selectedValue = selectedOption.value;
            if (checkAnswer(i, selectedValue)) {
                score++;
            }
        }
    }

    alert("Votre score est " + score +" /10 ");
    return false; 
}

function checkAnswer(questionNumber, selectedValue) {
    switch (questionNumber) {
        case 1:
            return selectedValue === "2"; 
        case 2:
            return selectedValue === "1";
        case 3:
            return selectedValue === "3";
        case 4:
            return selectedValue === "1";
        case 5:
            return selectedValue === "1";
        case 6:
            return selectedValue === "3";
        case 7:
            return selectedValue === "3";
        case 8:
            return selectedValue === "2";
        case 9:
            return selectedValue === "3";
        case 10:
            return selectedValue === "2";
       
        default:
            return false;
    }
}