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
        div.id = totalDie + 1;
        this.roll();
        let text = document.createTextNode(Die.value)
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
}

let totalDie = 0;
let dieArr = [];

document.getElementById("genDie").addEventListener("click", function() {
    new Die().create();
});

document.getElementById("rollDie").addEventListener("click", function() {
    new Die().reroll();
});