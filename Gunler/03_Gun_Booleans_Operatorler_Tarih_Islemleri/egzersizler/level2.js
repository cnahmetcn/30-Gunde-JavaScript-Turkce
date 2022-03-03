/*
1. Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini isteyin ve bir üçgenin alanını hesaplayın (alan = 0,5 x b x h). 

   ```sh
   Taban: 20
   Yükseklik: 10
   Üçgenin alanı: 100
   ```
*/

    let taban = prompt("Tabanı giriniz");
    let yukseklik = prompt("Yüksekliği giriniz");
    let alan = 0.5 * taban * yukseklik;
    console.log(`Taban: ${taban}\nYükseklik: ${yukseklik}\nÜçgenin alanı: ${alan}`);

/*
1. Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini isteyin ve üçgenin çevresini hesaplayın (çevre = a + b + c) 

   ```sh
   a: 5
   b: 4
   c: 3
   Üçgenin çevresi: 100
   ```
*/

    let kenarA = prompt("a kenarını giriniz");
    let kenarB = prompt("b kenarını giriniz");
    let kenarC = prompt("c kenarını giriniz");
    let cevre = Number(kenarA) + Number(kenarB) + Number(kenarC);
    console.log(`a: ${kenarA}\nb: ${kenarA}\nc: ${kenarA}\nÜçgenin çevresi: ${cevre}`);

/*
1. prompt kullanarak uzunluk ve genişlik alın ve bir dikdörtgenin alanını hesaplayın 
(alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik)) 
*/

    let uzunluk = prompt("Uzunluğu giriniz");
    let genislik = prompt("Genişliği giriniz");
    let alan = uzunluk * genislik;
    let cevre = 2 * (Number(uzunluk) + Number(genislik));
    console.log(`Uzunluk: ${uzunluk}\nGenişlik: ${genislik}\nDikdörtgenin alanı: ${alan}\nDikdörtgenin çevresi: ${cevre}`);

/*
1. prompt kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) 
ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, pi = 3.14. 
*/

    let yaricap = prompt("Yarıçapı giriniz");
    let alan = Math.PI * yaricap * yaricap;
    let cevre = 2 * Math.PI * yaricap;
    console.log(`Yarıçap: ${yaricap}\nDairenin alanı: ${alan}\nDairenin çevresi: ${cevre}`);

/*
1. Eğimi hesapla, y = 2x -2
*/

/*
1. Eğim (m = y2-y1/x2-x1). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun 
*/

    let x1 = prompt("x1 değerini giriniz");
    let y1 = prompt("y1 değerini giriniz");
    let x2 = prompt("x2 değerini giriniz");
    let y2 = prompt("y2 değerini giriniz");
    let m = (y2 - y1) / (x2 - x1); 
    console.log(`Eğim: ${m}`);

/*
1. Yukarıdaki iki sorunun eğimini karşılaştırın. 
*/

/*
1. y'nin değerini hesaplayın (y = x^2 + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun. 
*/

/*
1. Kullanıcıdan saat ve saat başına oran girmesini isteyen bir prompt yazın. Kişinin ücretini hesaplayın. 

    ```sh
    Saat: 40
    Saat başına ücret: 28
    Haftalık kazanç: 1120
    ```
*/

    let saat = prompt("Saat giriniz");
    let saatBasinaUcret = prompt("Saat başına ücret giriniz");
    let haftalikKazanc = saat * saatBasinaUcret;
    console.log(`Saat: ${saat}\nSaat başına ücret: ${saatBasinaUcret}\nHaftalık kazanç: ${haftalikKazanc}`);

/*
1. Adınızın uzunluğu 7'den büyükse, adınız uzun, değilse adınız kısa olduğunu yazdırın. 
*/

    let adiniz = prompt("Adınızı giriniz");
    if (adiniz.length > 7) {
        console.log(`Adınız uzun`);
    } else {
        console.log(`Adınız kısa`);
    }

/*
1. Aşağıdaki çıktıyı alacak şekilde adınızın ve soyadınızın uzunluğunu bulup karşılaştırın. 

    ```js
    let firstName = 'Ahmet'
    let lastName = 'Can'
    ```

    ```sh
    Adının (Ahmet) uzunluğu, aile adınızın (can) uzunluğu daha uzun/kısa.
    ```
*/

    let firstName = 'Ahmet';
    let lastName = 'Can';
    if (firstName.length > lastName.length) {
        console.log(`Adınızın (Ahmet) uzunluğu, aile adınızın (can) uzunluğu daha uzun.`);
    } else {
        console.log(`Adınızın (Ahmet) uzunluğu, aile adınızın (can) uzunluğu daha kısa.`);
    }

/*
1. _myAge_ ve _yourAge_ adında iki değişken tanımlayın ve başlangıç değerleri verin. Aşağıdaki çıktıyı üretin.

   ```js
   let myAge = 28
   let yourAge = 26
   ```

   ```sh
   Ben, senden 2 yaş büyüğüm.
   ```
*/

    let myAge = 28;
    let yourAge = 26;
    if (myAge > yourAge) {
        console.log(`Ben, senden ${myAge - yourAge} yaş büyüğüm.`);
    } else {
        console.log(`Sen, benden ${yourAge - myAge} yaş büyüksün.`);
    }

/*
1. prompt kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, 
kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
*/

    let dogumYili = prompt("Doğum yılını giriniz");
    const now = new Date();
    const yil = now.getFullYear();
    if (yil - dogumYili >= 18) {
        console.log(`Araba kullanabilirsin.`);
    } else {
        console.log(`Araba kullanamazsın.`);
    }


/*
1. prompt kullanarak, kullanıcının doğduğu yılı alın ve kullanıcı 18 yaşından küçükse araba sürmek için biraz daha beklemesini söyleyin.

    ```sh

    Doğum yılınızı girin: 1993
    Yaşın 28. Araba kullanmak için yeterince yaşlısın 

    Doğum yılınızı girin: 2005
    Yaşın  17. Araba kullanmak için 1 seneye daha ihtiyacın var.
    ```
*/  

    let dogumYili = prompt("Doğum yılını giriniz");
    const now = new Date();
    const yil = now.getFullYear();
    if (yil - dogumYili >= 18) {
        console.log(`Yaşın ${yil - dogumYili} Araba kullanmak için yeterince yaşlısın.`);
    } else {
        console.log(`Yaşın ${yil - dogumYili} Araba kullanmak için ${18 - (yil - dogumYili)} seneye daha ihtiyacın var.`);
    }

/*
1. Kullanıcıdan yıl sayısını girmesini isteyin. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım. 

   ```sh
   Yaşadığınız yıl sayısını girin: 100
   3153600000 saniyedir yaşıyorsun.
   ```
*/

    let yas = prompt("Yaşadığınız yıl sayısını giriniz");
    const now = new Date();
    const saniye = now.getTime(yas);
    console.log(`${saniye} saniyedir yaşıyorsun.`);

/*
1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun 
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm
*/

    const now = new Date()
    const year = now.getFullYear() 
    const month = now.getMonth() + 1 
    const date = now.getDate() 
    const hours = now.getHours()
    const minutes = now.getMinutes()

    console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
    console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
    console.log(`${date}/${month}/${year} ${hours}:${minutes}`)