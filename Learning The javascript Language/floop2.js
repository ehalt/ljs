var pagenames = [
    'home',
    'about us',
    'contact us',
    'javaScript playground',
    'news',
    'blog'
];

for (i = 0; i < pagenames.length; i += 1) {
    if (document.title === pagenames[i]) {
        console.log('we are here: ' + pagenames[i]);
    } else {
        console.log('we are not here: ' + pagenames[i]);
    }
}