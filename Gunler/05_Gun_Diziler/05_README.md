<div align="center">
  <h1> 30 Günde JavaScript: Gün 5 - Arrays (Diziler)</h1>
  <sub>Çeviren:
  <a href="https://www.linkedin.com/in/cnahmetcn/" target="_blank">Ahmet Can</a><br>
  <a href="https://www.rhecanyx.com/" target="_blank">Rhecanyx</a><br>
  </sub>
</div>

[<< Gün 4](../04_Gun_Kosul_Ifadeleri/04_README.md) | [Gün 6 >>](#)

![30 Günde JavaScript](../images/banners/day_1_5.png)

- [📔 Gün 5](#-day-5)
  - [Diziler (Arrays)](#arrays)
    - [Boş bir dizi nasıl oluşturulur](#how-to-create-an-empty-array)
    - [Değerlerle bir dizi nasıl oluşturulur](#how-to-create-an-array-with-values)
    - [Split kullanarak bir dizi oluşturma](#creating-an-array-using-split)
    - [Dizi öğelerine index kullanarak erişme](#accessing-array-items-using-index)
    - [Dizi öğesini değiştirme](#modifying-array-element)
    - [Diziyi işleme yöntemleri](#methods-to-manipulate-array)
      - [Dizi Oluşturucu](#array-constructor)
      - [fill ile statik değerler oluşturma](#creating-static-values-with-fill)
      - [concat kullanarak dizi birleştirme](#concatenating-array-using-concat)
      - [Dizi uzunluğunu alma](#getting-array-length)
      - [arr dizisindeki bir öğeyi indeksleme](#getting-index-an-element-in-arr-array)
      - [Dizideki bir elemanın son indeksini alma](#getting-last-index-of-an-element-in-array)
      - [Diziyi kontrol etme](#checking-array)
      - [Diziyi stringe dönüştürme](#converting-array-to-string)
      - [Dizi öğelerini birleştirme](#joining-array-elements)
      - [Dizi öğelerini ayırma](#slice-array-elements)
      - [Dizilerde splice metodu](#splice-method-in-array)
      - [push kullanarak dizilere eleman ekleme](#adding-item-to-an-array-using-push)
      - [pop kullanarak dizilerden eleman çıkarma](#removing-the-end-element-using-pop)
      - [Dizinin başından bir eleman kaldırma](#removing-an-element-from-the-beginning)
      - [Dizinin başına bir eleman ekleme](#add-an-element-from-the-beginning)
      - [Diziyi ters çevirme](#reversing-array-order)
      - [Dizi elemanlarını sıralama](#sorting-elements-in-array)
    - [Dizi içinde dizi](#array-of-arrays)
  - [💻 Egzersizler](#-exercise)
    - [Egzersiz: Level 1](#exercise-level-1)
    - [Egzersiz: Level 2](#exercise-level-2)
    - [Egzersiz: Level 3](#exercise-level-3)


# 📔 Gün 5

## Diziler (Arrays)

Değişkenlerin aksine, bir dizi _birden çok değer_ depolayabilir. Bir dizideki her değerin bir _index_'i vardır ve her dizinin _bellek adresinde bir referansı vardır._ Her değere, _indexleri_ kullanılarak erişilebilir. Dizinin dizini _sıfırdan_ başlar ve son elemanın dizini dizinin uzunluğundan bir küçüktür.

Bir dizi, sıralı ve değiştirilebilir (düzenlenebilir) farklı veri türlerinin bir koleksiyonudur. Bir dizi, yinelenen öğelerin ve farklı veri türlerinin depolanmasına izin verir. Bir dizi boş olabilir veya farklı veri türü değerlerine sahip olabilir. 

### Boş bir dizi nasıl oluşturulur

JavaScript'te bir diziyi farklı şekillerde oluşturabiliriz. Bir dizi oluşturmanın farklı yollarını görelim.
Bir dizi değişkeni bildirmek için *let* yerine *const* kullanmak çok yaygındır. Const kullanıyorsanız, bu değişken adını bir daha kullanmayacağınız anlamına gelir. 

- Array() kullanarak dizi (array) oluşturma

```js
// syntax
const arr = Array()
// yada
// let arr = new Array()
console.log(arr) // []
```

- Köşeli parantez  [] kullanarak dizi (array) oluşturma

```js
// syntax
// En çok önerilen yöntem budur
const arr = []
console.log(arr)
```

### Değerlerle bir dizi nasıl oluşturulur

Array with initial values. We use _length_ property to find the length of an array.

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi
const fruits = ['muz','portakal','çilek','kivi'] // meyve dizisi
const vegetables = ['domates','biber','patlıcan'] // sebze dizisi
const animalProducts = ['süt', 'et', 'yoğurt', 'terayağ' ] // hayvan ürünleri dizisi
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'] // web teknolojileri dizisi
const countries = ['Türkiye', 'Danimarka', 'Almanya', 'ABD', 'Çin'] // ülkeler dizisi

// Dizi yazdırma

console.log('Sayılar', numbers)
console.log('Sayılar dizisinin uzunluğu', numbers.length)

console.log('Meyveler:', fruits)
console.log('Meyveler dizisinin uzunluğu:', fruits.length)

console.log('Sebzeler:', vegetables)
console.log('Sebzeler dizisinin uzunluğu vegetables:', vegetables.length)

console.log('Hayvansal Gıdalar:', animalProducts)
console.log('Hayvansal Gıdalar dizisinin uzunluğu:', animalProducts.length)

console.log('Web teknolojileri:', webTechs)
console.log('Web teknolojileri dizisinin uzunluğu:', webTechs.length)

console.log('Ülkeler:', countries)
console.log('Ülkeler dizisinin uzunluğu:', countries.length)
```

```sh
Sayılar: [0, 3.14, 9.81, 37, 98.6, 100]
Sayılar dizisinin uzunluğu sayılar 6
Meyveler: ['muz','portakal','çilek','kivi'] 
Meyveler dizisinin uzunluğu fruits: 4
Sebzeler: ['domates','biber','patlıcan']
Sebzeler dizisinin uzunluğu: 3
Hayvansal Gıdalar: ['süt', 'et', 'yoğurt', 'terayağ' ]
Hayvansal Gıdalar dizisinin uzunluğu: 4
Web teknolojileri: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB']
Web teknolojileri dizisinin uzunluğu: 7
Ülkeler: ['Türkiye', 'Danimarka', 'Almanya', 'ABD', 'Çin']
Ülkeler dizisinin uzunluğu: 5
```

- Diziler farklı veri türlerini de içlerinde barındırabilir

```js
const arr = [
    'Ahmet',
    28,
    true,
    { country: 'Türkiye', city: 'Kayseri' },
    { skills: ['HTML', 'CSS', 'JS', 'Php', 'Laravel'] }
] 
console.log(arr)
```

### split() kullanarak bir dizi oluşturma

Daha önceki bölümde gördüğümüz gibi, bir stringi farklı konumlardan bölebilir ve bir diziye dönüştürebiliriz. Aşağıdaki örnekleri görelim.

```js
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'JS öğreniyorum ve PHP, Laravel biliyorum.'
const words = txt.split(' ')

console.log(words)
// ['JS', 'öğreniyorum', 've', 'PHP,', 'Laravel', 'biliyorum.']
```

### Dizi öğelerine index kullanarak erişme

Dizideki her öğeye indexleri kullanarak erişiriz. Bir dizi indeksi 0'dan başlar. Aşağıdaki resim dizideki her bir elemanın indeksini açıkça göstermektedir.

![arr index](../images/array_index.png)

```js
const fruits = ['muz','portakal','çilek','kivi']
let firstFruit = fruits[0] // fruits dizisinin ilk indeksi

console.log(firstFruit) // muz

secondFruit = fruits[1]
console.log(secondFruit) // portakal

let lastFruit = fruits[3]
console.log(lastFruit) // kivi

let lastIndex = fruits.length - 1

lastFruit = fruits[lastIndex]
console.log(lastFruit)  // kivi
```

```js
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] 

console.log(numbers.length)  // => 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100
```

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] 

console.log(webTechs)
console.log(webTechs.length) // => 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB
```

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

console.log(countries)
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]) //  -> Kenya
```

```js
const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
]

console.log(shoppingCart)
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex]) //  -> Sugar
```

### Dizi öğesini değiştirme

Bir dizi değiştirilebilir / düzenlenebilir. Bir dizi oluşturulduktan sonra dizi öğelerinin içeriğini değiştirebiliriz.

```js
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // ilk indeksteki 1 değerini 10 yaptık
numbers[1] = 20      // ikinci indeksteki 2 değerini 20 yaptık

console.log(numbers) // [10, 20, 3, 4, 5]

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

countries[0] = 'Afghanistan'  //  Albania yı Afghanistan yaptık
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Kenya yı Korea yaptık

console.log(countries)
```

```sh
["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]
```

### Diziyi işleme yöntemleri

Bir dizi üzerinde farklı işlemler yapabiliriz. Bunun için farklı metotlar vardır: _Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift_

#### Dizi Oluşturma

**Array**: Dizi oluşturma

```js
const arr = Array() // boş bir dizi oluşturur
console.log(arr)

const eightEmptyValues = Array(8) // 8 elemanlı boş bir dizi
console.log(eightEmptyValues) // [empty x 8]
```

#### fill ile statik değerler oluşturma

**fill**: Tüm dizi öğelerini sabit bir değerle doldurma

```js
const arr = Array() // boş bir dizi oluşturur
console.log(arr)

const eightXvalues = Array(8).fill('X') // 8 elemanlı bir dizi oluşturur ve hepsini X ile doldurur
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // 8 elemanlı bir dizi oluşturur ve hepsini 0 ile doldurur
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) //  4 elemanlı bir dizi oluşturur ve hepsini 4 ile doldurur
console.log(four4values) // [4, 4, 4, 4]
```

#### concat kullanarak dizi birleştirme

**concat**: 2 diziyi birleştirme

```js
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```

```js
const fruits = ['banana', 'orange', 'mango', 'lemon']                 // fruits dizisi
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // vegetables dizisi
const fruitsAndVegetables = fruits.concat(vegetables)                 // birleştirilmiş dizi

console.log(fruitsAndVegetables)
```

```sh
["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]
```

#### Dizi uzunluğunu alma

**Length**: Dizinin uzunluğunu buluruz

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5
```

#### Bir dizideki index değerini bulma

**indexOf**: Bir dizide bir öğenin olup olmadığını kontrol etmek için kullanılır. Varsa dizini döndürür, aksi takdirde -1 döndürür.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1
```

Bir elemanın dizide mevcut olup olmadığını kontrol etme

- Check items in a list
  
```js
// banana nın dizi içinde olup olmadığını bulalım

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0

if(index != -1){
   console.log('Dizi içinde var')  
} else {
    console.log('Dizi içinde yok')
}
// Dizi içinde var

index != -1 ? console.log('Dizi içinde var'): console.log('Dizi içinde yok')

let indexOfAvocado = fruits.indexOf('avocado')  // -1
if(indexOfAvocado!= -1){
   console.log('Dizi içinde var')  
} else {
    console.log('Dizi içinde yok')
}
// Dizi içinde yok
```

#### Dizideki bir elemanın son indeksini alma

**lastIndexOf**: Ögenin dizideki son index değerini verir. Öge dizide yoksa -1 dönderir.

```js
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1
```

**includes**: true / false olarak dizi içinde bir elamanın olup olmadığını dönderir.

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true
console.log(numbers.includes(0)) // false
console.log(numbers.includes(1)) // true
console.log(numbers.includes(6)) // false

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] 

console.log(webTechs.includes('Node'))  // true
console.log(webTechs.includes('C'))     // false
```

#### Diziyi kontrol etme

**Array.isArray**: Veri tipinin array olup olmadığını kontrol etme

```js
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false
```

#### Diziyi stringe dönüştürme

**toString**: Array i stringe dönüştürme

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

#### Dizi öğelerini birleştirme

**join**: Dizinin öğelerini birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir dize olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak öğeler arasında birleştirilebilecek farklı dize parametreleri iletebiliriz.

```js
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join()) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook (default)
console.log(names.join('')) //AsabenehMathiasEliasBrook
console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

#### Dizi öğelerini ayırma

**slice**: Aralıktaki birden fazla öğeyi kesmek için kullanılır. İki parametre alır: başlangıç ve bitiş konumu. Bitiş konumunu içermez.

```js
  const numbers = [1,2,3,4,5]

  console.log(numbers.slice()) // [1,2,3,4,5]
  console.log(numbers.slice(0)) // [1,2,3,4,5]
  console.log(numbers.slice(0, numbers.length)) // [1,2,3,4,5]
  console.log(numbers.slice(1,4)) // [2,3,4]
  console.log(numbers.slice(2,3)) // [3]
```

#### Dizilerde splice metodu

**splice**: Üç parametre alır: Başlangıç konumu, kaldırılacak öğe sayısı ve eklenecek öğe sayısı.

```js
  const numbers = [1, 2, 3, 4, 5]

  console.log(numbers.splice()) // [] tüm ögeleri kaldırır

```

```js
  const numbers = [1, 2, 3, 4, 5]
  console.log(numbers.splice(0,1)) // [2, 3, 4, 5] ilk ögeyi kaldırır. 
```

```js
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(numbers.splice(2, 2, 'a', 'b', 'c'))  // -> [1,2,a,b,c,5,6,7,8,9] // 2. index ve sonrasındaki 2 elemanı kaldırıp a b c ekler
```

#### push kullanarak dizilere eleman ekleme

**push**: Mevcut bir dizinin sonuna öğe eklemek için push yöntemini kullanırız.

```js
// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')

console.log(arr)
// ['item1', 'item2','item3','new item']
```

```js
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)

console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> sondan bir eleman siler
console.log(numbers) // -> [1,2,3,4,5]
```

```js
let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')

console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

#### pop kullanarak dizilerden eleman çıkarma

**pop**:  Mevcut bir dizinin sonundan öge çıkarmak için pop yöntemini kullanırız.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.pop()

console.log(numbers) // -> [1,2,3,4]
```

#### Dizinin başından bir eleman kaldırma

**shift**: Mevcut bir dizinin başından öge çıkarmak için shift yöntemini kullanırız.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.shift()

console.log(numbers) // -> [2,3,4,5]
```

#### Dizinin başına bir eleman ekleme

**unshift**: Mevcut bir dizinin başına öğe eklemek için unshift yöntemini kullanırız.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0)

console.log(numbers) // -> [0,1,2,3,4,5]
```

#### Diziyi ters çevirme

**reverse**: Dizi elamanlarını ters çevirir.

```js
const numbers = [1, 2, 3, 4, 5]
numbers.reverse() 

console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]
```

#### Dizi elemanlarını sıralama

**sort**: Artan sırada dizi elamanlarını sıralar. 

```js
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

### Dizi içinde dizi

Dizi, bir dizinin kendisi de dahil olmak üzere farklı veri türlerini depolayabilir.

```js
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
```

🌕  Sınırsız bir enerjiniz var. 5. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda beş adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın. 

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
```

1. _boş_ bir array oluşturun;
2. 5'ten fazla elemanlı bir dizi tanımlayın
3. Dizinizin uzunluğunu bulun
4. Dizinin ilk, orta ve son öğesini alın
5. _mixedDataTypes_ adında bir dizi tanımlayın, diziye farklı veri türleri koyun ve dizinin uzunluğunu bulun. Dizi boyutu 5'ten büyük olmalıdır.
6. itCompanies adlı bir dizi değişkeni bildirin ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç ​​değerleri atayın.
7. _console.log()_ kullanarak diziyi yazdırın
8. Dizideki şirketlerin sayısını yazdırın
9. İlk, orta ve son şirketi yazdırın
10. Her şirketin çıktısını alın
11. Her bir şirket adını tek tek büyük harfe çevirin ve yazdırın
12. Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon büyük BT şirketleridir.
13. itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin. 
14. Birden fazla 'o'ya sahip şirketleri filter yöntemi olmadan filtreleyin
15. _sort()_ yöntemini kullanarak diziyi sıralayın
16. _reverse()_ yöntemini kullanarak diziyi ters çevirin
17. Diziden ilk 3 şirketi slice kullanarak ayırın
18. Diziden son 3 şirketi slice kullanarak ayırın
19. Diziden ortadaki IT şirketini veya şirketlerini slice kullanarak ayırın
20. İlk IT şirketini diziden çıkarın
21. Diziden ortadaki IT şirketini veya şirketlerini çıkarın
22. Son IT şirketini diziden çıkarın
23. Tüm IT şirketlerini kaldırın

### Egzersiz: Level 2

1. countries.js ve web_techs.js adında iki farklı dosya oluşturun ve main.js dosyasında tanımlayın.
1. Tüm noktalama işaretlerini kaldırın ve stringi dizi olarak değiştirin ve dizideki kelime sayısını sayın

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

1. Diziye ekleyin, güncelleyin ve silin,

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - Eğer ekli değilse listenin başına 'Meat' ekle
   - Eğer ekli değilse listenin sonuna 'Sugar' ekle
   - 'Honey' i kaldır
   - 'Tea' yi 'Green Tea' yap
1. 'Ethiopia' dizide varsa 'ETHIOPIA' olarak yazdır, eğer yoksa listeye ekle
1. webTechs dizisinde 'Sass' varsa 'Sass is a CSS preprocess' olarak yazdır, eğer yoksa listeye ekle ve diziyi yazdır
1. Aşağıdaki iki diziyi birleştirin

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```

### Egzersiz: Level 3

1. 10 öğrencinin yaşlarının verildiği bir dizi:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Diziyi sıralayarak max ve min değeri bulun
    - Ortadaki yaşı bulun
    - Ortalama yaşı bulun
    - Yaşlar arası farkı bulun (max - min)
    - *abs()* metodunu kullanarak (min - ortalama) ve (max - ortalama) i karşılaştırın

1. 10 ülkeyi diziden alın [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
1. Ortadaki ülkeyi bulun [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
2. Countries dizisini çift ise iki eşit diziye bölün. Countries dizisi çift değilse bir ülke daha ekleyip bölün
  
🎉 TEBRİKLER ! 🎉

[<< Gün 4](../04_Gun_Kosul_Ifadeleri/04_README.md) | [Gün 6 >>](#)
