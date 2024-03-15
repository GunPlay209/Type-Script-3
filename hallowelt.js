var options = ['Schere', 'Papier', 'Stein'];
var randomNumber = Math.floor(Math.random() * 3);
;
var selection = prompt('Bitte Auswahl eingeben');
var enemySelection = options[randomNumber];
alert('Deine Auswahl: ' + selection);
alert('Dein Gegner: ' + enemySelection);
if (selection == enemySelection) {
    alert('Unentschieden');
}
if (selection == 'Schere') {
    if (enemySelection == 'Stein') {
        alert('Du hast verloren');
    }
    if (enemySelection == 'Papier') {
        alert('Du hast gewonnen');
    }
}
if (selection == 'Stein') {
    if (enemySelection == 'Schere') {
        alert('Du hast gewonnen');
    }
    if (enemySelection == 'Papier') {
        alert('Du hast verloren');
    }
}
if (selection == 'Papier') {
    if (enemySelection == 'Schere') {
        alert('Du hast verloren');
    }
    if (enemySelection == 'Stein') {
        alert('Du hast gewonnen');
    }
}
