// 1. Console.log() kullanarak aşağıdaki ifadeyi yazdırın: 

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    ```

    console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// 2. Console.log()'u kullanarak Rahibe Teresa'nın aşağıdaki alıntısını yazdırın: 

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```

    console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3. typeof ile '10'un tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.

    console.log(typeof('10') == typeof(10))  // false
    console.log(typeof(Number('10')) == typeof(10)) // true

// 4. parseFloat('9.8') un 10 a tam olarak eşit olup olmadığını kontrol edin.

    console.log(parseFloat('9.8') == 10) // false
    console.log(Math.ceil(parseFloat('9.8')) == 10) // true

// 5. Hem 'python' hem de 'jargon' da 'on' ifadesinin bulunup bulunmadığını kontrol edin

    console.log('python'.includes('on')) // true
    console.log('jargon'.includes('on')) // true

// 6. _Umarım bu kurs jargonla dolu değildir_. Cümlede _jargon_ olup olmadığını kontrol edin.

    console.log('Umarım bu kurs jargonla dolu değildir'.includes('jargon')) // true

// 7. 0 ile 100 arasında rastgele bir sayı üretin.

    console.log(Math.floor(Math.random() * 100))

// 8. 50 ile 100 arasında rastgele bir sayı üretin.

    console.log(Math.floor(Math.random() * 50) + 50)

// 9. Dahil olmak üzere 0 ile 255 arasında rastgele bir sayı oluşturun.

    console.log(Math.floor(Math.random() * 256))

// 10. Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.

    console.log('JavaScript'.charAt(Math.floor(Math.random() * 10)))

/*
11. Aşağıdaki kalıbı yazdırmak için console.log() ve kaçış karakterlerini kullanın. 

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```
*/

    console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

// 12. __substr__ kullanarak __çünkü çünkü__ ifadesini aşağıdaki cümleden ayırın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__ 

    console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.substr(37,11))