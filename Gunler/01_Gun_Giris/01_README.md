![30 Günde JS](./images/day_1_1.png)

- [30 Günde JavaScript](#30-days-of-javascript)
- [📔 Gün 1](#-day-1)
  - [Yüklemeler](#yuklemeler)
    - [Node.js Kurulumu](#nodejs-kurulumu)
    - [Tarayıcı](#browser)
      - [Google Chrome Kurulumu](#installing-google-chrome)
      - [Google Chrome Console u Açma](#opening-google-chrome-console)
      - [Tarayıcı Konsoluna JS Kodu Yazma](#writing-code-on-browser-console)
        - [Console.log](#consolelog)
        - [Console.log u Birden Fazla Argüman ile Kullanma](#consolelog-with-multiple-arguments)
        - [Yorum Satırları](#comments)
        - [Söz Dizimi (Syntax)](#syntax)
      - [Aritmetik İşlemler](#arithmetics)
    - [Kod Editörü](#code-editor)
      - [Visual Studio Code Kurulumu](#installing-visual-studio-code)
      - [Visual Studio Code Kullanımı](#how-to-use-visual-studio-code)
  - [Web Sayfalarına JS Kodu Eklemek](#adding-javascript-to-a-web-page)
    - [Satır İçinde Script Yazma](#inline-script)
    - [Sayfa İçinde Script Yazma](#internal-script)
    - [Sayfa Dışından Script Yazma ve Çağırma](#external-script)
    - [Birden Fazla Sayfa Dışından Script Yazma ve Çağırma](#multiple-external-scripts)
  - [Veri Türlerine Giriş](#introduction-to-data-types)
    - [(Sayılar) Numbers](#numbers)
    - [(Harfler) Strings](#strings)
    - [(Doğru - Yanlış Değer) Booleans](#booleans)
    - [(Değer Atanmamış Değişkenler) Undefined](#undefined)
    - [(Boş Değerli Değişkenler) Null](#null)
  - [Veri Tiplerinin Kontrolü (typeOf)](#checking-data-types)
  - [Yorum Satırları](#comments-again)
  - [Değişkenler](#variables)
- [💻 Gün 1: Egzersizler](#-day-1-exercises)

# 📔 Day 1


## Yüklemeler

### Node.js Kurulumu

Şuan için Node.js e gerek yok ancak ilerleyen bölümlerde ihtiyacımız olacak. Bu yüzden şimdi de yükleyebiliriz. Buradan indirebilirsiniz. [node.js](https://nodejs.org/en/).

![Node download](images/download_node.png)

İndikten sonra dosyayı açarak kuruluma başlayın.

![Install node](images/install_node.png)

Kurulum tamamlandıktan sonra terminale aşağıdaki kodu yazarak yüklemeyi doğrulayabilirsiniz.

```sh
node -v
v14.16.0
```

Bu eğitimde kullanılan Node versiyonu 12.14.0 dır, şu an tavsiye edilen sürüm ise 16.13.2 dir.

### Tarayıcı

Tarayıcı için birden fazla seçenek olsa da en güçlü aday Google Chrome u yükleyeceğiz. 

#### Google Chrome Kurulumu

Eğer bilgisayarınızda kurulu değilse Chrome u bu adresten indirebilirsiniz [Google Chrome](https://www.google.com/chrome/). Başlangıçta küçük JS kodlarını tarayıcının konsol ekranında yazacağız ancak uygulama geliştirirken bunu kullanmayacağız. 

![Google Chrome](images/google_chrome.png)

#### Google Chrome Console u Açma

You can open Google Chrome console either by clicking three dots at the top right corner of the browser, selecting _More tools -> Developer tools_ or using a keyboard shortcut. I prefer using shortcuts.

Google Chrome un **Geliştirici Araçları** na ulaşmak için sağ üstte bulunan 3 noktaya tıklayıp _Diğer Araçlar -> Geliştirici araçları_ (_More tools -> Developer tools_) yada klavye kısayolunu kullanabilirsiniz.

![Opening chrome](images/opening_developer_tool.png)

Klavye kısayolunu kullanarak Console a erişmek için

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](images/opening_chrome_console_shortcut.png)

Console u açtıktan sonra, işaretli alanları keşfedin. Bu kısımda çok zaman geçireceğiz. Console, JS kodlarınızın gittiği yerdir. JS kodlarınız burada V8 motoru kullanarak makine diline çevrilir. Şimdi gelin Google Chrome konsoluna bir JavaScript kodu yazalım: 

![write code on console](./images/js_code_on_chrome_console.png)

#### Tarayıcı Konsoluna JS Kodu Yazma

JS kodlarınızı Google Chrome yada bir başka tarayıcının Console alanına yazabilirsiniz. Bu eğitimde Google Chrome Console üzerinde yoğunlaşacağız. 

##### Console.log

İlk JS kodumuzu yazmak için **console.log()** fonksiyonunu kullanacağız. Biz argüman olarak veriler gireceğiz ve fonksiyon bizlere bir çıktı üretecek. Bizim girdimiz 'Hello, World' olacak ve bu kodu yazıp fonksiyondan bize çıktı üretmesini isteyeceğiz.

```js
console.log('Hello, World!')
```

Kodu çalıştırdığımızda bize Hello, World! olarak çıktı verecektir.

##### Console.log u Birden Fazla Argüman ile Kullanma

**console.log()** fonksiyonu virgül kullanılarak birden fazla argüman alabilir. Söz dizimi şuna benzer: **console.log(param1, param2, param3)**

![console log multiple arguments](./images/console_log_multipl_arguments.png)

```js
console.log('Hello', 'World', '!')
console.log('teknokodi', 'eğitim', 've blog', 'sitesi')
console.log(30,'günde','JS','öğreniyoruz')
```

##### Yorum Satırları

Kodumuza yorum satırları ekleyebiliriz. Yorum satırları kodumuzun daha iyi anlaşılabilmesi için çok önemlidir. JS yorum satırları içine alınmış kısımları çalıştırmaz. Kodumuza yorum satırı eklemek için // yada /\* \*/ karakterlerini kullanabiliriz. 

**Örnek: Tek satır için yorum satırı kullanımı**

// Bu birinci yorum satırı
// Bu ikinci yorum satırı  
// Bu üçüncü yorum satırı

**Örnek çoklu satırlar için yorum satırı kullanımı**

/*
Bu çok satırı kapsayan bir yorum satırıdır.
Bu alanın içine yazacağınız herşey
yorum olarak kabul edilir ve derlenmez.
*/

##### Söz Dizimi (Syntax)

Programlama dilleri konuşma dillerine benzer. Birçok dil anlamlı bir mesaj iletmek için kelimeler, deyimler, cümleler, birleşik cümleler ve daha fazlasını kullanır. Sözdiziminin İngilizce anlamı, _bir dilde iyi oluşturulmuş cümleler oluşturmak için sözcüklerin ve tümceciklerin düzenlenmesidir. Sözdiziminin teknik tanımı, bir bilgisayar dilindeki ifadelerin yapısıdır. Programlama dillerinde sözdizimi vardır. JavaScript bir programlama dilidir ve diğer programlama dilleri gibi kendi söz dizimine sahiptir. JavaScript'in anladığı bir sözdizimi yazmazsak, farklı türde hatalar ortaya çıkar. Farklı JavaScript hata türlerini daha sonra keşfedeceğiz. Şimdilik sözdizimi hatalarını görelim. 

![Error](images/raising_syntax_error.png)

Burada kasıtlı bir hata yaptık. Sonuç olarak, console sözdizimi hatalarını gösterir. Aslında, sözdizimi çok bilgilendirici olabiliyor. Ne tür bir hata yapıldığını bildiriyor. Hata geri bildirim kılavuzunu okuyarak sözdizimini düzeltebilir ve sorunu çözebiliriz. Bir programdaki hataları belirleme ve kaldırma işlemine hata ayıklama denir. Hataları düzeltelim: 

```js
console.log('Hello, World!')
console.log('Hello, World!')
```

So far, we saw how to display text using the _console.log()_. If we are printing text or string using _console.log()_, the text has to be inside the single quotes, double quotes, or a backtick quotes.

Şimdiye kadar, _console.log()_ kullanarak metnin nasıl görüntüleneceğini gördük. _console.log()_ kullanarak metin veya dize yazdırıyorsak, metnin tek tırnak '' , çift tırnak "" veya ters tırnak `` içinde olması gerekir. 

**Örnek:**

```js
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)
```

#### Aritmetik İşlemler

Şimdi console ekranında sayı veri türleri üzerinde biraz JS pratik yapalım. Aşağıdaki işlemleri **_console.log_** ile yapalım. Console ekranı console.log fonksiyonuna gerek duymadan da bu aritmetik işlemleri yapabilir. 

![Arithmetic](images/arithmetic.png)

```js
console.log(2 + 3) // Toplama
console.log(3 - 2) // Çıkarma
console.log(2 * 3) // Çarpma
console.log(3 / 2) // Bölme
console.log(3 % 2) // Mod alma - Kalanı bulma
console.log(3 ** 2) // Üs alma
```

### Kod Editörü

Kodlarımızı tarayıcımızın console alanına yazdık ancak büyük projelerde bunu yapamayız. Gerçek bir çalışma ortamında, geliştiriciler kodlarını yazmak için farklı kod düzenleyicileri kullanır. Bu 30 günlük JavaScript öğrenme aşamasında Visual Studio Code kullanacağız. 

#### Visual Studio Code Kurulumu

VS Code, çok popüler ve açık kaynaklı bir editördür. Size bunu tavsiye ederim ancak kullandığınız yada kullanmak istediğniz başka editörler veya IDE ler varsa onları da kullanabilirsiniz. [Visual Studio Code u indirin](https://code.visualstudio.com/)

![Vscode](images/vscode.png)

VS Code u indirip, kurduysanız başlayabiliriz.

#### Visual Studio Code Nasıl Kullanılır

VS Code u çalıştırın. Açtığınızda, bu tür bir arayüz elde edeceksiniz. İşaretli alanları kullanarak sizde VS Code u keşfedebilirsiniz. 

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![Installing Live Server](images/vsc_live_server.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)

## Web Sayfalarına JS Kodu Eklemek

JS kodumuzu web sayfalarımızı birden fazla yolla ekleyebiliriz.

- **_Satır İçinde Script Yazma_**
- **_Sayfa İçinde Script Yazma_**
- **_Sayfa Dışından Script Yazma ve Çağırma_**
- **_Birden Fazla Sayfa Dışından Script Yazma ve Çağırma_**


### Satır İçinde Script Yazma

Masaüstünüzde 30DaysOfJS adında bir klasör oluşturun ve içinde **_index.html_** adında bir html dosyası oluşturun. Klasörü VS Code yada kullandığınız editörde açın. Ardından aşağıdaki kodları kopyalayıp **_index.html_** sayfanızın içine yapıştırın. 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline (Satır İçi) Script</title>
  </head>
  <body>
    <button onclick="alert('30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>
```

Evet, ilk satır içi kodumuzu yazmış olduk. Burada buyona basınca bize (_alert()_) olarak **"30DaysOfJavaScript"** uyarı mesajı verecek bir kod yazdık. 

### Sayfa İçinde Script Yazma

Sayfa içine yazılan kodlar ```<script> </script>``` etiketleri içinde _head_ yada _body_ etiketlerinin arasına yazılır. 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal (Sayfa İçi) Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal (Sayfa İçi) Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!');">Tıkla</button>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </body>
</html>
```

Şimdi tarayıcımızda projemizi açalım ve console ekranına bakalım

![js code from vscode](./images/js_code_vscode.png)

### Sayfa Dışından Script Yazma ve Çağırma

Sayfa içine yazılan kodlara benzer şekilde, harici komut dosyası bağlantıları da head veya body üzerinde olabilir, ancak body içine yerleştirilmesi tercih edilir.
Öncelikle .js uzantılı harici bir JavaScript dosyası oluşturmalıyız. .js uzantılı tüm dosyalar JavaScript dosyalarıdır. Proje dizininizin içine app.js adında bir dosya oluşturun ve aşağıdaki kodu yazın ve bu .js dosyasını gövdenin en altına bağlayın. 

```js
console.log('Welcome to 30DaysOfJavaScript')
```

_head_ içinde harici bağlantı:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External (Harici) Script</title>
    <script src="app.js"></script>
  </head>
  <body></body>
</html>
```

_body_ içinde harici bağlantı:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfJavaScript:External (Harici) Script</title>
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

Şimdi tarayıcımızda projemizi açalım ve console ekranına bakalım

### Birden Fazla Sayfa Dışından Script Yazma ve Çağırma

Ayrıca birden fazla harici JavaScript dosyasını bir web sayfasına bağlayabiliriz.
30DaysOfJS klasörü içerisinde bir helloworld.js dosyası oluşturun ve aşağıdaki kodu yazın. 

```js
console.log('Hello, World!')
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Multiple External (Harici) Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./app.js"></script>
  </body>
</html>
```

_Ana *.js dosyanız diğer tüm komut dosyalarının altında olmalıdır_. Bunu hatırlamak çok önemlidir. 

![Multiple Script](./images/multiple_script.png)

## Veri Türlerine Giriş

In JavaScript and also other programming languages, there are different kinds of data types. The following are JavaScript primitive data types:_String, Number, Boolean, undefined, Null_, and _Symbol_.

### (Sayılar) Numbers

- Integers: Tam sayılar (negatif, pozitif yada sıfır)
  Örnek:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Float: Ondalıklı sayılar
  Örnek
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### (Harfler / Yazılar) Strings

Tek tırnak, çift tırnak veya ters tırnak arasında bir veya daha fazla karakterden oluşan bir koleksiyon.
**Example:**

```js
'Ahmet'
"Türkiye"
`JavaScript çok güzel bir programlama dilidir.`
```

### (Doğru - Yanlış Değer) Booleans

Bir boolean değeri, Doğru veya Yanlış'tır. Herhangi bir karşılaştırma, doğru veya yanlış olan bir boolean değeri döndürür.

Boolean veri türü, doğru veya yanlış bir değerdir. 

**Example:**

```js
true // ışık yanıyorsa doğrudur, 1 dir.
false // ışık yanmıyorsa yanlıştır, 0 dır.
```

### (Değer Atanmamış Değişkenler) Undefined

JavaScript'te bir değişkene değer atamazsak o değişkenin değeri tanımsızdır. Buna ek olarak, bir işlev hiçbir şey döndürmüyorsa, tanımsız döndürür. 

```js
let firstname
console.log(firstname) // tanımsız, çünkü ad değişkenine herhangi bir değer atanmamış.
```

### (Boş Değerli Değişkenler) Null

JS de Null boş değer demektir.

```js
let emptyValue = null
```

## Checking Data Types

Bir değişkenin veri türünü kontrol etmek için **typeof** operatörünü kullanırız. Aşağıdaki örneklere bakın. 

```js
console.log(typeof 'Ahmet') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined
```

## Yorum Satırları Yeniden

JavaScript'te yorum yapmanın diğer programlama dillerine benzer olduğunu unutmayın. Yorumlar, kodunuzu daha okunabilir hale getirmek için önemlidir.
Yorum yapmanın iki yolu vardır: 

- _Single line commenting (Tek Satırlı Yorumlar)_
- _Multiline commenting (Çok Satırlı Yorumlar)_

```js
// let firstName = 'Ahmet';
// let lastName = 'Can';
```

```js
/*
  let location = 'Türkiye';
  let age = 28;
  let isMarried = true;
*/
```

## Değişkenler

Değişkenler, verilerin kapsayıcılarıdır. Değişkenler, verileri bir bellek konumunda depolamak için kullanılır. Bir değişken bildirildiğinde, bir bellek konumu ayrılır. Bir değere (veri) bir değişken atandığında, bellek alanı bu verilerle doldurulacaktır. Bir değişken bildirmek için _var_, _let_ veya _const_ anahtar sözcükleri kullanırız.

Farklı bir zamanda değişen bir değişken için _let_ kullanırız. Veriler hiç değişmezse, _const_ kullanırız. Örneğin PI, ülke adı, yerçekimi değişmez ve _const_ kullanabiliriz. Bu eğitimde _var_ kullanmayacağız ve kullanmanızı tavsiye etmiyorum. Çok fazla sızıntısı olan değişkeni bildirmenin hataya açık bir yoludur. var, let ve const hakkında diğer bölümlerde (scope) daha detaylı konuşacağız. Şimdilik yukarıdaki açıklama yeterlidir.

Geçerli bir JavaScript değişken adı aşağıdaki kurallara uymalıdır: 

- Bir JavaScript değişken adı bir sayı ile başlamamalıdır.
- Bir JavaScript değişken adı, dolar işareti ve alt çizgi dışında özel karakterlere izin vermez.
- Bir JavaScript değişken adı, bir camelCase kuralına uyar.
- Bir JavaScript değişken adında kelimeler arasında boşluk olmamalıdır.
- Not: Değişkenlerinizi ingilizce olarak tutmanız sizin için yararlı olacaktır.

Aşağıda geçerli JavaScript değişkenlerine örnekler verilmiştir. 

```js
firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
```

Listedeki birinci ve ikinci değişkenler, JavaScript'te camelCase bildirme kuralına uygundur. Bu materyalde camelCase değişkenlerini kullanacağız.

Geçersiz değişkenlere örnek: 

```sh
  first-name
  1_num
  num_#_1
```

Değişkenleri farklı veri tipleriyle tanımlayalım. Bir değişken bildirmek için değişken adından önce _let_ veya _const_ anahtar sözcüğünü kullanmamız gerekir. Değişken adının ardından eşittir işareti (atama operatörü) ve bir değer (atanmış veri) yazarız. 

```js
// Syntax
let nameOfVariable = value
```

**Examples of declared variables**

```js
// Farklı veri türlerinin farklı değişkenlerini atama
let firstName = 'Ahmet'
let lastName = 'Can'
let country = 'Türkiye'
let city = 'Kayseri'
let age = 28 
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
```

```sh
Ahmet Can Türkiye Kayseri 28 true
```

```js
// Sayısal değerler ile değişken atama
let age = 28
const gravity = 9.81 // yerçekimi  in m/s2
const boilingPoint = 100 // suyun °C de kaynama noktası
const PI = 3.14 // pi sayısı
console.log(gravity, boilingPoint, PI)
```

```sh
9.81 28 3.14
```

```js
// Değişkenler ayrıca virgülle ayrılmış bir satırda bildirilebilir
let name = 'Ahmet', // name of a person
job = 'mühendis',
live = 'Türkiye'
console.log(name, job, live)
```

```sh
Ahmet mühendis Türkiye
```

![Day one](./images/day_1.png)

🌕 Harikasın! 1. günü yeni tamamladın ve mükemmel yolundasın. Şimdi beyniniz ve kasınız için bazı egzersizler yapın. 

# 💻 Gün 1: Egzersizler

1. _Yorumlar kodu okunabilir hale getirebilir_ yazan tek satırlık bir yorum yazın.
2. _30DaysOfJavaScript'e Hoş Geldiniz_ yazan başka bir yorum yazın.
3. _Yorumlar kodu okunabilir, yeniden kullanımı kolay hale getirebilir_ ve  _ve bilgilendir_ diyen çok satırlı bir yorum yazın.

4. Bir variable.js dosyası oluşturun ve değişkenleri bildirin ve string, boolean, undefined ve null veri tipleri atayın
5. datatypes.js dosyası oluşturun ve farklı veri türlerini kontrol etmek için JavaScript **_typeof_** operatörünü kullanın. Her değişkenin veri türünü kontrol edin
6. Değer atamadan dört değişken bildirin
7. Atanmış değerlerle dört değişken tanımlayın
8. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı birden çok satırda saklamak için değişkenler bildirin
9. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı tek bir satırda saklamak için değişkenler bildirin
10. İki değişken _myAge_ ve _yourAge_ bildirin ve bunlara başlangıç değerlerini atayın ve tarayıcı konsolunda oturum açın. 


```sh
Ben 28 yaşındayım.
Sen 26 yaşındasın.
```

🎉 TEBRİKLER ! 🎉