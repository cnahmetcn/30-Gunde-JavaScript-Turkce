```js
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
  ```
/*
1. for döngüsünü kullanarak 0'dan 10'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
*/

  for(let i = 0; i <= 10; i++){
    console.log(i)
  }

    let i = 0
    while(i <= 10){
        console.log(i)
        i++
    }

    do{
        console.log(i)
        i++
    }while(i <= 10)


/*
2. for döngüsünü kullanarak 10'dan 0'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
*/

    for (let i = 10; i >= 0; i--){
        console.log(i)
    }

    let i = 10
    while(i >= 0){
        console.log(i)
        i--
    }

    do{
        console.log(i)
        i--
    }while(i >= 0)


/*
3. for döngüsünü kullanarak 0'dan n'ye kadar yineleyin
*/

    for (let i = 0; i <= n; i++){
        console.log(i)
    }

/*
4. console.log() kullanarak aşağıdaki kalıbı oluşturan bir döngü yazın:

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```
*/

    for (let i = 0; i < 7; i++){
        console.log('#'.repeat(i+1))
    }

/*
5. Aşağıdaki deseni yazdırmak için döngüyü kullanın:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```
*/

    for (let i = 0; i < 11; i++){
        console.log(`${i} x ${i} = ${i*i}`)
    }

/*
6. Aşağıdaki deseni yazdırmak için döngüyü kullanın:

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```
*/

    for (let i = 0; i < 11; i++){
        console.log(`${i}    ${i**2}    ${i**3}`)
    }

/*
7. for döngüsü ile çift sayıları yazdırın
*/

    for (let i = 0; i < 11; i++){
        if(i % 2 == 0){
            console.log(i)
        }

/*
8. for döngüsü ile tek sayıları yazdırın
*/

    for (let i = 0; i < 11; i++){
        if(i % 2 != 0){
            console.log(i)
        }

/*
9. for döngüsü ile asal sayıları yazdırın
*/

    for (var numbers = 2; numbers <= 100; numbers++) {

        var notPrime = false;
        for (let i = 2; i <= numbers; i++) {
            if (numbers%i===0 && i!==numbers) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(numbers);
        }
    }


/*
10. for döngüsü ile 1 den 100 e kadar olan sayıların toplamını bulun

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```
*/

    let sum = 0
    for (let i = 0; i <= 100; i++){
        sum += i
    }
    console.log(`1 den 100 e kadar olan sayıların toplamı ${sum}.`)

/*
11. for döngüsü ile 1 den 100 e kadar olan çift ve tek sayıların toplamını bulun

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```
*/

    let sumEven = 0
    let sumOdd = 0
    for (let i = 0; i <= 100; i++){
        if(i % 2 == 0){
            sumEven += i
        }else{
            sumOdd += i
        }
    }
    console.log(`1 den 100 e kadar olan çift sayıların toplamı ${sumEven}. Tek sayıların toplamı ${sumOdd}.`)


/*
12. for döngüsü ile 1 den 100 e kadar olan çift ve tek sayıların toplamını bulun. Dizi olarak kaydedin

    ```sh
      [2550, 2500]
    ```
*/

    let sumEven = 0
    let sumOdd = 0
    let sum = []
    for (let i = 0; i <= 100; i++){
        if(i % 2 == 0){
            sumEven += i
        }else{
            sumOdd += i
        }
    }
    sum.push(sumEven)
    sum.push(sumOdd)
    console.log(sum)

/*
13. 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin
*/

    let randomNumbers = []
    for (let i = 0; i < 5; i++){
        randomNumbers.push(Math.floor(Math.random() * 100))
    }
    console.log(randomNumbers)

/*
14. 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin. Sayılar benzersiz olmalı.
*/

    let randomNumbers = []
    let randomNumber = 0
    while(randomNumbers.length < 5){
        randomNumber = Math.floor(Math.random() * 100)
        if(!randomNumbers.includes(randomNumber)){
            randomNumbers.push(randomNumber)
        }
    }
    console.log(randomNumbers)

/*
15. 6 rastgele karakter dizisi oluşturan küçük bir komut dosyası geliştirin:

    ```sh
    5j2khz
    ```
*/

    let randomCharacters = []
    for (let i = 0; i < 6; i++){
        seeds = [
           Math.floor(Math.random() * 26) + 97, // Harfler
           Math.floor(Math.random() * 10) + 48 // Rakamlar
       ]
       randomCharacters += String.fromCharCode(seeds[Math.floor(Math.random() * 2)])
    }
    console.log(randomCharacters )