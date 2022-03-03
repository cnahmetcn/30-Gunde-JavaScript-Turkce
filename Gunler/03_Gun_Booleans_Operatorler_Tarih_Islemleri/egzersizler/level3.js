/*
1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır) 
   1. YYY-MM-DD HH:mm eg. 2022-02-17 15:00
*/

    const now = new Date()
    const year = now.getFullYear() 
    const month = now.getMonth() + 1 
    const date = now.getDate() 
    const hours = now.getHours()
    const minutes = now.getMinutes()

    console.log(`${year}-${month}-${date} ${hours}:${minutes}`)