class Die {
    value;
    number;

    constructor() {
        this.value = Die.value;
        this.number = Die.number;
    }

    get value() {
        return this.roll();
    }

    create() {
        let div = document.createElement("div");
        div.className = "newDie"
        if (totalDie == 0) {
            let sumButt = document.createElement("button");
            let getFunk = document.createElement("button");
            sumButt.appendChild(document.createTextNode("Sum Dice"));
            getFunk.appendChild(document.createTextNode("Get Funky"));
            document.getElementById("buttonDie").appendChild(sumButt);
            document.getElementById("buttonDie").appendChild(getFunk);
            sumButt.addEventListener("click", function () { new Die().sumDice() });
            getFunk.addEventListener("click", function () { new Die().funky() });
        }
        div.id = totalDie + 1;
        div.addEventListener("click", function () {
            dieArr[div.id - 1] = new Die().roll();
            div.removeChild(div.childNodes[0])
            div.appendChild(document.createTextNode(Die.value));
        })
        /* div.addEventListener("dblclick", function () {
            div.remove();
            removedDie++;
            let begArr = dieArr.slice(0, [this.id - 1]);
            let endArr = dieArr.slice(this.id, dieArr.length);
            dieArr = begArr.concat(endArr);
            console.log(dieArr);
        }) */
        totalDie++;
        dieArr.push(this.roll())
        let text = document.createTextNode(Die.value);
        div.appendChild(text);
        document.body.appendChild(div);
    }
    
    roll() {
        Die.value = Math.floor(Math.random() * 6) + 1;
        return new Die();
    }

    reroll() {
        for (let i = 0; i < dieArr.length; i++) {
            dieArr[i] = new Die().roll();
            let newDiv = document.getElementById(`${i + 1}`);
            let newText = document.createTextNode(Die.value);
            newDiv.removeChild(newDiv.childNodes[0]);
            newDiv.appendChild(newText);
            document.body.appendChild(newDiv);
        }
        //console.log(dieArr);
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
        for (let i = 0; i < dieArr.length; i++) {
            switch (dieArr[i].value) {
                case 1:
                    document.getElementById(`${i + 1}`).removeChild(document.getElementById(`${i + 1}`).childNodes[0])
                    document.getElementById(`${i + 1}`).innerHTML = "<font size='100'>&#9856</font>"
                    console.log(document.getElementById(`${i + 1}`));
                    break;
                case 2:
                    document.getElementById(`${i + 1}`).className = ("newDie funky");
                    console.log(document.getElementById(`${i + 1}`));
                    break;
                case 3:
                    document.getElementById(`${i + 1}`).className = ("newDie funky");
                    console.log(document.getElementById(`${i + 1}`));
                    break;
                case 4:
                    document.getElementById(`${i + 1}`).className = ("newDie funky");
                    console.log(document.getElementById(`${i + 1}`));
                    break;
                case 5:
                    //document.getElementById(`${i + 1}`).className = ("newDie funky");
                    console.log(document.getElementById(`${i + 1}`));
                    break;
                case 6:
                    //document.getElementById(`${i + 1}`).className = ("newDie funky");
                    console.log(document.getElementById(`${i + 1}`));
                    break;
            }
        }
    }
}

let totalDie = 0;
let removedDie = 0;
let dieArr = [];

document.getElementById("genDie").addEventListener("click", function () { new Die().create() });

document.getElementById("rollDie").addEventListener("click", function () { new Die().reroll() });