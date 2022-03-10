<div align="center">
  <h1> 30 Günde JavaScript: Gün 4 - Koşul İfadeleri</h1>
  <sub>Çeviren:
  <a href="https://www.linkedin.com/in/cnahmetcn/" target="_blank">Ahmet Can</a><br>
  </sub>
</div>

[<< Day 3](../03_Gun_Booleans_Operatorler_Tarih_Islemleri/03_README.md) | [Day 5 >>](#)

![30 Günde JavaScript](../images/banners/day_1_4.png)

- [📔 Gün 4](#-day-4)
  - [Koşul İfadeleri (Conditionals)](#conditionals)
    - [If](#if)
    - [If Else](#if-else)
    - [If  Else if Else](#if-else-if-else)
    - [Switch](#switch)
    - [Ternary Operators](#ternary-operators)
  - [💻 Egzersizler](#-exercises)
    - [Egzersiz: Level 1](#exercises-level-1)
    - [Egzersiz: Level 2](#exercises-level-2)
    - [Egzersiz: Level 3](#exercises-level-3)

# 📔 Day 4

## Koşul İfadeleri (Conditionals)

Koşul ifadeleri, farklı koşullara dayalı kararlar vermek için kullanılır.
Varsayılan olarak, JavaScript komut dosyasındaki ifadeler yukarıdan aşağıya sırayla yürütülür. İşleme mantığı gerektiriyorsa, sıralı yürütme akışı iki şekilde değiştirilebilir: 

- Koşullu yürütme: Belirli bir ifade doğruysa, bir veya daha fazla ifadeden oluşan bir blok yürütülür
- Tekrarlı yürütme: Belirli bir ifade doğru olduğu sürece, bir veya daha fazla ifadeden oluşan bir blok tekrarlı olarak yürütülür. Bu bölümde _if_, _else_ , _else if_ deyimlerini ele alacağız. Önceki bölümlerde öğrendiğimiz karşılaştırma ve mantıksal operatörler burada faydalı olacaktır. 

Koşullar aşağıdaki yollarla uygulanabilir: 

- if
- if else
- if else if else
- switch
- ternary operator

### If

JavaScript ve diğer programlama dillerinde _if_ anahtar kelimesi, bir koşulun doğru olup olmadığını kontrol etmek ve kod bloğunu yürütmek için kullanılır. Bir if koşulu oluşturmak için, _if_ anahtar kelimesine, parantez içinde koşula ve küme parantezinde({}) kod bloğuna ihtiyacımız var. 

```js
// syntax
if (condition) {
  //kodun bu kısmı doğru koşul için çalışır 
}
```

**Example:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} bir pozitif sayıdır`)
}
//  3 bir pozitif sayıdır
```

Yukarıdaki koşul örneğinde görebileceğiniz gibi 3, 0'dan büyüktür, yani pozitif bir sayıdır. Koşul doğruydu ve kod bloğu yürütüldü. Ancak koşul yanlışsa herhangi bir sonuç göremeyiz. 

```js
let isRaining = true
if (isRaining) {
  console.log('Yağmurluğunuzu almayı unutmayın.')
}
```

Aynısı ikinci koşul için de geçerlidir, isRaining false ise if bloğu yürütülmez ve herhangi bir çıktı görmeyiz. Yanlış bir koşulun sonucunu görmek için, _else_ olacak başka bir bloğumuz olmalıdır. 

### If Else

Koşul doğruysa, ilk blok yürütülür, değilse, ikinci blok yürütülür. 

```js
// syntax
if (condition) {
  // kodun bu kısmı doğru koşul için çalışır 
} else {
  // kodun bu kısmı yanlış koşul için çalışır 
}
```

```js
let num = 3
if (num > 0) {
  console.log(`${num} bir pozitif sayıdır`)
} else {
  console.log(`${num} bir negatif sayıdır`)
}
//  3 bir pozitif sayıdır

num = -3
if (num > 0) {
  console.log(`${num} bir pozitif sayıdır`)
} else {
  console.log(`${num} bir negatif sayıdır`)
}
//  -3 bir negatif sayıdır
```

```js
let isRaining = true
if (isRaining) {
  console.log('Yağmurluğa ihtiyacın var.')
} else {
  console.log('Yağmurluğa ihtiyacın yok.')
}
// Yağmurluğa ihtiyacın var.

isRaining = false
if (isRaining) {
  console.log('Yağmurluğa ihtiyacın var.')
} else {
  console.log('Yağmurluğa ihtiyacın yok.')
}
// Yağmurluğa ihtiyacın yok.
```

Son koşul yanlıştır, bu nedenle else bloğu yürütülmüştür. Ya ikiden fazla koşulumuz varsa? Bu durumda *else if* koşulunu kullanırdık. 

### If Else if Else

Günlük hayatımızda günlük olarak kararlar alırız. Kararları bir veya iki koşulu kontrol ederek değil, birden çok koşula göre veririz. Günlük hayatımızda olduğu gibi programlama da şartlarla doludur. Birden fazla koşulumuz olduğunda *else if* kullanırız.

```js
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```

**Örnek:**

```js
let a = 0
if (a > 0) {
  console.log(`${a} bir pozitif sayıdır`)
} else if (a < 0) {
  console.log(`${a} bir negatif sayıdır`)
} else if (a == 0) {
  console.log(`${a} 0 dır`)
} else {
  console.log(`${a} bir sayı değildir`)
}
```

```js
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('Cekete ihtiyacın var.')
} else if (weather === 'cloudy') {
  console.log('Ceketini alsan iyi olur, soğuk olabilir.')
} else if (weather === 'sunny') {
  console.log('Özgürce dışarı çık')
} else {
  console.log('Cekete ihtiyacın yok.')
}
```

### Switch

Switch, **if else if else** için bir alternatiftir.
Switch ifadesi bir *switch* anahtar sözcüğüyle başlar, ardından bir parantez ve kod bloğu gelir. Kod bloğunun içinde farklı durumlarımız olacak. Case bloğu, switch ifadesi değerle eşleşirse çalışır. Break ifadesi, koşul yerine getirildikten sonra kod yürütmeyi sonlandırmak içindir. Default, tüm durumlar koşulu karşılamıyorsa çalışır. 

```js
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
  // code
  default:
   // code
}
```

```js
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('Cekete ihtiyacın var.')
    break
  case 'cloudy':
    console.log('Ceketini alsan iyi olur, soğuk olabilir.')
    break
  case 'sunny':
    console.log('Özgürce dışarı çık.')
    break
  default:
    console.log('Cekete ihtiyacın yok.')
}

// Switch More Examples
let dayUserInput = prompt('Bugün günlerden nedir ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'pazartesi':
    console.log('Bugün Pazartesi')
    break
  case 'salı':
    console.log('Bugün Salı')
    break
  case 'çarşamba':
    console.log('Bugün Çarşamba')
    break
  case 'perşembe':
    console.log('Bugün Perşembe')
    break
  case 'cuma':
    console.log('Bugün Cuma')
    break
  case 'cumartesi':
    console.log('Bugün Cumartesi')
    break
  case 'pazar':
    console.log('Bugün Pazar')
    break
  default:
    console.log('Bu haftanın bir günü değil.')
}

```

```js
let num = prompt('Sayı giriniz');
switch (true) {
  case num > 0:
    console.log('Sayı pozitif');
    break;
  case num == 0:
    console.log('Sayı 0');
    break;
  case num < 0:
    console.log('Sayı negatif');
    break;
  default:
    console.log('Girilen değer bir sayı değil');
}
```

### Ternary Operators (Üçlü Operatörler)

Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır. Bunu diğer bölümlerde ele aldık, ancak burada da belirtmek gerekir. 

```js
code ? true : false
```

```js
let isRaining = true
isRaining
  ? console.log('Cekete ihtiyacın var.')
  : console.log('Cekete ihtiyacın yok.')
```

🌕  Sınırsız bir enerjiniz var. 4. gün zorluklarını yeni tamamladınız ve mükemmelliğe giden yolda dört adım öndesiniz. Şimdi beyniniz ve kasınız için bazı egzersizler yapın. 

## 💻 Egzersizler

### Egzersiz: Level 1

1. Kullanıcıdan yaşını alın. Yaşı 18 veya daha büyükse 'Araba kullanabilecek yaştasın.', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemesini belirten başka bir geri bildirimde bulunun.

   ```sh
   Yaşınızı girin: 30
   Araba kullanabilecek yaştasın.

   Yaşınızı girin: 15
   Araba kullanmak için 3 yılınız kaldı.
   ```

1. myAge ve yourAge değerlerini if ​​… else kullanarak karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Girdi olarak yaşı almak için komut istemi(“Yaşınızı girin:”) kullanın.

   ```sh
   Yaşınızı girin: 30
   Benden 5 yaş büyüksün.
   ```

1. a, b'den büyükse, 'a, b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın

    - if else kullanma
    - üçlü operatör.

    ``` js
      a = 4 olsun
      b = 3 olsun
    ```

    ```sh
      4, 3'ten büyük
    ```

1. Çift sayılar 2'ye tam bölünür, kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

    ```ş
    Bir sayı girin: 2
    2 bir çift sayıdır

    Bir sayı girin: 9
    9 tek sayıdır.
    ``` 

### Egzersiz: Level 2

1. Öğrencilere aldıkları puanlara göre not verebilecek bir kod yazın: 
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F

1. Girilen aya göre mevsimleri kontrol eden kod bloğunu yazın: 
  Kullanıcı girişi:
    - Eylül, Ekim veya Kasım, mevsim Sonbahardır.
    - Aralık, Ocak veya Şubat, mevsim Kış.
    - Mart, Nisan veya Mayıs mevsim bahardır
    - Haziran, Temmuz veya Ağustos, mevsim Yaz 

1. Girilen günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin:


### Egzersiz: Level 3

1. Hangi ayda kaç gün olduğunu bulan kodu yazın:

1. Artık tyılı da hesaba katarak hangi ayda kaç gün olduğunu bulan kodu yazın:


🎉 TEBRİKLER ! 🎉

[<< Day 3](../03_Gun_Booleans_Operatorler_Tarih_Islemleri/03_README.md) | [Day 5 >>](#)