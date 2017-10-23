require('marko/node-require').install();
require('marko/express'); //enable res.marko
var express = require("express");
var app = express();
var path = require("path");
var markoExpress = require('marko/express');
var template = require('./index.marko');
var mobileTemplate = require('./pdp-mobile.marko');

// Configure lasso
require('lasso').configure({
    plugins: [
        'lasso-marko' // Allow Marko templates to be compiled and transported to the browser
    ],
    outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
});

app.use(require('lasso/middleware').serveStatic());
app.use("/assets", express.static(__dirname + '/assets'));
app.use(markoExpress()); //enable res.marko(template, data)

app.get('/', function (req, res) {
    res.marko(template, {
        titleText: 'Loreal Paris Infallible Chubby Blush Paint',
        productPrice: '999.00',
        descriptionText: 'Paint it loud. Ultra bold, Ultra daring.Introducing the 1st Loreal Paris super saturated, high impact blushpaints. Achieve a natural flush, statement pop of colour or sculpted cheekbone with the buildable cream to powder chubby blush paint. The formula glides on with one stroke application, blends effortlessly and sets to powder for a longer wear. Create multiple looks: Apply directly to each cheekbone and lightly blend with fingertips for a natural flush. Apply a single stroke under each cheekbone and gently buff the edges for a scultped finish. Apply multiple strokes of colour for a bold colour pop, concentrating on the apple of the cheeks and blending out toward the ear.',
        brandName: 'Loreal',
        discount: '20%',
        division: 'Beauty',
        category: 'SkinCare',
        footerText: 'Powered By the Product Knowledge Graph'
    });
});

app.get('/pdp-mobile', function (req, res) {
    res.marko(mobileTemplate, {
        titleText: 'Loreal Paris Infallible Chubby Blush Paint',
        productPrice: '999.00',
        descriptionText: 'Paint it loud. Ultra bold, Ultra daring.Introducing the 1st Loreal Paris super saturated, high impact blushpaints. Achieve a natural flush, statement pop of colour or sculpted cheekbone with the buildable cream...',
        brandName: 'Loreal',
        discount: '20%',
        division: 'Beauty',
        category: 'SkinCare',
        footerText: 'Powered By the Product Knowledge Graph'
    });
});
/*
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
*/

app.listen(8080);

console.log("Running at Port 8080");
