const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('toCaps', text => {
    let textArray = text.split(' ');
    textArray.forEach((word, i) => {
        textArray[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return textArray.join(' ');
});