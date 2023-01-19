(function() {
    let display = document.querySelector(".display")
    let buttons = document.querySelectorAll(".btn")
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector(".btn-equal")
    let percent = document.querySelector(".btn-percent")

    buttons.forEach(function(button) {
        button.addEventListener("click", function(e) {
            let value = e.target.dataset.num;
            display.value += value;
        });
    });

    equal.addEventListener("click", function() {
        if (display.value === "") {
            display.value = "";
        } else {
            let answear = eval(display.value);
            display.value = answear;
        }
    });

    clear.addEventListener("click", function() {
        display.value = "";
    });
    
    percent.addEventListener("click", function() {
        display.value = display.value / 100;
    })
})();