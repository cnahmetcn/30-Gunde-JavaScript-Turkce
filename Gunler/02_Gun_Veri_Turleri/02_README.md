<div align="center">
  <h1> 30 Günde JavaScript: Gün 2 - Veri Türleri</h1>
  <sub>Çeviren:
  <a href="https://www.linkedin.com/in/cnahmetcn/" target="_blank">Ahmet Can</a><br>
  </sub>
</div>

[<< Gün 1](../01_Gun_Giris/01_README.md) | [Gün 3 >>](../03_Gun_Booleans_Operatorler_Tarih_Islemleri/03_README.md)

![30 Günde JavaScript](../images/banners/day_1_2.png)

- [📔 Gün 2](#-gun-2)
  - [Veri Türleri](#veri-turleri)
    - [İlkel / Basit (Primitive) Veri Türleri](#primitive-veri-turleri)
    - [İlkel / Basit Olmayan (Non-Primitive) Veri Türleri](#non-primitive-veri-turleri)
  - [Sayılar (Numbers)](#sayilar)
    - [Sayı Veri Türlerini Tanımlama](#sayi_veri_turlerini_tanimlama)
    - [Math Nesnesi (Math Object)](#math-nesnesi)
      - [Rastgele Sayı Üretme](#rastgele-sayi-uretme)
  - [Karakterler / Yazılar (Strings)](#karakterler)
    - [Karakter Birleştirme](#karakter-birleştirme)
      - [Toplama Operatörünü Kullanarak Birleştirme](#toplama-operatörünü-kullanarak-birleştirme )
      - [Uzun Değişmez Dizeler / Metinler](#long-literal-strings)
      - [Dizelerdeki Kaçış Dizileri](#escape-sequences-in-strings)
      - [Template Literals (Template Strings)](#template-literals-template-strings)
    - [String Metodları](#string-methods)
  - [Veri Türlerini Kontrol Etme ve Değiştirme](#checking-data-types-and-casting)
    - [Veri Türlerini Kontrol Etme](#checking-data-types)
    - [Veri Türünü Değiştirme (Casting)](#changing-data-type-casting)
      - [String to Int](#string-to-int)
      - [String to Float](#string-to-float)
      - [Float to Int](#float-to-int)
  - [💻 Gün 2: Egzersizler](#-day-2-exercises)
    - [Egzersiz: Level 1](#exercise-level-1)
    - [Egzersiz: Level 2](#exercise-level-2)
    - [Egzersiz: Level 3](#exercises-level-3)

# 📔 Gün 2

## Veri Türleri

Bir önceki bölümde (Gün 1), veri türlerinden biraz bahsettik. Veri veya değerlerin veri türleri vardır. Veri türleri, verilerin özelliklerini tanımlar. Veri türleri ikiye ayrılabilir: 

1. İlkel / Basit (Primitive) Veri Türleri
2. İlkel / Basit Olmayan (Non-Primitive) Veri Türleri

### İlkel / Basit (Primitive) Veri Türleri

İlkel veri türleri şunları içerir,

 1. Sayılar (Numbers) - Integer, float
 2. Yazılar (Strings) - Tek, çift yada ters tırnak arasına yazılmış ifadeler
 3. Doğru/Yanlış Değerler (Booleans) - Doğru yada yanlış (0 / 1) 
 4. Boş Değerli Değişkenler (Null) - Boş değerli (null) yada değersiz olan
 5. Değer Atanmamış Değişkenler (Undefined) - Değer tanımlanmamış değişkenler

İlkel olmayan vri türleri şunları içerir,

1. (Objects) - Nesleler
2. (Functions) - Fonksiyonlar
3. (Arrays) - Diziler

Şimdi ilkel ve ilkel olmayan veri türlerinin tam olarak ne anlama geldiğini görelim.
*İlkel* veri türleri değişmez (değiştirilemez) veri türleridir. İlkel bir veri türü oluşturulduktan sonra onu değiştiremeyiz. 

**Örnek:**

```js
let word = 'JavaScript'
```

*word* değişkeninde saklanan ifadeyi değiştirmeye çalışırsak, JavaScript bir hata vermelidir. Tek tırnak, çift tırnak veya ters tırnaklı alıntı altındaki herhangi bir veri türü, bir string veri türüdür. 

```js
word[0] = 'Y'
```

Bu ifade, *word* değişkeninde saklanan dizeyi değiştirmez. Yani stringlerin değiştirilemez, yani değişmez olduğunu söyleyebiliriz. Burada ilk harfi Y yap dememize rağmen çıktı bize JavaScript i verecektir. 
İlkel veri türleri değerlerine göre karşılaştırılır. Farklı veri değerlerini karşılaştıralım. Aşağıdaki örneğe bakın: 

```js
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
```

### İlkel / Basit Olmayan (Non-Primitive) Veri Türleri

*Non-primitive* data types are düzenlenebilir yada değiştirilebilir.. İlkel olmayan veri türlerinin değerini, oluşturulduktan sonra değiştirebiliriz.
Bir array oluşturarak görelim. Diziler (Array), köşeli parantez içindeki veri değerlerinin bir listesidir. Diziler (Array), aynı veya farklı veri türlerini içerebilir. Dizi değerlerine referanslarına göre başvurulur.  JavaScript te diziler 0 dan başlar. Yani, bir dizinin ilk elemanı sıfır indeksinde, ikinci eleman birinci indekste ve üçüncü eleman ikinci indekste bulunur.

```js
let nums = [1, 2, 3]
console.log(nums)  // [1, 2, 3]

nums[0] = 10
console.log(nums)  // [10, 2, 3]
```

Gördüğümüz gibi bir dizi (array) ilkel olmayan bir veri türüdür ve değiştirilebilir. İlkel olmayan veri türleri değere göre karşılaştırılamaz. İlkel olmayan iki veri türü aynı özelliklere ve değerlere sahip olsa bile, kesinlikle eşit değildirler. 

```js
let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Ahmet',
role:'mühendis',
country:'Türkiye'
}

let userTwo = {
name:'Ahmet',
role:'mühendis',
country:'Türkiye'
}

console.log(userOne == userTwo) // false
```
Temel kural, ilkel olmayan veri türlerini karşılaştırmıyoruz. Dizileri (array), fonksiyonları (functions) veya nesneleri (objects) karşılaştırmayın.
İlkel olmayan değerler, değer yerine referansla karşılaştırıldıkları için referans türleri (reference types) olarak adlandırılır. İki nesne (objects), yalnızca aynı temel nesneye (objects) atıfta bulunuyorlarsa kesinlikle eşittir. 

```js
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Ahmet',
role:'mühendis',
country:'Türkiye'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
```

İlkel veri türleri ile ilkel olmayan veri türleri arasındaki farkı anlamakta zorlanıyorsanız, yalnız değilsiniz. Sakin olun ve bir sonraki bölüme geçin ve bir süre sonra geri gelmeye çalışın. Şimdi sayı türüne göre veri türlerine başlayalım. 

## Sayılar (Numbers)

Sayılar (Numbers), tüm aritmetik işlemleri yapabilen tam sayılar (integers) ve ondalık (floats) değerlerdir.
Sayılarla ilgili bazı örnekler görelim. 

### Sayı Veri Türlerini Tanımlama

```js
let age = 35
const gravity = 9.81  // değişmeyen değerler için const kullanıyoruz, yerçekimi
let mass = 72
const PI = 3.14 // pi sayısı

const boilingPoint = 100 // suyun kaynama noktası
const bodyTemp = 37      // ortalama insan vücut ısısı

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
```

### Math Nesnesi (Math Object)

JavaScript'te Math, sayılarla çalışmak için birçok yöntem sağlar. 

```js
const PI = Math.PI // Pi sayısını ürettik

console.log(PI)                            // 3.141592653589793

console.log(Math.round(PI))                // En yakın tam sayıya yuvarlama. 3 ye yuvarlar

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // En yakın bir alt tam sayıya yuvarlama. 3 ye yuvarlar

console.log(Math.ceil(PI))                 // En yakın bir üst tam sayıya yuvarlama. 4 ye yuvarlar

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // En küçük değer, -5

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // En büyük değer, 20

const randNum = Math.random() //  0 ile 0.999999 arasnda bir sayı üretir
console.log(randNum)

const num = Math.floor(Math.random () * 11) // 0 ile 10 arasnda bir sayı üretir

console.log(num)

// Mutlak değer
console.log(Math.abs(-10))      // 10

// Karekök
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Üs alma
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // Euler sayısı, 2.718

// e tabanında Logaritma
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Trigonometri 
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)
```

#### Rastgele Sayı Üretme

JavaScript Math Object, 0 ile 0,999999999 arasında rastgele bir sayı üretir 

```js
let randomNum = Math.random() // 0 - 0.999...
```

Şimdi 0 ile 10 arasında rastgele bir sayı üretmek için random() yöntemini nasıl kullanabileceğimizi görelim: 

```js
let randomNum = Math.random()         // 0 ile 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // 0 ile 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // 0 ile 10 arasında tam sayı
```

## Strings

Strings are texts, which are under **_single_**  , **_double_**, **_back-tick_** quote. To declare a string, we need a variable name, assignment operator, a value under a single quote, double quote, or backtick quote.
Let's see some examples of strings:

Strings, **_tek_**, **_çift_** yada **_ters_** tırnak i.erisindeki metinlerdir. Bir string bildirmek için bir değişken adına, atama operatörüne, tek tırnak, çift tırnak veya ters tırnak işareti içinde bir değere ihtiyacımız var.
Bazı string örnekleri görelim: 

```js
let space = ' '           // boşluk karakteri içeren string
let firstName = 'Ahmet'
let lastName = 'Can'
let country = 'Türkiye'
let city = 'Kayseri'
let language = 'JavaScript'
let job = 'mühendis'
let quote = "Merhaba, JS"
let quotWithBackTick = `Merhaba, JS.`
```

### String Birleştirme

İki veya daha fazla string i birbirine bağlamaya birleştirme denir. 

```js
let fullName = firstName + space + lastName;
console.log(fullName);
```

```sh
Ahmet Can
```

Birleştirme işlemini farklı yollarla yapabiliriz.

#### Toplama Operatörü Kullanarak Birleştirme

Toplama operatörünü kullanarak birleştirme eski bir yoldur. Bu birleştirme yöntemi sıkıcı ve hataya açıktır. Bu şekilde nasıl birleştirileceğini bilmek iyidir, ancak ES6 şablon dizelerini kullanmanızı şiddetle tavsiye ederim (daha sonra açıklanacaktır). 

```js
// Farklı veri türlerinin farklı değişkenlerini bildirme 
let space = ' '           // boşluk karakteri içeren string
let firstName = 'Ahmet'
let lastName = 'Can'
let country = 'Türkiye'
let city = 'Kayseri'
let language = 'JavaScript'
let job = 'mühendis'
let age = 28


let fullName =firstName + space + lastName // Ahmet Can
let personInfoOne = 'Merhaba, ben ' + firstName + space + lastname +'. ' + city + ' \'de yaşıyorum'

console.log(personInfoOne)
```

```sh
Merhaba, ben Ahmet Can. Kayseri'de yaşıyorum.
```

#### Uzun Değişmez Dizeler / Metinler

Bir dize, tek bir karakter, paragraf veya bir sayfa olabilir. Dize uzunluğu çok büyükse tek satıra sığmaz. Dizenin bir sonraki satırda devam edeceğini belirtmek için her satırın sonunda ters eğik çizgi karakterini (\\) kullanabiliriz. 
**Örnek:**

```js
const paragraph = "Merhaba ben Ahmet Can. \
Kayseri, Türkiye 'de yaşıyorum. Bu JS eğitimini elimden geldiğince \ Türkçe'ye çevirmeye çalıştım. "

console.log(paragraph)
```

#### Dizelerdeki Kaçış Dizileri 

In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

- \n: yeni satır - (new line)
- \t: Tab, 8 boşluk karakteri - (means 8 spaces)
- \\\\: Ters Kesme İşareti - (Back slash)
- \\': Tek Tırnak - (Single quote ('))
- \\": Çift Tırnak - (Double quote ("))
  
```js
console.log('Umarım herkes 30 Günde JavaScript yarışmasından keyif alıyordur. \nAlıyor musun?')
console.log('Günler\tKonular\tAlıştırmalar')
console.log('Gün 1\t3\t5')
console.log('Gün 2\t3\t5')
console.log('Gün 3\t3\t5')
console.log('Gün 4\t3\t5')
console.log('Bu bir ters kesme işaretidir (\\)')
console.log('Her programlama dili şöyle başlar:  \"Hello, World!\"')
console.log("Her programlama dili şöyle başlar:  \'Hello, World!\'")
console.log('2022\'de \"Görmek İnanmaktır\" sözü doğru değil')
```

Output in console:

```sh
Umarım herkes 30 Günde JavaScript yarışmasından keyif alıyordur.
Alıyor musun?
Günler Konular Alıştırmalar
Gün 1 3 5
Gün 2 3 5
Gün 3 3 5
Gün 4 3 5
Bu bir ters kesme işaretidir (\)
Her programlama dili şöyle başlar: "Hello, World!"
Her programlama dili şöyle başlar: 'Hello, World!'
2022'de "Görmek İnanmaktır" sözü doğru değil
```

#### Template Literals

Bir template literals oluşturmak için iki ters tırnak kullanırız. Verileri template literals ın içine bir ifade olarak enjekte edebiliriz. Verileri enjekte etmek için, ifadeyi bir $ işareti ile başlayan bir küme parantezinin({}) içine alırız. Aşağıdaki sözdizimine bakın. 

```js
`String literal text`
`String literal text ${expression}`
```

**Örnek: 1**

```js
console.log(`2 ile 3 ün toplamı 5 dir`)              
let a = 2
let b = 3
console.log(`${a} ile ${b} ün toplamı ${a + b} dir`) 
```

**Example:2**

```js
let firstName = 'Ahmet'
let lastName = 'Can'
let country = 'Türkiye'
let city = 'Kayseri'
let language = 'JavaScript'
let job = 'mühendis'
let age = 28
let fullName = firstName + ' ' + lastName

let personInfoTwo = `Ben ${fullName}.Ben ${age} yaşındayım. Ben ${country} de yaşıyorum.`
let personInfoThree = `Ben ${fullName}. Ben ${city}, ${country} de yaşıyorum. Ben bir ${job}im. ${language} öğreniyorum.`
console.log(personInfoTwo)
console.log(personInfoThree)
```

```sh
Ben Ahmet Can.Ben 28. Ben Türkiye de yaşıyorum.
Ben Ahmet Can. Ben Kayseri, Türkiye de yaşıyorum. Ben bir mühendisim. JavaScript öğreniyorum.
```

Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations (comparison, arithmetic operations, ternary operation).

```js
let a = 2
let b = 3
console.log(`${a}, ${b} den büyüktür: ${a > b}`)
```

```sh
2, 3 den büyüktür: false
```

### String Methods

Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

JavaScript'teki her şey bir nesnedir. Bir string, ilkel bir veri türüdür, Bu, oluşturulduktan sonra onu değiştiremeyeceğimiz anlamına gelir. String nesnesinin birçok metodu vardır. String ler ile çalışmamıza yardımcı olabilecek farklı string metotları vardır. 

1. *lenght*: *length* metodu bir stringin karakter sayısını verir. Boşluk karakteri de dahildir.

**Example:**

```js
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Ahmet Can'
console.log(firstName.length)  // 9
```

2. *Bir stringdeki karakterlere erişim*: Bir metindeki her bir karaktere indexi kullanarak erişebiliriz. Programlamada, sayma 0'dan başlar. Metinin ilk indexi sıfırdır ve son index, metinin uzunluğu eksi birdir (string.length - 1).

  ![Accessing sting by index](../images/string_indexes.png)
  
```js
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
```

3. *toUpperCase()*: Bu method, metnin tüm karakterlerini büyük yapar.

```js
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'ahmet'

console.log(firstName.toUpperCase())  // AHMET

let country = 'TürKiYe'

console.log(country.toUpperCase())    // TÜRKİYE
```

4. *toLowerCase()*: Bu method, metnin tüm karakterlerini küçük yapar.

```js
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript

let firstName = 'AHMET'

console.log(firstName.toLowerCase())  // ahmet

let country = 'KaySerİ'

console.log(country.toLowerCase())   // kayseri
```

5. *substr()*: Metnin içinden parça almak için kullanılır. 2 argüman alır. İlk arg hangi indexten başlayacağını, ikinci arg ise kaç karakter alacağını belirtir. İndex karakterini de içerir. 

```js
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script -> 4. indexten itibaren 6 karakter

let country = 'Türkiye'
console.log(country.substr(3, 4))   // kiye -> 3. indexten itibaren 4 karakter

let city = 'Kayseri'
console.log(city.substr(1, 3))   // ays -> 1. indexten itibaren 3 karakter
```

6. *substring()*: Metnin içinden parça almak için kullanılır. 2 argüman alır. İlk arg hangi indexten başlayacağını, ikinci arg ise hangi indexte biteceğini belirtir. İlk index karakteri içerirken, ikinci index karakterini içermez.

```js
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let country = 'Türkiye'

console.log(country.substring(0, 3))   // Tür
console.log(country.substring(3, 7))   // kiye
console.log(country.substring(3))      // kiye

let city = 'Kayseri'

console.log(city.substring(0, 2))   // Ka
console.log(city.substring(2, 5))   // yse
console.log(city.substring(4))      // eri
```

7. *split()*: *split()* metodu, metni belirli bir karaktere göre parçalar.

```js
let string = '30 Günde JavaScript'

console.log(string.split())     // Array e dönüştürür -> ["30 Günde JavaScript"]
console.log(string.split(' '))  // Boşluk karakterine göre ayırır. -> ["30", "Günde", "JavaScript"]

let firstName = 'Ahmet'

console.log(firstName.split())    // Array e dönüştürür - > ["Ahmet"]
console.log(firstName.split(''))  // Herbir karakteri parçalar->  ["A", "h", "m", "e", "t"]

let cities = 'Adana, Ankara, Kayseri, İstanbul'

console.log(cities.split('a'))  // ['Ad', 'n', ', Ank', 'r', ', K', 'yseri, İst', 'nbul']
```

8. *trim()*: Bir dizenin başındaki veya sonundaki boşlukları kaldırır. 

```js
let string = '   30 Günde JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Ahmet '

console.log(firstName)
console.log(firstName.trim())
```

```sh
   30 Günde JavaScript   
30 Günde JavaScript
  Ahmet 
Ahmet
```

9. *includes()*: Bir argüman alır ve bu argümanın metinde bulunup bulunmadığına göre true yada false dönderir.

```js
let string = '30 Günde JavaScript'

console.log(string.includes('Günde'))     // true
console.log(string.includes('günde'))     // false - büyük/küçük harf duyarlılığı
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Türkiye'

console.log(country.includes('tür'))     // false
console.log(country.includes('Tür'))     // true
console.log(country.includes('kiy'))    // true
console.log(country.includes('Kiye'))    // false
```

10. *replace()*: İki parametre alır. İlk parametre metnin içinde bulunan bir ifadeye denk gelirken, ikinci parametre ise ilk parametrenin yerine gelecek olan yeni ifadeyi belirtir.

```js
string.replace(oldsubstring, newsubstring)
```

```js
let string = '30 Günde JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Günde Python

let city = 'Nevşehir'
console.log(city.replace('Nev', 'Eski'))       // Eskişehir
```

11. *charAt()*: Bir dizindeki index değerini döndürür. 

```js
string.charAt(index)
```

```js
let string = '30 Günde JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t
```

12. *charCodeAt()*: Bir dizindeki index değerinin ASCII değerini döndürür. 

```js
string.charCodeAt(index)
```

```js
let string = '30 Günde JavaScript'
console.log(string.charCodeAt(5))        // n -> 110

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t -> 116

```

13.  *indexOf()*: Bir dizide verilen değeri arar ve ilk eşleşmeyi sağlayan elemanın index değerini verir, eğer eleman yoksa -1 değerini dönderir.

```js
string.indexOf(substring)
```

```js
let string = '30 Günde JavaScript'

console.log(string.indexOf('G'))          // 3
console.log(string.indexOf('Günde'))       // 3
console.log(string.indexOf('günde'))       // -1
console.log(string.indexOf('a'))          // 10
console.log(string.indexOf('JavaScript')) // 9
console.log(string.indexOf('Script'))     // 13
console.log(string.indexOf('script'))     // -1
```

14.  *lastIndexOf()*: Bir dizide verilen değeri arar ve son eşleşmeyi sağlayan elemanın index değerini verir, eğer eleman yoksa -1 değerini dönderir.


```js
//syntax
string.lastIndexOf(substring)
```

```js
let string = "JavaScript'i seviyorum. JavaScript'i sevmiyorsanız, başka ne sevebilirsiniz"

console.log(string.lastIndexOf('sev'))       // 61
console.log(string.lastIndexOf('ript'))        // 30
console.log(string.lastIndexOf('JavaScript')) // 24
```

15. *concat()*: String ifadeleri birleştirir.

```js
string.concat(substring, substring, substring)
```

```js
let string = '30'
console.log(string.concat("Günde", "JavaScript")) // 30GündeJavaScript

let country = 'Tür'
console.log(country.concat("kiye")) // Türkiye
```

16. *startsWith*: Parametre olarak bir string alır ve metnin bu parametre ile başlayıp başlamadığını true/false olarak dönderir.

```js
//syntax
string.startsWith(substring)
```

```js
let string = "Javascript'i diğer dillerden daha çok seviyorum"

console.log(string.startsWith('sev'))   // false
console.log(string.startsWith('Java'))   // true
console.log(string.startsWith('ler'))  // false

let text = 'Hello world'

console.log(text.startsWith('world', 6))   // 6. index world ile mi başlıyor -> true
```

17. *endsWith*: Parametre olarak bir string alır ve metnin bu parametre ile bitip bitmediğini true/false olarak dönderir.

```js
string.endsWith(substring)
```

```js
let string = "Javascript'i diğer dillerden daha çok seviyorum"

console.log(string.endsWith('seviyorum')) // true
console.log(string.endsWith('Javascript')) // false
console.log(string.endsWith('daha çok')) // false

```

18. *search*: Parametre olarak bir ifade alır ve ilk eşleşmenin index ini döndürür. Arama değeri bir dize veya regex olabilir. 

```js
string.search(substring)
```

```js
let string = "JavaScript'i seviyorum. JavaScript'i sevmiyorsanız, başka ne sevebilirsiniz"
console.log(string.search('seviyorum'))          // 13
console.log(string.search(/javascript/gi))  // 0 -> Normalde javascript ifadesi metnin içinde büyük/küçük harf duyarlılığından dolayı geçmiyor. Ancak /gi ifadesindeki i metoda harf duyarlılığını es geçmesini belirtiyor.
```

19. *match*: Parametre olarak bir dize veya regex alır ve eşleşme varsa bir dizi döndürür, değilse null döndürür. Regex / ile başlar ve / ile biter.

```js
let string = 'love'
let patternOne = /love/     // herhangi bir kural yok
let patternTwo = /love/gi   // g, tüm metin içinde arama yapar - i, büyük/küçük harf duyarlılığını kaldırır
```

```js
// syntax
string.match(substring)
```

```js
let string = "Ben javaScript'i seviyorum. JavaScript'i sevmiyorsanız, başka ne sevebilirsiniz."
console.log(string.match('JavaScript'))
```

```sh
["JavaScript", index: 28, input: "Ben javaScript'i seviyorum. JavaScript'i sevmiyorsanız, başka ne sevebilirsiniz. ", groups: undefined]
```

```js
let pattern = /JavaScript/gi
console.log(string.match(pattern))   // ["javaScript", "JavaScript"]
```

Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

```js
let txt = "2019'da 30 Günlük Python çalıştım. Şimdi, 2022'de bu meydan okumaya başlayacağım için çok heyecanlıyım"
let regEx = /\d+/

// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// +, bir veya daha fazla basamaklı sayı anlamına gelir,
// g, global demektir, her yerde ara. 

console.log(txt.match(regEx))  // ['2019', index: 0, input: "2019'da 30 Günlük Python çalıştım. Şimdi, 2022'de …meydan okumaya başlayacağım için çok heyecanlıyım", groups: undefined]
console.log(txt.match(/\d+/g)) // ['2019', '30', '2022']
```

20. *repeat()*: Parametre olarak bir sayı alır ve ifadeyi o sayı kadar tekrarlar.

```js
string.repeat(n)
```

```js
let string = 'js'
console.log(string.repeat(10)) // jsjsjsjsjsjsjsjsjsjs
```

## Veri Türlerini Kontrol Etme ve Değiştirme

### Veri Türlerini Kontrol Etme

Belirli bir değişkenin veri türünü kontrol etmek için _typeof_ yöntemini kullanırız. 

**Örnek:**

```js

let firstName = 'Ahmet'      // string
let lastName = 'Can'        // string
let country = 'Türkiye'         // string
let city = 'Kayseri'           // string
let age = 28                   // number
let job                         // undefined

console.log(typeof 'Ahmet')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object
```

### Veri Türünü Değiştirme (Casting)

- Casting: Bir veri türünü başka bir veri türüne dönüştürmedir. _parseInt()_, _parseFloat()_, _Number()_, _+ sign_ ve _str()_ kullanabiliriz.
- Aritmetik işlemler yaptığımızda string içindeki sayılar ilk önce tamsayıya dönüştürülmeli, değilse bir hata döndürmelidir. 

#### String to Int

String bir ifade olarak kullanılan tam sayıları normal tam sayılara dönüştürebiliriz. Bunun için aşağıdaki yöntemler kullanılabilir.

- parseInt()
- Number()
- Plus sign(+)

```js
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
```

```js
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10
```

```js
let num = '10'
let numInt = +num

console.log(numInt) // 10
```

#### String to Float

String bir ifade olarak kullanılan ondalıklı sayıları normal ondalıklı sayılara dönüştürebiliriz. Bunun için aşağıdaki yöntemler kullanılabilir.

- parseFloat()
- Number()
- Plus sign(+)

```js
let num = '9.81'
let numFloat = parseFloat(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = Number(num)

console.log(numFloat) // 9.81
```

```js
let num = '9.81'
let numFloat = +num

console.log(numInt) // 9.81
```

#### Float to Int

Ondalıklı sayıları tam sayılara döndermek için aşağıdaki yöntemler kullanılabilir.

- parseInt()
  
```js
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9
```

🌕  Harikasın! 2. günü de tamamladın ve mükemmel yolundasın. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.   

## 💻 Gün 2: Egzersizler

### Egzersiz: Level 1

1. Challenge adında bir değişken tanımlayın ve bunu **'30 Günde JavaScript'** başlangıç ​​değerine atayın.
2. __console.log()__ kullanarak tarayıcı konsolunda dizeyi yazdırın
3. _console.log()_ kullanarak tarayıcı konsolunda dizenin __length__ değerini yazdırın
4. __toUpperCase()__ yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin
5. __toLowerCase()__ yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin
6. __substr()__ veya __substring()__ yöntemini kullanarak dizenin ilk kelimesini kesin (dilimleyin)
7. *30 Günde JavaScript*'ten *Günde JavaScript* ifadesini kesin.
8. __includes()__ yöntemini kullanarak dizenin __Script__ kelimesini içerip içermediğini kontrol edin
9. __split()__ yöntemini kullanarak __string__ öğesini bir __array__'ye bölün
10. 30 Günde JavaScript dizesini __split()__ yöntemini kullanarak boşluk ile bölün
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' metnini __split()__ kullanarak virgül ile bölün ve array ile değiştirin
12. __replace()__ yöntemini kullanarak 30 Günde JavaScript'i 30 Günde Python olarak değiştirin.
13. '30 Günde JavaScript' dizisinde 15. indexteki karakter nedir? __charAt()__ yöntemini kullanın.
14. __charCodeAt()__ ile '30 Günde JavaScript' dizisindeki J karakterin kodu nedir?
15. 30 Günde JavaScript'te __a__ öğesinin ilk geçtiği yerin konumunu belirlemek için __indexOf__ kullanın
16. 30 Günde JavaScript'te __a__ öğesinin son tekrarının konumunu belirlemek için __lastIndexOf__ kullanın.
17. Aşağıdaki cümlede __çünkü__ kelimesinin ilk geçtiği yeri bulmak için __indexOf__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
18. Aşağıdaki cümlede __çünkü__ kelimesinin son geçtiği yeri bulmak için __lastIndexOf__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
19. Aşağıdaki cümlede __çünkü__ kelimesinin ilk geçtiği yeri bulmak için __search__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
20. Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için __trim()__ kullanın.Örneğin '30 Günde JavaScript'.
21. *30 Günde JavaScript* stringi ile __startsWith()__ yöntemini kullanın ve sonucu doğru yapın
22. *30 Günde JavaScript* stringi ile __endsWith()__ yöntemini kullanın ve sonucu doğru yapın
23. 30 Günde JavaScript'teki tüm __a__'lari bulmak için __match()__ yöntemini kullanın
24. __concat()__ kullanın ve '30 Günde' ve 'JavaScript'i tek bir '30 Günde JavaScript' dizesinde birleştirin
25. 30 Günde JavaScript'i 2 kez yazdırmak için __repeat()__ yöntemini kullanın 

### Egzersiz: Level 2

1. Console.log() kullanarak aşağıdaki ifadeyi yazdırın: 

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

2. Console.log()'u kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın: 

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

3. typeof ile '10'un tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
4. parseFloat('9.8') un 10 a tam olarak eşit olup olmadığını kontrol edin.
5. Hem 'python' hem de 'jargon' da 'on' ifadesinin bulunup bulunmadığını kontrol edin
6. _Umarım bu kurs jargonla dolu değildir_. Cümlede _jargon_ olup olmadığını kontrol edin.
7. 0 ile 100 arasında rastgele bir sayı üretin.
8. 50 ile 100 arasında rastgele bir sayı üretin.
9. Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.
10. Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
11. Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın. 

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```

12. __substr__ kullanarak __çünkü çünkü__ ifadesini aşağıdaki cümleden ayırın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__ 

### Egzersiz: Level 3

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Bu cümledeki __love__ kelimesini sayın.
2. Aşağıdaki cümledeki tüm __çünkü__ sayısını saymak için __match()__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__
3. Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu, replace ve regex kullanın).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

4. Aşağıdaki metinden sayıları çıkararak kişinin yıllık toplam gelirini hesaplayın. 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.' 

🎉 TEBRİKLER ! 🎉

[<< Gün 1](../01_Gun_Giris/01_README.md) | [Gün 3 >>](../03_Gun_Booleans_Operatorler_Tarih_Islemleri/03_README.md)
