/*
1. Öğrencilere aldıkları puanlara göre not verebilecek bir kod yazın: 
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
*/

    let puan = prompt("Puanınızı giriniz:");
    switch (true) {
        case (puan >= 90 && puan <= 100):
            console.log("A");
            break;
        case (puan >= 70 && puan <= 89):
            console.log("B");
            break;
        case (puan >= 60 && puan <= 69):
            console.log("C");
            break;
        case (puan >= 50 && puan <= 59):
            console.log("D");
            break;
        case (puan >= 0 && puan <= 49):
            console.log("F");
            break;
        default:
            console.log("Puanınızı kontrol ediniz.");
    }

/*
1. Girilen aya göre mevsimleri kontrol eden kod bloğunu yazın: 
  Kullanıcı girişi:
    - Eylül, Ekim veya Kasım, mevsim Sonbahardır.
    - Aralık, Ocak veya Şubat, mevsim Kış.
    - Mart, Nisan veya Mayıs mevsim bahardır
    - Haziran, Temmuz veya Ağustos, mevsim Yaz 
*/

    let girilenAy = prompt("Ayı giriniz:");
    let ay = girilenAy.toLowerCase()

    if(gun == "aralık" || gun == "ocak" || gun == "şubat")
    {
        console.log("Kış");
    }
    else if(gun == "mart" || gun == "nisan" || gun == "mayıs")
    {
        console.log("İlkbahar");
    }
    else if(gun == "haziran" || gun == "temmuz" || gun == "ağustos")
    {
        console.log("Yaz");
    }
    else if(gun == "eylül" || gun == "ekim" || gun == "kasım")
    {
        console.log("Sonbahar");
    }
    else 
    {
        console.log("Geçersiz giriş");
    }

/*
1. Girilen günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin:
*/

    let girilenGun = prompt("Günü giriniz:");
    let gun = girilenGun.toLowerCase()

    if(gun == "cumartesi" || gun == "pazar")
    {
        console.log(`${gun} Hafta sonudur`);
    }
    else if(gun == "pazartesi" || gun == "salı" || gun == "çarşamba" || gun == "perşembe" || gun == "cuma")
    {
        console.log(`${gun} iş günüdür`);
    }
    else
    {
        console.log("Geçersiz giriş");
    }
