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
1. countries.js ve web_techs.js adında iki farklı dosya oluşturun ve main.js dosyasında tanımlayın.
*/


/*1. Tüm noktalama işaretlerini kaldırın ve stringi dizi olarak değiştirin ve dizideki kelime sayısını sayın

    ```js
    let words =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```
*/
let words = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
words = words.replace(/,/g, '');
let arrayWords = words.split(' ');
console.log(arrayWords);
console.log(arrayWords.length);


/*
1. Diziye ekleyin, güncelleyin ve silin,

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - Eğer ekli değilse listenin başına 'Meat' ekle
   - Eğer ekli değilse listenin sonuna 'Sugar' ekle
   - 'Honey' i kaldır
   - 'Tea' yi 'Green Tea' yap

*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}
else
{
    console.log(shoppingCart)
}

/*
1. 'Ethiopia' dizide varsa 'ETHIOPIA' olarak yazdır, eğer yoksa listeye ekle
*/

if(countries.includes('Ethiopia')){
    let index = countries.indexOf('Ethiopia');
    console.log(countries[index].toUpperCase());
}
else{
    countries.push('Ethiopia');
    console.log(countries);
}

/*
1. webTechs dizisinde 'Sass' varsa 'Sass is a CSS preprocess' olarak yazdır, eğer yoksa listeye ekle ve diziyi yazdır
*/

if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}
else{
    webTechs.push('Sass');
    console.log(webTechs);
}

/*
1. Aşağıdaki iki diziyi birleştirin

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```
*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
