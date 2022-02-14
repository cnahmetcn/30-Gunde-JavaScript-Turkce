// 1. Challenge adında bir değişken tanımlayın ve bunu **'30 Günde JavaScript'** başlangıç ​​değerine atayın.

    let challenge = '30 Günde JavaScript';

// 2. __console.log()__ kullanarak tarayıcı konsolunda dizeyi yazdırın

    console.log(challenge);

// 3. _console.log()_ kullanarak tarayıcı konsolunda dizenin __length__ değerini yazdırın

    console.log(challenge.length);

// 4. __toUpperCase()__ yöntemini kullanarak tüm dize karakterlerini büyük harflerle değiştirin

    console.log(challenge.toUpperCase());

// 5. __toLowerCase()__ yöntemini kullanarak tüm dize karakterlerini küçük harflerle değiştirin

    console.log(challenge.toLowerCase());

// 6. __substr()__ veya __substring()__ yöntemini kullanarak dizenin ilk kelimesini kesin (dilimleyin)

    console.log(challenge.substr(0,2));
    console.log(challenge.substring(0,2));

// 7. *30 Günde JavaScript*'ten *Günde JavaScript* ifadesini kesin.

    console.log(challenge.substr(3,challenge.length - 1))
    console.log(challenge.substring(3,challenge.length - 1))

// 8. __includes()__ yöntemini kullanarak dizenin __Script__ kelimesini içerip içermediğini kontrol edin

    console.log(challenge.includes('Script'));

// 9. __split()__ yöntemini kullanarak __string__ öğesini bir __array__'ye bölün

    console.log('string'.split(''));

// 10. 30 Günde JavaScript dizesini __split()__ yöntemini kullanarak boşluk ile bölün

    console.log(challenge.split(' '));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' metnini __split()__ kullanarak virgül ile bölün ve array ile değiştirin

    console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

// 12. __replace()__ yöntemini kullanarak 30 Günde JavaScript'i 30 Günde Python olarak değiştirin.

    console.log(challenge.replace('JavaScript', 'Python'));

// 13. '30 Günde JavaScript' dizisinde 15. indexteki karakter nedir? __charAt()__ yöntemini kullanın.

    console.log(challenge.charAt(15));

// 14. __charCodeAt()__ ile '30 Günde JavaScript' dizisindeki J karakterin kodu nedir?

    console.log(challenge.charCodeAt(9));

// 15. 30 Günde JavaScript'te __a__ öğesinin ilk geçtiği yerin konumunu belirlemek için __indexOf__ kullanın

    console.log(challenge.indexOf('a'));

// 16. 30 Günde JavaScript'te __a__ öğesinin son geçtiği yerin konumunu belirlemek için __lastIndexOf__ kullanın

    console.log(challenge.lastIndexOf('a'));

// 17. Aşağıdaki cümlede __çünkü__ kelimesinin ilk geçtiği yeri bulmak için __indexOf__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__

    console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.indexOf('çünkü'));

// 18. Aşağıdaki cümlede __çünkü__ kelimesinin son geçtiği yeri bulmak için __lastIndexOf__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__

    console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.lastIndexOf('çünkü'));

// 19. Aşağıdaki cümlede __çünkü__ kelimesinin ilk geçtiği yeri bulmak için __search__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__

    console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.search('çünkü'));

// 20. Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için __trim()__ kullanın.Örneğin '30 Günde JavaScript'.

    console.log('  30 Günde JavaScript  '.trim());

// 21. *30 Günde JavaScript* stringi ile __startsWith()__ yöntemini kullanın ve sonucu doğru yapın

    console.log(challenge.startsWith('30'));

// 22. *30 Günde JavaScript* stringi ile __endsWith()__ yöntemini kullanın ve sonucu doğru yapın

    console.log(challenge.endsWith('JavaScript'));

// 23. 30 Günde JavaScript'teki tüm __a__'lari bulmak için __match()__ yöntemini kullanın

    console.log(challenge.match(/a/g));

// 24. __concat()__ kullanın ve '30 Günde' ve 'JavaScript'i tek bir '30 Günde JavaScript' dizesinde birleştirin

    console.log('30 Günde'.concat(' JavaScript'));

// 25. 30 Günde JavaScript'i 2 kez yazdırmak için __repeat()__ yöntemini kullanın 

    console.log('JavaScript'.repeat(2));