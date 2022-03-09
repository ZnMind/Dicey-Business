class Die {
    value;

    constructor() {
        this.value = Die.value;
    }

    get value() {
        return this.roll();
    }

    create() {
        let div = document.createElement("div");
        div.className = "newDie"
        let buttonCount = document.getElementById("buttonDie").getElementsByTagName('*').length; //Checking how many buttons in the div
        if (totalDie == 0 && buttonCount < 4) {
            let rollButt = document.createElement("button");
            let sumButt = document.createElement("button");
            let getFunk = document.createElement("button");
            rollButt.appendChild(document.createTextNode("Roll Dice"));
            sumButt.appendChild(document.createTextNode("Sum Dice"));
            getFunk.appendChild(document.createTextNode("Get Funky [Toggle]"));
            document.getElementById("buttonDie").appendChild(rollButt);
            document.getElementById("buttonDie").appendChild(sumButt);
            document.getElementById("buttonDie").appendChild(getFunk);
            rollButt.addEventListener("click", function () { new Die().reroll() });
            sumButt.addEventListener("click", function () { new Die().sumDice() });
            getFunk.addEventListener("click", function () { new Die().funky() });
        }
        div.id = totalDie + 1;
        div.addEventListener("click", function () {
            if (toggle == 0) {
                dieArr[div.id - 1] = new Die().roll();
                while (div.firstChild) {
                    div.removeChild(div.firstChild)
                }
                div.className = ("newDie")
                div.appendChild(document.createTextNode(Die.value));
            } else { //else is for if funky mode is activated
                toggle = 0;
                dieArr[div.id - 1] = new Die().roll();
                new Die().funky();
            }
        })
        div.addEventListener("dblclick", function () {
            //Slices the target out of the array and shortens it
            let begArr = dieArr.slice(0, [this.id - 1]);
            let endArr = dieArr.slice(this.id, dieArr.length);
            dieArr = begArr.concat(endArr);
            //Reassigns id's in order to keep things smooth
            for (let i = this.id; i < totalDie + 1; i++) {
                var newId = document.getElementById(i);
                newId.id = i - 1;
            }
            totalDie--;
            div.remove();
        })
        totalDie++;
        dieArr.push(this.roll())
        let text = document.createTextNode(Die.value);
        div.appendChild(text);
        document.body.appendChild(div);
        if (toggle == 1) {
            toggle = 0;
            new Die().funky();
        }
    }

    roll() {
        Die.value = Math.floor(Math.random() * 6) + 1;
        return new Die();
    }

    reroll() {
        for (let i = 0; i < dieArr.length; i++) {
            dieArr[i] = new Die().roll();
            if (toggle == 0) {
                let newDiv = document.getElementById(`${i + 1}`);
                let newText = document.createTextNode(Die.value);
                while (newDiv.firstChild) {
                    newDiv.removeChild(newDiv.firstChild)
                }
                newDiv.appendChild(newText);
                document.body.appendChild(newDiv);
            } else {
            toggle = 0;
            new Die().funky();
            }
        }
    }

    sumDice() {
        let sum = 0;
        for (let i = 0; i < dieArr.length; i++) {
            sum += dieArr[i].value;
        }
        if (totalDie == 1) {
            alert(`There is ${totalDie} die on the page with a face value of ${sum}`);
        } else {
            alert(`There are ${totalDie} dice on the page. The sum of pips on the dice are ${sum} averaging out to ${Math.floor((sum / totalDie) * 100) / 100} pips per die.`);
        }
    }

    clear() {
        Die.value = 0;
        console.log(this.id);
        return Die.value;
    }

    funky() {
        if (toggle == 0) {
            toggle = 1;
            for (let i = 0; i < dieArr.length; i++) {
                switch (dieArr[i].value) {
                    case 1:
                        var dice = document.getElementById(`${i + 1}`)
                        while (dice.firstChild) {
                            dice.removeChild(dice.firstChild)
                        }
                        dice.className = ("newDie dice first-face");
                        var dot = document.createElement("span");
                        dot.className = ("dot");
                        dice.appendChild(dot);
                        break;
                    case 2:
                        var dice = document.getElementById(`${i + 1}`)
                        while (dice.firstChild) {
                            dice.removeChild(dice.firstChild)
                        }
                        dice.className = ("newDie dice second-face");
                        for (let i = 0; i < 2; i++) {
                            var dot = document.createElement("span");
                            dot.className = ("dot");
                            dice.appendChild(dot);
                        }
                        break;
                    case 3:
                        var dice = document.getElementById(`${i + 1}`)
                        while (dice.firstChild) {
                            dice.removeChild(dice.firstChild)
                        }
                        dice.className = ("newDie dice third-face");
                        for (let i = 0; i < 3; i++) {
                            var dot = document.createElement("span");
                            dot.className = ("dot");
                            dice.appendChild(dot);
                        }
                        break;
                    case 4:
                        var dice = document.getElementById(`${i + 1}`)
                        while (dice.firstChild) {
                            dice.removeChild(dice.firstChild)
                        }
                        dice.className = ("newDie dice fourth-face");
                        for (let i = 0; i < 2; i++) {
                            var column = document.createElement("div");
                            column.className = ("column");
                            for (let j = 0; j < 2; j++) {
                                var dot = document.createElement("span");
                                dot.className = ("dot");
                                column.appendChild(dot);
                            }
                            dice.appendChild(column);
                        }
                        break;
                    case 5:
                        var dice = document.getElementById(`${i + 1}`)
                        while (dice.firstChild) {
                            dice.removeChild(dice.firstChild)
                        }
                        dice.className = ("newDie dice fifth-face");
                        for (let i = 0; i < 3; i++) {
                            var column = document.createElement("div");
                            column.className = ("column");
                            if (i == 0 || i == 2) {
                                for (let j = 0; j < 2; j++) {
                                    var dot = document.createElement("span");
                                    dot.className = ("dot");
                                    column.appendChild(dot);
                                }
                            } else {
                                var dot = document.createElement("span");
                                dot.className = ("dot");
                                column.appendChild(dot);
                            }
                            dice.appendChild(column);
                        }
                        break;
                    case 6:
                        var dice = document.getElementById(`${i + 1}`)
                        while (dice.firstChild) {
                            dice.removeChild(dice.firstChild)
                        }
                        dice.className = ("newDie dice fourth-face");
                        for (let i = 0; i < 2; i++) {
                            var column = document.createElement("div");
                            column.className = ("column");
                            for (let j = 0; j < 3; j++) {
                                var dot = document.createElement("span");
                                dot.className = ("dot");
                                column.appendChild(dot);
                            }
                            dice.appendChild(column);
                        }
                        break;
                }
            }
        } else {
            toggle = 0;
            for (let i = 0; i < dieArr.length; i++) {
                var dice = document.getElementById(`${i + 1}`)
                while (dice.firstChild) {
                    dice.removeChild(dice.firstChild)
                }
                dice.appendChild(document.createTextNode(dieArr[i].value));
                dice.className = ("newDie");
            }
        }
    }
}

let totalDie = 0;
let dieArr = [];
let toggle = 0

document.getElementById("genDie").addEventListener("click", function () { new Die().create() });