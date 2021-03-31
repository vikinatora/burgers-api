import * as mongoose from 'mongoose';
var seeder = require('mongoose-seed');
import { BurgerDoc, BurgerSchema } from "./models/burger";
import { MONGO_DB_SERVER } from "./helpers/constants";

const Burger = mongoose.model<BurgerDoc>('Burger', BurgerSchema);

seeder.connect(MONGO_DB_SERVER, function() {
    seeder.loadModels([
        './src/models/burger'
    ]);
    seeder.clearModels(['Burger'], function() {
        seeder.populateModels(data, function(err, done) {
           if(err) {
               return console.log("seed err", err);
           }
   
           if(done) {
               return console.log("seed done");
           }
   
           seeder.disconnect();
       });
    });
});

const data = [
    { 
        'model': 'Burger',
        'documents': [
            { 'burgerName': "Bacon Hamburger with Catalina Dressing" },
            { 'burgerName': "Stilton Sirloin Burger with Onion Jam" },
            { 'burgerName': "Bro Burger" },
            { 'burgerName': "Barbecue-Glazed Turkey Burger" },
            { 'burgerName': "Vik's Burger" },
            { 'burgerName': "Limechain's Burger" },
            { 'burgerName': "Cumin-Spiced Burger with Harissa Mayo" },
            { 'burgerName': "Umami Burger with Port and Stilton" },
            { 'burgerName': "Chicken Burger with Spicy Peanut Sauce" },
            { 'burgerName': "Smokin' Burger" },
            { 'burgerName': "Burger Ahoy" },
            { 'burgerName': "Italian-Sausage Burger with Garlicky Spinach" },
            { 'burgerName': "Bacon Burger on Brioche Buns" },
            { 'burgerName': "Lamb Burger with Onion Soup Aioli" },
            { 'burgerName': "Vietnamese-Style Banh Mi Burger" },
            { 'burgerName': "Red Chili Burger" },
            { 'burgerName': "Spanish Pork Burger" },
            { 'burgerName': "Double-Decker Burger with Goat Cheese" },
            { 'burgerName': "Buffalo Burger with Raisin-Garlic Mayonnaise" },
            { 'burgerName': "Pimento Cheeseburger with Bacon Jam" },
            { 'burgerName': "Lamb Burger with Green Harissa" },
            { 'burgerName': "Caprese Burger" },
            { 'burgerName': "Lamb Burger with Cilantro-Yogurt Sauce" },
            { 'burgerName': "Hot Cross Buns" },
            { 'burgerName': "Sausage and Broccoli Rabe Burger" },
            { 'burgerName': "Burger Ferguson" },
            { 'burgerName': "Smoked Gouda and Bacon Burger with Barbecue Sauce" },
            { 'burgerName': "Bulgogi Burger" },
            { 'burgerName': "Beef Overload Burger" },
            { 'burgerName': "Toasty Buns Burger" },
            { 'burgerName': "Buffalo Burger" },
            { 'burgerName': "Beefcakes Burger" },
            { 'burgerName': "Knuckle Burger" },
            { 'burgerName': "Pit Master Burger" },
            { 'burgerName': "BINGO Burger" },
            { 'burgerName': "Dungeon Burger" },
            { 'burgerName': "Bullseye Burger" },
            { 'burgerName': "CrazyBurger" },
            { 'burgerName': "Bullhorn Burger" },
            { 'burgerName': "Sin City Burger" },
            { 'burgerName': "Burger Master Mike" },
            { 'burgerName': "Burger on 22nd Street" },
            { 'burgerName': "Luger Burger" },
            { 'burgerName': "Le Pigeon Burger" },
            { 'burgerName': "Double Animal Burger" },
            { 'burgerName': "The Original Burger" },
            { 'burgerName': "Whiskey King Burger" },
            { 'burgerName': "The Company Burger" },
            { 'burgerName': "Chargrilled Burger with Roquefort Cheese" },
            { 'burgerName': "Dyer's Deep-Fried Burger" },
            { 'burgerName': "The Lola Burger" },
            { 'burgerName': "Cheeseburger" },
            { 'burgerName': "Raw Steak Tartare Burger" },
            { 'burgerName': "Buckhorn Burger" },
            { 'burgerName': "Double Patty Cheeseburger" },
            { 'burgerName': "Kobe Burger" },
            { 'burgerName': "Black Label Burger" },
            { 'burgerName': "Steamed Cheeseburger" },
            { 'burgerName': "Primetime Burger" },
            { 'burgerName': "Kuma Burger" },
            { 'burgerName': "Sirloin Burger" },
            { 'burgerName': "The Doh! Nut Burger" },
            { 'burgerName': "Peanut Butter Bacon Burger" },
            { 'burgerName': "Bacon Cheeseburger" },
            { 'burgerName': "Hamburger" },
            { 'burgerName': "Chicken Burger" },
            { 'burgerName': "Beef Burger" },
            { 'burgerName': "Pork Burger" },
            { 'burgerName': "Triple Meat Burger" },
            { 'burgerName': "Vegan Burger" },
            { 'burgerName': "Cabana Burger" },
            { 'burgerName': "Super Hero Burger" },
            { 'burgerName': "Cheddar-Stuffed Burger" },
            { 'burgerName': "Bacon-and-Kimchi Burger" },
            { 'burgerName': "Blue Ribbon Barbecue Chicken Cheeseburger" },
            { 'burgerName': "Pimento Cheese-Stuffed Burger" },
            { 'burgerName': "Asian-Style Pork Burger" },
            { 'burgerName': "Minetta Burger" },
            { 'burgerName': "Nacho Burger" },
            { 'burgerName': "Uncle Louie Burger" },
        ]
        
    },
];