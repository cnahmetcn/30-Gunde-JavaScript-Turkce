// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Bu cümledeki __love__ kelimesini sayın.

    console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length)

// 2. Aşağıdaki cümledeki tüm __çünkü__ sayısını saymak için __match()__ kullanın:__'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'__

    console.log('Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'.match(/çünkü/gi).length)

// 3. Aşağıdaki metni temizleyin ve en sık kullanılan kelimeyi bulun (ipucu, replace ve regex kullanın).

    ```js
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    ```

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    let regEx = /[^\w\s.]/gi
    console.log(sentence.replace(regEx, ''))

/* 
    4. Aşağıdaki metinden sayıları çıkararak kişinin yıllık toplam gelirini hesaplayın. 
'   Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.' 
*/

    const cumle = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.'
    let regEx = /\d+/g
    const maaslar = cumle.match(regEx)
    console.log(maaslar[0] * 12 + maaslar[1] + maaslar[2]*12) // 250000