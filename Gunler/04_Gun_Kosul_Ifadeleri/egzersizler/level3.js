/*
1. Hangi ayda kaç gün olduğunu bulan kodu yazın:
*/

    let girilenAy = prompt("Ayı giriniz:");
    let ay = girilenAy.toLowerCase();
    if(ay == "ocak",ay == "mart",ay == "mayıs",ay == "temmuz",ay == "ağustos",ay == "ekim",ay == "aralık"){
        alert("Bu ay 31 gün var");
    }
    else if(ay == "nisan", ay == "haziran",ay == "eylül",ay == "kasım"){
        alert("Bu ay 30 gün var");
    }
    else if(ay == "şubat"){
        alert("Bu ay 28 gün var");
    }
    else{
        alert("Geçersiz ay girdiniz");
    }
    

/*
1. Artık yılı da hesaba katarak hangi ayda kaç gün olduğunu bulan kodu yazın:
*/