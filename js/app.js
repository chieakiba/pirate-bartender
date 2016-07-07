function Drink() {
    this.rum = rum;
    this.whiskey = whiskey;
    this.gin = gin;
};

function Salty() {
    this.olive = olive;
    this.salt = salt;
    this.bacon = bacon;
};

function Bitter() {
    this.bitters = bitters;
    this.tonic = tonic;
    this.lemon =  lemon;
};

function Sweetness() {
    this.sugar = sugar;
    this.honey = honey;
    this.cola = cola;
};

function Fruity() {
    this.orange = orange;
    this.cassis = cassis;
    this.cherry = cherry;
};

var createDrink = function(drink) {
    this.drink = drink;
};

var allTypes = function() {
    Drink.call(this, ['Rum', 'Salt', 'Bitters', 'Cola', 'Orange']);
    this.drink = allYes;
}

$(document).ready(function () {


})
