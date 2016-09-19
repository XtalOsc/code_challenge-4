-- Database name
treatYoself
-- Document you create tables pSQL here
CREATE TABLE treat (
id SERIAL PRIMARY KEY,
name VARCHAR(75),
description VARCHAR(120),
pic BYTEA
);






INSERT INTO treat (name, description, pic) VALUES ('Cupcake', 'Delicious cupcakes mmmm', '../assets/cupcake.jpg' );

INSERT INTO treat (name, description, pic) VALUES ('Donuts', 'Delicious donuts mmmm', '../assets/donuts.jpg' );

INSERT INTO treat (name, description, pic) VALUES ('Goldfish', 'Delicious goldfish mmmm', '../assets/goldfish.jpg' );

INSERT INTO treat (name, description, pic) VALUES ('Ice Cream', 'Delicious ice cream mmmm', '../assets/icecream.jpg' );

INSERT INTO treat (name, description, pic) VALUES ('Potato Chips', 'Delicious potato chips mmmm', '../assets/potato.jpg' );
