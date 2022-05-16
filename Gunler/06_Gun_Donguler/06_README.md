<div align="center">
  <h1> 30 Günde JavaScript: Gün 6 - Döngüler</h1>
  <sub>Çeviren:
  <a href="https://www.linkedin.com/in/cnahmetcn/" target="_blank">Ahmet Can</a><br>
  <a href="https://www.rhecanyx.com/" target="_blank">Rhecanyx</a><br>
  </sub>
</div>

[<< Gün 5](../05_Gun_Diziler/05_README.md) | [Gün 7 >>](#)

![30 Günde JavaScript](../images/banners/day_1_6.png)

- [📔 Gün 6](#-day-6)
  - [Döngüler](#loops)
    - [for döngüsü](#for-loop)
    - [while döngüsü](#while-loop)
    - [do while döngüsü](#do-while-loop)
    - [for of döngüsü](#for-of-loop)
    - [break](#break)
    - [continue](#continue)
  - [💻 Exercises:Day 6](#-exercisesday-6)
    - [Exercises: Level 1](#exercises-level-1)
    - [Exercises: Level 2](#exercises-level-2)
    - [Exercises: Level 3](#exercises-level-3)

# 📔 Gün 6

## Döngüler

Hayatta yaptığımız aktivitelerin çoğu tekrarlarla doludur. console.log() kullanarak 0'dan 100'e kadar çıktı almanızı istediğimi düşünün. Bu basit görevi uygulamak 2 ila 5 dakikanızı alabilir, bu tür sıkıcı ve tekrarlayan görevler döngü kullanılarak yapılabilir. Videoları izlemeyi tercih ederseniz, [video eğitimlerine](https://www.youtube.com/channel/UCM4xOopkYiPwJqyKsSqL9mw) göz atabilirsiniz.

Programlama dillerinde tekrarlayan görevleri gerçekleştirmek için farklı türde döngüler kullanırız. Aşağıdaki örnekler, JavaScript ve diğer programlama dillerinde yaygın olarak kullanılan döngülerdir.

### for döngüsü

```js
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}

for(baslangic, kosul, artirma/azaltma){
  // şartlar sağlanana kadar çalışacak kod bloğu
}
```

```js
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5
```

```js
for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0
```

```js
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
```

```sh
0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

```js
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

Dizideki tüm elemanları toplama

```js
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // kısayol olarak, sum += numbers[i] da kullanılabilir

}

console.log(sum)  // 15
```

Mevcut diziden başka bir dizi üretme

```js
const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]
```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### while döngüsü

```js
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5
```

### do while döngüsü

```js
let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5
```

### for of loop

Diziler için for of döngüsünü kullanırız. Dizideki her bir elemanın indeksiyle ilgilenmiyorsak, bir diziyi yinelemenin çok kolay bir yolu.

```js
for (const element of arr) {
  // kod buraya gelecek
}
```

```js

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
  console.log(num * num)
}

// 1 4 9 16 25

// dizideki tüm sayıalrı toplama
let sum = 0
for (const num of numbers) {
  sum = sum + num  // kısayol olarak, sum += num
}
console.log(sum) // 15

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]) // elamanların ilk harfini aldık,  H C J R N M
}

```

```js
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

### break

Break, bir döngüyü kesmek için kullanılır.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

Yukarıdaki ifade 3 e eşit olunca durur.

### continue

Belirli bir yinelemeyi atlamak için *continue* anahtar sözcüğünü kullanırız.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```

Yukarıdaki ifade 3 e eşit olduğu zaman 3 ü atladı ve devam edip (continue) sonlandı.

🌕 Çok cesursun, buralara kadar geldin. Artık tekrarlayan ve sıkıcı görevleri otomatikleştirme gücünü kazandınız. 6. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda 6 adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

## 💻 Egzersizler

### Egzersiz: Level 1

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

1. for döngüsünü kullanarak 0'dan 10'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
2. for döngüsünü kullanarak 10'dan 0'a kadar yineleyin, while ve do while döngüsünü kullanarak aynısını yapın
3. for döngüsünü kullanarak 0'dan n'ye kadar yineleyin
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

7. for döngüsü ile çift sayıları yazdırın
8. for döngüsü ile tek sayıları yazdırın
9. for döngüsü ile asal sayıları yazdırın
10. for döngüsü ile 1 den 100 e kadar olan sayıların toplamını bulun

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```

11. for döngüsü ile 1 den 100 e kadar olan çift ve tek sayıların toplamını bulun

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```

12. for döngüsü ile 1 den 100 e kadar olan çift ve tek sayıların toplamını bulun. Dizi olarak kaydedin

    ```sh
      [2550, 2500]
    ```

13. 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin
14. 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin. Sayılar benzersiz olmalı.
15. 6 rastgele karakter dizisi oluşturan küçük bir komut dosyası geliştirin:

    ```sh
    5j2khz
    ```

### Egzersiz: Level 2

1. Herhangi bir sayıda rastgele karakter oluşturan küçük bir komut dosyası geliştirin:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```

1. Rastgele bir hexadecimal sayı üreten bir komut dosyası yazın.

    ```sh
    '#ee33df'
    ```

1. Rastgele bir rgb kodu üreten bir komut dosyası yazın.

    ```sh
    rgb(240,180,80)
    ```

1. Yukarıdaki ülkeler dizisini kullanarak tüm ülkelerin tüm harflerini büyük yapın

    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```

1. Yukarıdaki ülkeler dizisini kullanarak lenght ile ülkelerin karakter sayısını bulun

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```

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

2. Yukarıdaki ülkeler dizisinde, 'land' kelimesini içeren bir ülke veya ülkeler olup olmadığını kontrol edin. 'land' içeren ülkeler varsa, onu dizi olarak yazdırın. 'land' kelimesini içeren bir ülke yoksa, 'land ile biten ülke yok' yazdırın.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```

3. Yukarıdaki ülkeler dizisinde, 'ia' kelimesini içeren bir ülke veya ülkeler olup olmadığını kontrol edin. 'ia' içeren ülkeler varsa, onu dizi olarak yazdırın. 'ia' kelimesini içeren bir ülke yoksa, 'ia ile biten ülke yok' yazdırın.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```

4. Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.

      ```sh
      Ethiopia
      ```

5. Yukarıdaki ülkeler dizisini kullanarak sadece 5 karakter içeren ülkeyi bulun.

    ```sh
    ['Japan', 'Kenya']
    ```

6. webTechs dizisindeki en uzun kelimeyi bulun

7. webTechs dizisini kullanarak aşağıdaki gibi dizi içinde dizi oluşturun

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```

8. MongoDB, Express, React ve Node kullanılarak oluşturulan bir uygulamaya MERN stack app denir. mernStack dizisini kullanarak MERN kısaltmasını oluşturun

9. ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] dizisini for loop veya for of loop ile yazdırın.

10. 'banana', 'orange', 'mango', 'lemon'] dizisini reverse kullanmadan ters çevirin

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

### Egzersiz: Level 3

1. Ülkeler dizisini kopyalayın (Mutasyondan kaçının)

1. Diziler değişkendir. Orijinali değiştirmeyen dizinin bir kopyasını oluşturun. Kopyalanan diziyi sıralayın ve sortedCountries değişkeninde saklayın

1. webTechs dizisini ve mernStack dizisini sıralayın

1. [countries dizisinden](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) 'land' kelimesini içeren tüm ülkeleri çıkarın ve dizi olarak yazdırın

1. [ülkeler dizisinde](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) en yüksek sayıda karakter içeren ülkeyi bulun

1. [countries dizisinden](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) 'land' kelimesini içeren tüm ülkeleri çıkarın ve dizi olarak yazdırın

1. [countries dizisinden](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) yalnızca dört karakter içeren tüm ülkeleri çıkarın ve dizi olarak yazdırın

1. [countries dizisinden](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) iki veya daha fazla kelime içeren tüm ülkeleri çıkarın ve dizi olarak yazdırın

1. [ülke dizisini](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) ters çevirin ve her ülkeyi büyük harfle yazıp bir dizi olarak saklayın

🎉 TEBRİKLER ! 🎉

[<< Gün 5](../05_Gun_Diziler/05_README.md) | [Gün 7 >>](#)
