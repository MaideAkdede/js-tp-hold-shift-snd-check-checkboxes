(function () {
    const HoldShiftAndCheckCheckboxes = {
        cacheDom() {
            this.checkBoxes = document.querySelectorAll('input[type="checkbox"]');
            this.lastCheckBox = null;
        },
        init() {
            this.cacheDom();
            window.document.documentElement.classList.add('js-enabled');
            this.addEventListeners();
        },
        addEventListeners() {
            this.checkBoxes.forEach(checkbox => {
                checkbox.addEventListener('click', e => {
                    this.handleCheck(e);
                });
            });
        },
        handleCheck(e) {
            let isBetween = false;
            console.log(e.shiftKey);
            // si on presse la touche shift et qu'un élément est déjà sélectionné
            if (e.shiftKey && this.lastCheckBox) {
                this.checkBoxes.forEach(checkbox => {
                    // Dès qu'on tombe sur l'ancienne checkbox ou sur la nouvelle, on commence la sélection ou on l'arrête.
                    if (checkbox === this.lastCheckBox || checkbox === e.currentTarget) {
                        isBetween = !isBetween;
                    }

                    if (isBetween) {
                        checkbox.checked = true;
                    }
                });
            }
            this.lastCheckBox = e.currentTarget;
        },
    };
    HoldShiftAndCheckCheckboxes.init();
})();

/*
document.documentElement.classList.add('js-enabled');
let lastTarget = null;

const fruits = document.querySelectorAll('input[type="checkbox"]');

fruits.forEach((input)=>{
    input.addEventListener('click', checkElement);
});

function checkElement(event) {
    let isBetween = false;
    if(event.shiftKey && lastTarget){
        for(const fruit of fruits){
            if(fruit === lastTarget || fruit === event.currentTarget){
                isBetween = !isBetween;
            }
            if(isBetween){
                fruit.checked = true;
            }
        }
    }
    lastTarget = event.currentTarget;
}
*/
