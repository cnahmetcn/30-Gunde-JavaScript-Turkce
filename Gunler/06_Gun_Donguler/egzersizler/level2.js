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

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/*
1. Herhangi bir sayıda rastgele karakter oluşturan küçük bir komut dosyası geliştirin:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```
*/

    let randomNumber = Math.random() * 10;
    let randomCharacters = []
    for (let i = 0; i < randomNumber; i++){
        seeds = [
           Math.floor(Math.random() * 26) + 97, // Harfler
           Math.floor(Math.random() * 10) + 48 // Rakamlar
       ]
       randomCharacters += String.fromCharCode(seeds[Math.floor(Math.random() * 2)])
    }
    console.log(randomCharacters )

/*
1. Rastgele bir hexadecimal sayı üreten bir komut dosyası yazın.

    ```sh
    '#ee33df'
    ```
*/

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

console.log(randomHex());

/*
1. Rastgele bir rgb kodu üreten bir komut dosyası yazın.

    ```sh
    rgb(240,180,80)
    ```
*/

    let o = Math.round, r = Math.random, s = 255;
    console.log(`rgb(${o(r()*s)},${o(r()*s)},${o(r()*s)})`);

/*
1. Yukarıdaki ülkeler dizisini kullanarak tüm ülkelerin tüm harflerini büyük yapın

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```
*/

    for(let i = 0; i < countries.length; i++){
        countries[i] = countries[i].toUpperCase();
    }
    console.log(countries);

/*
1. Yukarıdaki ülkeler dizisini kullanarak lenght ile ülkelerin karakter sayısını bulun

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```
*/

    let countryLength = [];
    for(let i = 0; i < countries.length; i++){ 
        countryLength.push(countries[i].length);
    }
    console.log(countryLength);


/*
1. Yukarıdaki ülkeler dizisini kullanarak dizi içinde dizi oluşturun

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```
*/

    let countryInfo = [];
    for(let i = 0; i < countries.length; i++)
    {
        new Array (countryInfo.push([countries[i], (countries[i].toUpperCase()).substring(0,3), countries[i].length]));
    }
    console.log(countryInfo);

/*
2. Yukarıdaki ülkeler dizisinde, 'land' kelimesini içeren bir ülke veya ülkeler olup olmadığını kontrol edin. 'land' içeren ülkeler varsa, onu dizi olarak yazdırın. 'land' kelimesini içeren bir ülke yoksa, 'land ile biten ülke yok' yazdırın.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```
*/

    let landCountries = [];
    for(let i = 0; i < countries.length; i++){
        if(countries[i].includes('land')){
            landCountries.push(countries[i]);
        }
    }
    if(landCountries.length > 0){
        console.log(landCountries);
    }
    else{
        console.log('land ile biten ülke yok');
    }

/*
3. Yukarıdaki ülkeler dizisinde, 'ia' kelimesini içeren bir ülke veya ülkeler olup olmadığını kontrol edin. 'ia' içeren ülkeler varsa, onu dizi olarak yazdırın. 'ia' kelimesini içeren bir ülke yoksa, 'ia ile biten ülke yok' yazdırın.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```
*/

        let aiCountries = [];
        for(let i = 0; i < countries.length; i++){
            if(countries[i].includes('land')){
                aiCountries.push(countries[i]);
            }
        }
        if(aiCountries.length > 0){
            console.log(aiCountries);
        }
        else{
            console.log('ai ile biten ülke yok');
        }

/*
4. Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.

      ```sh
      Ethiopia
      ```
*/

    let maxCountry = countries[0];
    for(let i = 0; i < countries.length; i++){
        if(countries[i].length > maxCountry.length){
            maxCountry = countries[i];
        }
    }
    console.log(maxCountry);

/*
5. Yukarıdaki ülkeler dizisini kullanarak sadece 5 karakter içeren ülkeyi bulun.

    ```sh
    ['Japan', 'Kenya']
    ```
*/

    let fiveCountries = [];
    for(let i = 0; i < countries.length; i++){
        if(countries[i].length == 5){
            fiveCountries.push(countries[i]);
        }
    }
    console.log(fiveCountries);

/*
6. webTechs dizisindeki en uzun kelimeyi bulun
*/

    let maxWord = webTechs[0];
    for(let i = 0; i < webTechs.length; i++){
        if(webTechs[i].length > maxWord.length){
            maxWord = webTechs[i];
        }
    }
    console.log(maxWord);

/*
7. webTechs dizisini kullanarak aşağıdaki gibi dizi içinde dizi oluşturun

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```
*/

    let webTechsInfo = [];
    for(let i = 0; i < webTechs.length; i++){
        new Array (webTechsInfo.push([webTechs[i], webTechs[i].length]));
    }
    console.log(webTechsInfo);

/*
8. MongoDB, Express, React ve Node kullanılarak oluşturulan bir uygulamaya MERN stack app denir. mernStack dizisini kullanarak MERN kısaltmasını oluşturun
*/

    let mernStackShort = [];
    for(let i = 0; i < mernStack.length; i++){
        mernStackShort.push(mernStack[i].substring(0,3));
    }
    console.log(mernStackShort);

/*
9. ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] dizisini for loop veya for of loop ile yazdırın.
*/

    for(let i = 0; i < webTechs.length; i++){
        console.log(webTechs[i]);
    }

/*

10. ['banana', 'orange', 'mango', 'lemon'] dizisini reverse kullanmadan ters çevirin
*/

    let fruits = ['banana', 'orange', 'mango', 'lemon'];
    let reverse = [];
    for(let i = 0; i < fruits.length; i++){
        reverse.unshift(fruits[i]);
    }
    console.log(reverse);

/*

11. Aşağıdaki diziyi çıktıdaki gibi yazdırın

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```
*/

    let fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ];
    for(let i = 0; i < fullStack.length; i++){
        for(let j = 0; j < fullStack[i].length; j++){
            console.log(fullStack[i][j]);
        }
    }  
    