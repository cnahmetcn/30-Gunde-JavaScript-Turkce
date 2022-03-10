/*
1. Kullanıcıdan yaşını alın. Yaşı 18 veya daha büyükse 'Araba kullanabilecek yaştasın.', 
ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemesini belirten başka bir geri bildirimde bulunun.

   ```sh
   Yaşınızı girin: 30
   Araba kullanabilecek yaştasın.

   Yaşınızı girin: 15
   Araba kullanmak için 3 yılınız kaldı.
   ```
*/

    let yas = prompt("Yaşınızı girin:");
    if (yas >= 18) {
        console.log("Araba kullanabilecek yaştasın.");
    } else {
        console.log("Araba kullanmak için " + (18 - yas) + " yılınız kaldı.");
    }

/*
1. myAge ve yourAge değerlerini if ​​… else kullanarak karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Girdi olarak yaşı almak için komut istemi(“Yaşınızı girin:”) kullanın.

   ```sh
   Yaşınızı girin: 30
   Benden 5 yaş büyüksün.
   ```
*/

    let myAge = prompt("Yaşınızı girin:");
    let yourAge = prompt("Yaşınızı girin:");
    if (myAge > yourAge) {
        console.log("Ben, senden" + (myAge - yourAge) + " yaş büyüğüm.");
    } else {
        console.log("Sen, benden" + (yourAge - myAge) + " yaş büyüksün.");
    }
/*
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
*/

    let sayi1 = 4;
    let sayi2 = 3;
    if (sayi1 > sayi2) {
        console.log(sayi1 + "," + sayi2 + "den büyük");
    } else {
        console.log(sayi1 + "," + sayi2 + "den küçük");
    }

    sayi1 > sayi2 ? console.log(sayi1 + "," + sayi2 + " den büyük") : console.log(sayi1 + "," + sayi2 + " den küçük");

/*
1. Çift sayılar 2'ye tam bölünür, kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

    ```ş
    Bir sayı girin: 2
    2 bir çift sayıdır

    Bir sayı girin: 9
    9 tek sayıdır.
    ``` 
*/

    let sayi = prompt("Bir sayı girin:");
    sayi % 2 == 0 ? console.log(sayi + " çift sayıdır") : console.log(sayi + " tek sayıdır.");