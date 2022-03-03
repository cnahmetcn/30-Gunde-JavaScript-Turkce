<div align="center">
  <h1> 30 Günde JavaScript: Gün 3 - Booleans / Operatörler / Tarih İşlemleri</h1>
  <sub>Çeviren:
  <a href="https://www.linkedin.com/in/cnahmetcn/" target="_blank">Ahmet Can</a><br>
  </sub>
</div>

[<< Day 2](../02_Gun_Veri_Turleri/02_README.md) | [Day 4 >>](#)

![30 Günde JavaScript](../images/banners/day_1_3.png)

- [📔 Gün 3](#-day-3)
  - [Booleans](#booleans)
    - [Gerçek/Doğru Değerler](#truthy-values)
    - [Yanlış Değerler](#falsy-values)
  - [Undefined](#undefined)
  - [Null](#null)
  - [Operatörler](#operators)
    - [Atama Operatörü](#assignment-operators)
    - [Aritmetik Operatörler](#arithmetic-operators)
    - [Karşılaştırma Operatörleri](#comparison-operators)
    - [Mantıksal Operatörler](#logical-operators)
    - [Artırma Operatörü](#increment-operator)
    - [Azaltma Operatörü](#decrement-operator)
    - [Üçlü Operatörler](#ternary-operators)
    - [Operatör Önceliği](#operator-precendence)
  - [Window Methods (Pencere Metotları)](#window-methods)
    - [Window alert() Metodu](#window-alert-method)
    - [Window prompt() Metodu](#window-prompt-method)
    - [Window confirm() Metodu](#window-confirm-method)
  - [Tarih Objesi](#date-object)
    - [Bir Tarih Objesi Oluşturma](#creating-a-time-object)
    - [Tam Yılı Almak](#getting-full-year)
    - [Ayı Almak](#getting-month)
    - [Ayın Gününü Almak](#getting-date)
    - [Haftanın Gününü Almak](#getting-day)
    - [Saati Almak](#getting-hours)
    - [Dakikayı Almak](#getting-minutes)
    - [Saniyeyi Almak](#getting-seconds)
    - [Milisaniye Cinsinden Tarih Almak](#getting-time)
  - [💻 Gün 3: Egzersizler](#-day-3-exercises)
    - [Egzersiz: Level 1](#exercises-level-1)
    - [Egzersiz: Level 2](#exercises-level-2)
    - [Egzersiz: Level 3](#exercises-level-3)

# 📔 Gün 3

## Booleans

Boolean veri türü, iki değerden birini temsil eder: _true_ veya _false_. Boolean değeri, doğru veya yanlıştır. Bu veri türlerinin kullanımı, karşılaştırma operatörünü başlattığınızda netleşecektir. Herhangi bir karşılaştırma, doğru veya yanlış olan bir boole değeri döndürür. 

**Örnek: Boolean Değerler**

```js
let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false
```

Boole değerlerinin doğru veya yanlış olduğu konusunda anlaşmıştık.

### Gerçek/Doğru Değerler

- Sıfır hariç tüm sayılar (pozitif ve negatif) doğrudur
- Boş bir string ('') dışında tüm stringler doğrudur
- Boolean değeri doğrudur

### Yanlış Değerler

- 0
- 0n
- null (boş)
- undefined (Tanımsız)
- NaN
- Boolean değeri yanlış
- '', "", ``, boş dize 

Bu doğru değerleri ve yanlış değerleri hatırlamakta fayda var. Daha sonraki bölümde, onları karar vermek için koşullarla kullanacağız. 

## Undefined (Tanımsız)

Bir değişken bildirirsek ve bir değer atamazsak, değer tanımsız olacaktır. Buna ek olarak, eğer bir fonksiyon değer döndürmüyorsa tanımsız olacaktır. 

```js
let firstName
console.log(firstName) 
```

## Null (Boş)

```js
let empty = null
console.log(empty)
```

## Operatörler

### Atama Operatörleri

JavaScript'te eşittir (=) işareti bir atama operatörüdür. Değişken atamak için kullanılır. 

```js
let firstName = 'Ahmet'
let country = 'Türkiye'
```

Atama Operatörleri

![Assignment operators](../images/assignment_operators.png)

### Aritmetik Operatörler

Aritmetik operatörler matematiksel operatörlerdir.

- Toplama(+): a + b
- Çıkarma(-): a - b
- Çarpma(*): a * b
- Bölme (/): a / b
- Mod Alma yada Kalan Bulma (%): a % b
- Üst Alma(**): a ** b 

```js
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

```

```js
const PI = 3.14
let radius = 100 // metre cinsinden uzunluk

// Bir dairenin alanını hesaplayalım 
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // m/s2
let mass = 72             //  Kilogram

// Bir cismin ağırlığını hesaplayalım 
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // suyun kaynama noktası
const bodyTemp = 37       // C cinsinden vücut ısısı 


// String enterpolasyonu kullanarak dizeyi sayılarla birleştirme 
/*
 Suyun kaynama noktası 100 oC dir.
 İnsan vücudunun sıcaklığı 37 oC dir.
 Yer çekimi 9.81 m / s2 dir.
 */
console.log(
  `Suyun kaynama noktası ${boilingPoint} oC dir.\nİnsan vücudunun sıcaklığı ${bodyTemp} oC dir.\nYer çekimi ${gravity} m / s2 dir.`
)
```

### Karşılaştırma Operatörleri

Programlamada değerleri karşılaştırırız, iki değeri karşılaştırmak için karşılaştırma operatörlerini kullanırız. Bir değerin diğer değere eşit veya büyük olup olmadığını kontrol ederiz. 

![Karşılaştırma Operatörleri](../images/comparison_operators.png)
**Örnek: Karşılaştırma Operatörleri**

```js
console.log(3 > 2)              // true, 
console.log(3 >= 2)             // true, 
console.log(3 < 2)              // false,  
console.log(2 < 3)              // true, 
console.log(2 <= 3)             // true, 
console.log(3 == 2)             // false, 
console.log(3 != 2)             // true, 
console.log(3 == '3')           // true, 
console.log(3 === '3')          // false, 
console.log(3 !== '3')          // true, 
console.log(3 != 3)             // false, 
console.log(3 !== 3)            // false, 
console.log(0 == false)         // true, 
console.log(0 === false)        // false, 
console.log(0 == '')            // true, 
console.log(0 == ' ')           // true, 
console.log(0 === '')           // false, 
console.log(1 == true)          // true, 
console.log(1 === true)         // false, 
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false,
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
```

Yukarıdaki karşılaştırmaları biraz mantıkla anlamaya çalışın. Herhangi bir mantık olmadan hatırlamak zor olabilir.
JavaScript biraz kablolu bir programlama dilidir. JavaScript kodu çalışır ve size bir sonuç verir, ancak bunda iyi değilseniz, istenen sonuç olmayabilir. 

Temel kural olarak, eğer bir değer == ile doğru değilse, === ile eşit olmayacaktır. === kullanmak, == kullanmaktan daha güvenlidir. Bu [bağlantı](https://dorey.github.io/JavaScript-Equality-Table/) veri türlerinin kapsamlı bir karşılaştırma listesine sahiptir. 

### Mantıksal Operatörler

The following symbols are the common logical operators:
&&(ampersand - ve) , ||(boru - veya) and !(ünlem - değil).
&& operatörü, yalnızca iki işlem doğruysa doğru olur.
|| operatör, işlemlerden herhangi birinin doğru olması durumunda gerçekleşir.
! operatörü, sonucun tam tersini alır. (true ise false, false ise true) 

```js
// && ve operatörü

const check = 4 > 3 && 10 > 5         // true && true -> true
const check = 4 > 3 && 10 < 5         // true && false -> false
const check = 4 < 3 && 10 < 5         // false && false -> false

// || veya operatörü

const check = 4 > 3 || 10 > 5         // true  || true -> true
const check = 4 > 3 || 10 < 5         // true  || false -> true
const check = 4 < 3 || 10 < 5         // false || false -> false

//! değil operatörü

let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true
```

### Artırma Operatörü

JavaScript'te, bir değişkende saklanan bir değeri artırmak için artırma operatörünü kullanırız. Artış, atamadan önce yada sonra olanilir. Her birini görelim:

1. Pre-increment (Önce artır sonra ata)

```js
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
```

1. Post-increment (Önce ata sonra artır)

```js
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
```

En çok post-increment kullanılır. En azından post-increment operatörünü nasıl kullanacağınızı hatırlamalısınız. 

### Azaltma Operatörü

JavaScript'te, bir değişkende saklanan bir değeri azaltmak için azaltma operatörünü kullanırız. Azalma, atamadan önce yada sonra olanilir. Her birini görelim:

1. Pre-decrement (Önce azalt sonra ata)

```js
let count = 0
console.log(--count) // -1
console.log(count)  // -1
```

2. Post-decrement (Önce ata sonra azalt)

```js
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```

### Ternary (Üçlü) Operatörler

Ternary (Üçlü) operatör bir koşul yazmaya izin verir.
Koşullar yazmanın başka bir yolu da ternary operatörü kullanmaktır. Aşağıdaki örneklere bakın: 

```js
let isRaining = true
isRaining
  ? console.log('Yağmurluk giyin.')
  : console.log('Yağmurluğa ihtiyacın yok.')

isRaining = false
isRaining
  ? console.log('Yağmurluk giyin.')
  : console.log('Yağmurluğa ihtiyacın yok.')
```

```sh
Yağmurluk giyin.
Yağmurluğa ihtiyacın yok.
```

```js
let number = 5
number > 0
  ? console.log(`${number} pozitif bir sayıdır`)
  : console.log(`${number} negatif bir sayıdır`)


number = -5
number > 0
  ? console.log(`${number} pozitif bir sayıdır`)
  : console.log(`${number} negatif bir sayıdır`)
```

```sh
5 pozitif bir sayıdır
-5 negatif bir sayıdır
```

### Operatör Önceliği

Bu [linkten](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) operatör öncelikleri hakkında bilgi alabilirsiniz

## Window Methods (Pencere Metotları)

### Window alert() Metodu

En başta gördüğünüz gibi alert() metodu, bir mesaj ve bir OK butonu ile bir uyarı kutusu görüntüler. Yerleşik bir yöntemdir (builtin) ve argüman alır. 

```js
alert(message)
```

```js
alert("30 Günde JavaScript'e hoş geldiniz")
```

Yıkıcı ve sinir bozucu olduğu için çok fazla alert() kullanmayın, sadece test etmek için kullanın. 

### Window prompt() Metodu

The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

Pencere bilgi istemi yöntemleri, giriş değerlerini almak için tarayıcınızda bir giriş içeren bir bilgi istemi kutusu görüntüler ve giriş verileri bir değişkende saklanabilir. istem() yöntemi iki argüman alır. İkinci argüman isteğe bağlıdır. 

Prompt() metodu kullacıdan bilgi almak için kullanılır. alert kutusu gibi açılır ve kullanıcıdan bir değer girmesini ister. İki argüman alır. 

```js
prompt('required text', 'optional text')
promt('kullanıcının giriş yapacağı kısmın üst tarafında görünen ve kullanıcıyı bilgilendiren alan',
'inputun içinde placeholder şeklinde çalışan alan')
```

```js
let number = prompt('Sayı giriniz', 'sayıyı buraya girin')
console.log(number)
```

### Window confirm() Metodu

A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument.
Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

Confirm() yöntemi, bir Tamam ve İptal düğmesiyle birlikte belirli bir mesaj içeren bir iletişim kutusu görüntüler.
Bir onay kutusu genellikle bir kullanıcıdan bir şeyi yürütmek için izin istemek için kullanılır. confirm() metodu argüman olarak bir string alır.
Tamam'a tıklamak doğru değeri verir yani onaylar, İptal düğmesine tıklamak yanlış değeri verir yani iptal eder. 


```js
const agree = confirm('Bu eğitimi silmek istediğize emin misiniz? ')
console.log(agree)
```

Tüm window metodları bunlar değil. İleriki bölümlerde daha derinlerine inilecek. 

## Tarih Objesi

Zaman önemli bir şeydir. Belirli bir faaliyetin veya olayın zamanını bilmek isteriz. JavaScript'te geçerli saat ve tarih, JavaScript Tarih Nesnesi kullanılarak oluşturulur. Date nesnesini kullanarak oluşturduğumuz nesne, tarih ve saatle çalışmak için birçok yöntem sağlar. Bir tarih nesnesinden tarih ve saat bilgilerini almak için kullandığımız yöntemler, bilgileri sağladığı için _get_ kelimesi ile başlar. 
_getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()_

![Tarih Objesi](../images/date_time_object.png)

### Bir Tarih Objesi Oluşturma

Bir kez zaman nesnesi yarattık. Zaman nesnesi, zaman hakkında bilgi sağlayacaktır. Bir zaman nesnesi oluşturalım.

```js
const now = new Date()
console.log(now) // Thu Feb 17 2022 14:04:04 GMT+0300 (GMT+03:00)
```

Bir time nesnesi oluşturduk ve tablo üzerinde bahsettiğimiz get yöntemlerini kullanarak nesneden herhangi bir tarih saat bilgisine ulaşabiliyoruz. 

### Tam Yılı Almak

Bir zaman nesnesinden tam yılı çıkaralım veya alalım. 

```js
const now = new Date()
console.log(now.getFullYear()) // 2022
```

### Ayı Almak

Bir zaman nesnesinden tam ayı çıkaralım veya alalım. 

```js
const now = new Date()
console.log(now.getMonth()) // 1, Şubat ayı 1 dir. aylar(0-11)
```

### Ayın Gününü Almak

Bir zaman nesnesinden ayın gününü çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getDate()) // 17
```

### Haftanın Gününü Almak

Bir zaman nesnesinden haftanın gününü çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getDay()) // 4, 
// Haftanın günleri pazar ve 0 dan başlar (0-6)
```

### Saati Almak

Bir zaman nesnesinden saati çıkaralım veya alalım. 

```js
const now = new Date()
console.log(now.getHours()) // 14 -> 14:09:55
```

### Dakikayı Almak

Bir zaman nesnesinden dakikayı çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getMinutes()) // 9 -> 14:09:55
```

### Saniyeyi Almak

Bir zaman nesnesinden saniyeyi çıkaralım veya alalım.

```js
const now = new Date()
console.log(now.getSeconds()) // 55 -> 14:09:55
```

### Milisaniye Cinsinden Tarih Almak

Bu yöntem 1 Ocak 1970'den itibaren milisaniye cinsinden süre verir. Unix zamanı olarak da bilinir. Unix zamanını iki şekilde alabiliriz: 

1. Using _getTime()_

```js
const now = new Date() //
console.log(now.getTime()) // 1645096302311
```

1. Using _Date.now()_

```js
const allSeconds = Date.now() //
console.log(allSeconds) // 1645096302311

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
```

Bu değerleri insanlar tarafından okunabilir bir zaman biçimine biçimlendirelim. 
**Örnek:**

```js
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 17/2/2022 14:19
```

🌕  Sınırsız bir enerjiniz var. 3. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda üç adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın. 

## 💻 Gün 3: Egzersizler

### Egzersiz: Level 1

1. firstName, lastName, country, city, age, isMarried, year değişkeni bildirin ve buna değer atayın ve farklı veri türlerini kontrol etmek için typeof operatörünü kullanın. 
2. '10' türünün 10'a eşit olup olmadığını kontrol edin
3. parseInt('9.8') değerinin 10'a eşit olup olmadığını kontrol edin 
4. Boolean değeri, doğru veya yanlıştır. 
   1. true değer dönderen üç JS ifadesi yazın.
   2. false değer dönderen üç JS ifadesi yazın.

5. console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın. 
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Python ve jargonun uzunluğunu bulun ve sonucu yanlış bulun. 

6. console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın. 
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. Hem dragon hem de python'da 'on' yoktur 

7. Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın 
   1. Yılı bulun.
   2. Ayı bulun.
   3. Bugünün tarihi nedir?
   4. Bugünü sayı olarak değeri nedir?
   5. Şimdi saat kaç?
   6. Şimdi dakika kaç?
   7. 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulunuz. 

### Egzersiz: Level 2

1. Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini isteyin ve bir üçgenin alanını hesaplayın (alan = 0,5 x b x h). 

   ```sh
   Taban: 20
   Yükseklik: 10
   Üçgenin alanı: 100
   ```

1. Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini isteyin ve üçgenin çevresini hesaplayın (çevre = a + b + c) 

   ```sh
   a: 5
   b: 4
   c: 3
   Üçgenin çevresi: 100
   ```

1. prompt kullanarak uzunluk ve genişlik alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik)) 

1. prompt kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, pi = 3.14. 

1. Eğimi hesapla, y = 2x -2

1. Eğim (m = y2-y1/x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun 

1. Yukarıdaki iki sorunun eğimini karşılaştırın. 

1. y'nin değerini hesaplayın (y = x^2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun. 

1. Kullanıcıdan saat ve saat başına oran girmesini isteyen bir prompt yazın. Kişinin ücretini hesaplayın. 

    ```sh
    Saat: 40
    Saat başına ücret: 28
    Haftalık kazanç: 1120
    ```

1. Adınızın uzunluğu 7'den büyükse, adınız uzun, değilse adınız kısa olduğunu yazdırın. 

1. Aşağıdaki çıktıyı alacak şekilde adınızın ve soyadınızın uzunluğunu bulup karşılaştırın. 

    ```js
    let firstName = 'Ahmet'
    let lastName = 'Can'
    ```

    ```sh
    Adının (Ahmet) uzunluğu, aile adınızın (can) uzunluğu daha uzun/kısa.
    ```

1. _myAge_ ve _yourAge_ adında iki değişken tanımlayın ve başlangıç değerleri verin. Aşağıdaki çıktıyı üretin.

   ```js
   let myAge = 28
   let yourAge = 26
   ```

   ```sh
   Ben, senden 2 yaş büyüğüm.
   ```

1. prompt kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.

1. prompt kullanarak, kullanıcının doğduğu yılı alın ve kullanıcı 18 yaşından küçükse araba sürmek için biraz daha beklemesini söyleyin.

    ```sh

    Doğum yılınızı girin: 1993
    Yaşın 28. Araba kullanmak için yeterince yaşlısın 

    Doğum yılınızı girin: 2005
    Yaşın  17. Araba kullanmak için 1 seneye daha ihtiyacın var.
    ```

1. Kullanıcıdan yıl sayısını girmesini isteyin. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım. 

   ```sh
   Yaşadığınız yıl sayısını girin: 100
   3153600000 saniyedir yaşıyorsun.
   ```

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun 
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Egzersiz: Level 3

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır) 
   1. YYY-MM-DD HH:mm eg. 2022-02-17 15:00

[<< Day 2](../02_Gun_Veri_Turleri/02_README.md) | [Day 4 >>](#)
