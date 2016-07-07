//Bartender's question to customer
var Question = function (question_label) {
    this.question_label = question_label
}

var strongDrink = new Question("Do ye like yer drinks strong?");
var saltyDrink = new Question("Do ye like it with a salty tang?");
var bitterDrink = new Question("Are ye a lubber who likes it bitter?");
var sweetDrink = new Question("Would ye like a bit of sweetness with yer poison?");
var fruityDrink = new Question("Are ye one for a fruity finish?");

var bartenderQuestions = [strongDrink, saltyDrink, bitterDrink, sweetDrink, fruityDrink];

//Ingredients for each flavor
var Ingredient = function (ingredient_type) {
    this.ingredient_type = ingredient_type;
}

var strongIngredients = [new Ingredient('Glug of rum'), new Ingredient('Slug of whiskey'), new Ingredient('Splash of gin')];
console.log(strongIngredients);

var saltyIngredients = [new Ingredient('Olive on a stick'), new Ingredient('Salt-dusted rim'), new Ingredient('Rasher of bacon')];
console.log(saltyIngredients);

var bitterIngredients = [new Ingredient('Shake of bitters'), new Ingredient('Splash of tonic'), new Ingredient('Twist of lemon peel')];
console.log(bitterIngredients);

var sweetIngredients = [new Ingredient('Sugar cube'), new Ingredient('Spoonful of honey'), new Ingredient('Splash of cola')];
console.log(sweetIngredients);

var fruityIngredients = [new Ingredient('Slice of orange'), new Ingredient('Dash of cassis'), new Ingredient('Cherry on top')];
console.log(fruityIngredients);


// Pantry function -- keeps track of # of ingredients
var Pantry = function (pantry_item) {
    this.pantry_item = pantry_item
    this.strong_ingredients = [
        {
            count: 20,
            ingredient: new Ingredient('Glug of rum')
        },
        {
            count: 20,
            ingredient: new Ingredient('Slug of whiskey')
        },
        {
            count: 20,
            ingredient: new Ingredient('Splash of gin')
        }
    ];
    this.salty_ingredients = [
        {
            count: 20,
            ingredient: new Ingredient('Olive on a stick')
        },
        {
            count: 20,
            ingredient: new Ingredient('Salt-dusted rim')
        },
        {
            count: 20,
            ingredient: new Ingredient('Rasher of bacon')
        }
    ];
    this.bitter_ingredients = [
        {
            count: 20,
            ingredient: new Ingredient('Shake of bitters')
        },
        {
            count: 20,
            ingredient: new Ingredient('Splash of tonic')
        },
        {
            count: 20,
            ingredient: new Ingredient('Twist of lemon peel')
        }
    ];
    this.sweet_ingredients = [
        {
            count: 20,
            ingredient: new Ingredient('Sugar cube')
        },
        {
            count: 20,
            ingredient: new Ingredient('Spoonful of honey')
        },
        {
            count: 20,
            ingredient: new Ingredient('Splash of cola')
        }
    ];
    this.fruity_ingredients = [
        {
            count: 20,
            ingredient: new Ingredient('Slice of orange')
        },
        {
            count: 20,
            ingredient: new Ingredient('Dash of cassis')
        },
        {
            count: 20,
            ingredient: new Ingredient('Cherry on top')
        }
    ]
};
