/*
1. firstName, lastName, country, city, age, isMarried, year değişkeni bildirin ve buna değer atayın ve farklı veri türlerini 
kontrol etmek için typeof operatörünü kullanın. 
*/
    let firstName = "Ahmet";
    let lastName = "Can";
    let country = "Türkiye";
    let city = "Kayseri";
    let age = 28;
    let isMarried = false; // not yet :)
    let year = 2022;

    console.log(typeof(firstName));
    console.log(typeof(lastName));
    console.log(typeof(country));
    console.log(typeof(city));
    console.log(typeof(age));
    console.log(typeof(isMarried));
    console.log(typeof(year));

/*
2. '10' türünün 10'a eşit olup olmadığını kontrol edin
*/

    let a = 10;
    let b = "10";
    console.log(a == b); // true
    console.log(a === b); // false

/*
3. parseInt('9.8') değerinin 10'a eşit olup olmadığını kontrol edin 
*/

    let c = parseInt("9.8");
    console.log(c == 10); // false
    console.log(c === 10); // false

/*
4. Boolean değeri, doğru veya yanlıştır. 
   1. true değer dönderen üç JS ifadesi yazın.
   2. false değer dönderen üç JS ifadesi yazın.
*/

    let d = true;
    let e = 3 > 2;
    let f = !(3 < 2);
    console.log(d);
    console.log(e);
    console.log(f);

    let g = false;
    let h = 3 < 2;
    let i = !(3 > 2);
    console.log(g);
    console.log(h);
    console.log(i); 

/*
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
*/

    console.log(4 > 3); // true
    console.log(4 >= 3); // true
    console.log(4 < 3); // false
    console.log(4 <= 3); // false
    console.log(4 == 4);   // true
    console.log(4 === 4); // true
    console.log(4 != 4); // false
    console.log(4 !== 4); // false
    console.log(4 != '4'); // false
    console.log( 4 == '4'); // true
    console.log( 4 === '4'); // false
    console.log('python'.length != 'jargon'.length); // false

/*
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
*/

console.log(4 > 3 && 10 < 12); // true && true = true
console.log(4 > 3 && 10 > 12); // true && false = false
console.log(4 > 3 || 10 < 12);  // true || true = true
console.log(4 > 3 || 10 > 12); // true || false = true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log( !(4 === '4')); // true
console.log(!('python'.includes('on') && 'dragon'.includes('on'))); // false

/*
7. Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın 
   1. Yılı bulun.
   2. Ayı bulun.
   3. Bugünün tarihi nedir?
   4. Bugünü sayı olarak değeri nedir?
   5. Şimdi saat kaç?
   6. Şimdi dakika kaç?
   7. 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulunuz. 
*/

    let date = new Date();
    let year = date.getFullYear(); 
    let month = date.getMonth();
    let day = date.getDay();
    let dayNumber = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let millisecond = date.getTime();

    console.log(date); // Thu Feb 17 2022 15:21:02 GMT+0300 (GMT+03:00)
    console.log(year); // 2022
    console.log(month); // 1
    console.log(day); // 4
    console.log(dayNumber); // 17
    console.log(hour); // 15
    console.log(minute); // 21
    console.log(second); // 02
    console.log(millisecond); // 1645100677943
    








