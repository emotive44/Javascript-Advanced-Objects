function solve(array) {
    let obj = {};
    array
        .sort((a, b) => a.localeCompare(b))
        .map(x => {
            let [brand, model, count] = x.split('|');
            let modelWithoutSpace = model.toString().trim();
            let finalModel = '###';
            modelWithoutSpace +='->';
            finalModel += modelWithoutSpace;

            if(!obj.hasOwnProperty(finalModel)) {
                obj[brand] = obj[finalModel];
                obj[finalModel] = +count;
                
            } else obj[finalModel] += +count;
    });
    let result = Object.entries(obj);
    console.log (result.map(x => x.join('')).join('\n')); 
}

solve([
    'Citroen | C4 | 12',
    'Audi | Q7 | 1',
    'Audi | Q6 | 10',
    'BMW | X5 | 100',
    'Citroen | C4 | 123',
    'BMW | X6 | 110',
    'Citroen | C5 | 10',    
    'LADA | Niva | 7'
]);
