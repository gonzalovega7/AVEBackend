function validateArray(arr) {
    let arrayLength = arr.length;
    let even = 0;
    let odd = 0;

    // Looping the array to count the odd and even numbers
    arr.forEach(function(num) {
        console.log(num);

        if(num % 2 == 0) {
            even ++;
        } else {
            odd ++;
        }
    });

    // Percentages
    const evenPercentage = even / arrayLength * 100;
    const oddPercentage = odd / arrayLength * 100;

    // percentage of numbers greater than 1000
    const greater = arr.filter(num => num > 1000).length;
    const greaterPercentage = (greater / arrayLength) * 100;


    // Max and min value
    const maxValue = Math.max(...arr);
    const minValue = Math.min(...arr);

    // Porcentaje del número mínimo y promedio de todos los números
    const minNumberPercentage = (minValue / maxValue) * 100;
    const promedio = arr.reduce((sum, num) => sum + num, 0) / arrayLength;
    const percentage = (promedio / maxValue) * 100;


    //Outputs
    console.log(`Cantidad de elementos: ${arrayLength}`);
    console.log(`Cantidad de pares: ${even}`);
    console.log(`Cantidad de impares: ${odd}`);

    console.log(`Porcentaje de pares: ${evenPercentage}`);
    console.log(`Porcentaje de impares: ${oddPercentage}`);

    console.log(`Porcentaje de numeros mayores a mil: %${greaterPercentage}`);

    console.log(`Valor maximo: ${maxValue}`);
    console.log(`Valor minimo: ${minValue}`);


    console.log(`Porcentaje del numero minimo: %${minNumberPercentage}`);
    console.log(`Porcentaje del promedio de todos los numeros: %${percentage}`);

}



let test = [1,2,3,4,7000];
validateArray(test);