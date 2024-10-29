let allQuestion = document.querySelectorAll('.faqquestion');

allQuestion.forEach((v, index) => {
    v.addEventListener('click', () => {
        const answerElement = v.nextElementSibling; // Get the next sibling element (the answer)

        // Check if the clicked answer is already active
        const isActive = answerElement.classList.contains("h-[auto]");

        // Remove classes from all other answer elements
        allQuestion.forEach((el, i) => {
            const otherAnswerElement = el.nextElementSibling;
            if (i !== index) {
                otherAnswerElement.classList.remove("h-[auto]", "scale-y-100", "p-[20px]");
                // Also reset the rotation for other elements
                el.children[1].classList.remove("rotate-45");
            }
        });

        // Toggle classes for the clicked answer element
        if (!isActive) {
            answerElement.classList.add("h-[auto]", "scale-y-100", "p-[20px]");
            // Rotate the icon or element in the clicked question
            v.children[1].classList.add("rotate-45");
        } else {
            answerElement.classList.remove("h-[auto]", "scale-y-100", "p-[20px]");
            // Reset the rotation for the clicked element if it is closed
            v.children[1].classList.remove("rotate-45");
        }
    });
});

// Place holder text move



document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('#email');
    const floatingLabel = document.querySelector('.floating-label');

    emailInput.addEventListener('focus', () => {
        floatingLabel.style.top = '5px'; // Moves label up
        floatingLabel.style.fontSize = '12px'; // Makes label smaller
        floatingLabel.style.color = '#fff'; // Changes color
    });

    emailInput.addEventListener('blur', () => {
        if (!emailInput.value) {
            floatingLabel.style.top = '50%'; // Returns label to center if input is empty
            floatingLabel.style.fontSize = '16px'; // Resets label size
            floatingLabel.style.color = '#aaa'; // Resets color
            floatingLabel.style.transform = 'translateY(-50%)'; // Vertically centers the label
        }
    });

    // Ensure label floats if there's content on page load
    if (emailInput.value) {
        floatingLabel.style.top = '5px';
        floatingLabel.style.fontSize = '12px';
        floatingLabel.style.color = '#fff';
    }
});



//another one 
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('#gmail');
    const floatingLabel = document.querySelector('.label');

    emailInput.addEventListener('focus', () => {
        floatingLabel.style.top = '5px'; // Moves label up
        floatingLabel.style.fontSize = '12px'; // Makes label smaller
        floatingLabel.style.color = '#fff'; // Changes color
    });

    emailInput.addEventListener('blur', () => {
        if (!emailInput.value) {
            floatingLabel.style.top = '50%'; // Returns label to center if input is empty
            floatingLabel.style.fontSize = '16px'; // Resets label size
            floatingLabel.style.color = '#aaa'; // Resets color
            floatingLabel.style.transform = 'translateY(-50%)'; // Vertically centers the label
        }
    });

    // Ensure label floats if there's content on page load
    if (emailInput.value) {
        floatingLabel.style.top = '5px';
        floatingLabel.style.fontSize = '12px';
        floatingLabel.style.color = '#fff';
    }
});
