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
        if (totalDie == 0) {
            let sumButt = document.createElement("button");
            sumButt.appendChild(document.createTextNode("Sum Dice"));
            document.getElementById("buttonDie").appendChild(sumButt);
            sumButt.addEventListener("click", function () { new Die().sumDice() });
        }
        div.id = totalDie + 1;
        div.addEventListener("click", function() {
            div.removeChild(div.childNodes[0])
            div.appendChild(document.createTextNode(new Die().roll().value));
        })
        this.roll();
        let text = document.createTextNode(Die.value);
        div.appendChild(text);
        document.body.appendChild(div);
        totalDie++;
        dieArr.push(new Die());
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
    }

    sumDice() {
        let sum = 0;
        for (let i = 0; i < dieArr.length; i++) {
            sum += dieArr[i].value;
        }
        if (totalDie == 1) {
            alert(`There is ${totalDie} die on the page with a face value of ${sum}`);
        } else {
            alert(`There are ${totalDie} dice on the page. The sum of these dice are ${sum} pips averaging out to ${Math.floor((sum / totalDie) * 100) / 100} pips per die.`);
        }
    }
}

let totalDie = 0;
let dieArr = [];

document.getElementById("genDie").addEventListener("click", function() { new Die().create() });

document.getElementById("rollDie").addEventListener("click", function() { new Die().reroll() });