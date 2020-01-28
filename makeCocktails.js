//If we have quantity over 1000, we can make 1 cocktail.

let array = ['Orange => 200',
            'Peach => 2432',
            'Banana => 4500',
            'Peach => 5000',
            'Strawberry => 549',
            'Orange => 1800',
];

let a = {};
let b = {};
array.map(x => {
    let [fruit, weigth] = x.split('=>');
    weigth = Number(weigth);

    if(!a.hasOwnProperty(fruit)){
        a[fruit] = weigth;
    }
    else a[fruit] += weigth;

    if(a[fruit] > 1000) {
        b[fruit] = Math.floor(a[fruit] / 1000);
    }
});

let result = Object.entries(b);
console.log(result.map(x => x.join('')).join('\n'));
