function solve(array) {
    let obj = {};
    array
        .sort((a, b) => a.localeCompare(b))
        .map(x => {
            let [product, price] = x.split('=>');
            if(!obj.hasOwnProperty(product[0])) {
                obj[product[0]] = '\t' + [product, price].join('=>');
            } else obj[product[0]] += '\n' + '\t'+  [product, price].join('=>');
        });
        
        let result = Object.entries(obj);
        console.log(result.map(x => x.join('\n')).join('\n'));
}

solve(['Appricot => 200',
    'Fridge => 2432',
    'TV => 4500',
    'Deodorant => 5000',
    'Banana => 549',
    'Apple => 1800',
    'Anurak => 1800',
    'T-shirt => 1800'
]);
