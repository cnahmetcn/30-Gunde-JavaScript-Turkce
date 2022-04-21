
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  

/*
1. _boş_ bir array oluşturun;
*/

const empty = Array();
console.log(empty);

/*
2. 5 'ten fazla elemanlı bir dizi tanımlayın
*/

const letters = ['a','b','c','d','e','f','g','h'];
console.log(letters);

/*
3. Dizinizin uzunluğunu bulun
*/

const lenghtLetters = letters.length;
console.log(lenghtLetters);

/*
4. Dizinin ilk, orta ve son öğesini alın
*/

const first = letters[0];

if(letters.length % 2 === 0){
    const middle = letters[letters.length / 2];
}
else
{
    const middle = letters[(letters.length - 1) / 2];
}
const last = letters[letters.length - 1];

console.log(first,middle,last);

/*
5. _mixedDataTypes_ adında bir dizi tanımlayın, diziye farklı veri türleri koyun ve dizinin uzunluğunu bulun.
Dizi boyutu 5 'ten büyük olmalıdır.
*/

const mixedDataTypes = [
1,2,3,
'a','b','c',
true,false,
[1,2,3],
]

console.log(mixedDataTypes.length);

/*
6. itCompanies adlı bir dizi değişkeni bildirin ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon 'a 
başlangıç ​​değerleri atayın.
*/

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

/*
7. _console.log() _ kullanarak diziyi yazdırın
*/

console.log(itCompanies);

/*
8. Dizideki şirketlerin sayısını yazdırın
*/

console.log(itCompanies.length);

/*
9. İlk, orta ve son şirketi yazdırın
*/

if(itCompanies.length % 2 === 0){
    itCompaniesMiddle = itCompanies[itCompanies.length / 2];
}
else
{
    itCompaniesMiddle = itCompanies[(itCompanies.length - 1) / 2];
}

console.log(itCompanies[0],itCompaniesMiddle,itCompanies[itCompanies.length - 1]);

/*
10. Her şirketin çıktısını alın
*/

console.log(itCompanies.toString());

/*
11. Her bir şirket adını tek tek büyük harfe çevirin ve yazdırın
*/

for(let i = 0; i < itCompanies.length; i++){ 
    itCompanies[i] = itCompanies[i].toUpperCase();
}
console.log(itCompanies);


/*
12. Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon büyük BT şirketleridir.
*/

console.log(itCompanies[0] + ', ' + itCompanies[1] + ', ' + itCompanies[2] + ', ' + itCompanies[3] + ', ' + itCompanies[4] + ', ' + itCompanies[5] + ' ve ' + itCompanies[6] + ' büyük BT şirketleridir.');

/*
13. itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin.
*/

console.log(itCompanies.indexOf('Facebook'));

/*
14. Birden fazla 'o' ya sahip şirketleri filter yöntemi olmadan filtreleyin
*/


/*
15. _sort() _ yöntemini kullanarak diziyi sıralayın
*/

console.log(itCompanies.sort());

/* 
16. _reverse() _ yöntemini kullanarak diziyi ters çevirin
*/

console.log(itCompanies.reverse());

/* 
17. Diziden ilk 3 şirketi slice kullanarak ayırın
*/

console.log(itCompanies.slice(0,3));

/* 
18. Diziden son 3 şirketi slice kullanarak ayırın
*/

console.log(firstThree = itCompanies.slice(-3));

/* 
19. Diziden ortadaki IT şirketini veya şirketlerini slice kullanarak ayırın
*/

if(itCompanies.length % 2 === 0){
    middle = itCompanies.length / 2;
    console.log(itCompanies.slice(middle,middle + 1));
}
else
{
    middle = (itCompanies.length - 1) / 2;
    console.log(itCompanies.slice(middle,middle + 1));
}

/* 
20. İlk IT şirketini diziden çıkarın
*/

console.log(itCompanies.shift());

/* 
21. Diziden ortadaki IT şirketini veya şirketlerini çıkarın
*/

if(itCompanies.length % 2 === 0){
    middle = itCompanies.length / 2;
}
else
{
    middle = (itCompanies.length - 1) / 2;
}
itCompanies.splice(middle,1);
console.log(itCompanies.splice(middle,1));

/* 
22. Son IT şirketini diziden çıkarın
*/

itCompanies.pop();
console.log(itCompanies);

/* 
23. Tüm IT şirketlerini kaldırın
*/

itCompanies.splice();
console.log(itCompanies);