/*
1. 10 öğrencinin yaşlarının verildiği bir dizi:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Diziyi sıralayarak max ve min değeri bulun
    - Ortadaki yaşı bulun
    - Ortalama yaşı bulun
    - Yaşlar arası farkı bulun (max - min)
    - *abs()* metodunu kullanarak (min - ortalama) ve (max - ortalama) i karşılaştırın
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let dec = ages.sort();
let inc = ages.sort().reverse();
console.log(dec);
console.log(inc);
let max = dec[0];
let min = inc[0];

if(ages.length%2==0){
    let mid = ages.length/2;
    console.log(ages[mid]);
}
else{
    let mid = (ages.length-1)/2;
    console.log(ages[mid]);
}


let sum = 0;
for(let i=0; i<ages.length; i++){
    sum += ages[i];
}
let average = sum/ages.length;
console.log(average);

let diff = max - min;

let absMin = Math.abs(min - average);
let absMax = Math.abs(max - average);
console.log(absMin);
console.log(absMax);


/*
1. 10 ülkeyi diziden alın [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
*/

const tenCountries = countries.slice(0,10);
console.log(tenCountries);

/*
1. Ortadaki ülkeyi bulun [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
*/

if(countries.length%2==0){
    let mid = countries.length/2;
    console.log(countries[mid]);
}
else{
    let mid = (countries.length-1)/2;
    console.log(countries[mid]);
}

/*
2. Countries dizisini çift ise iki eşit diziye bölün. Countries dizisi çift değilse bir ülke daha ekleyip bölün
*/

if(countries.length%2==0){
    let mid = countries.length/2;
    let firstC = countries.slice(0,mid);
    let secondC = countries.slice(mid,countries.length);
    console.log(firstC);
    console.log(secondC);
}
else {
    let mid = (countries.length+1)/2;
    countries.push("Türkiye");
    let firstC = countries.slice(0,mid);
    let secondC = countries.slice(mid,countries.length);
     console.log(firstC);
    console.log(secondC);
}

