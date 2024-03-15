let options = ['Schere', 'Papier', 'Stein']
let randomNumber = Math.floor(Math.random() * 3);;
let selection = process.argv[2];
let enemySelection = options[randomNumber];

console.log('Deine Auswahl: ' + selection);
console.log('Dein Gegner: ' + enemySelection);

if(selection == enemySelection) {
    console.log('Unentschieden')
}

if(selection == 'Schere') {
    if(enemySelection == 'Stein') {
        console.log('Du hast verloren');

    }
    if(enemySelection == 'Papier') {
        console.log('Du hast gewonnen');

    }
}

if(selection == 'Stein') {
    if(enemySelection == 'Schere') {
        console.log('Du hast gewonnen');

    }
    if(enemySelection == 'Papier') {
        console.log('Du hast verloren');

    }
}

if(selection == 'Papier') {
    if(enemySelection == 'Schere') {
        console.log('Du hast verloren');

    }
    if(enemySelection == 'Stein') {
        console.log('Du hast gewonnen');

    }
}