Swal.fire(
  'SELAMAT DATANG!',
  'silahkan bermain sampai capek sendiri :)',
  'success'
)


function proses(){
let tanya = true;
// PILIHAN KALIAN
let pilihan = document.getElementById("pilih").value ;
// PILIHAN KOMPUTER
let kom = Math.random();
// HASIL
let hasil = "";
// SKOR
let skor = 0;
// NGERUBAH WARNA
const manusia = document.querySelector('.orang');
const komputer = document.querySelector('.kom');


if( kom  < 0.35){
    kom ="batu";

}else if(kom >= 0.35 && kom < 0.55){
    kom ="gunting";
}else{
    kom="kertas"
}

//SISTEM
if(pilihan == kom){
    manusia.classList.remove('kalah');
    manusia.classList.remove('menang');
    komputer.classList.remove('kalah');
    komputer.classList.remove('menang');
    manusia.classList.toggle('seri');
    komputer.classList.toggle('seri');
    Swal.fire(
        'PILIHAN ANDA SERI',
        'Pilihan kamu ' + pilihan + ' pilihan komputer ' + kom,
        'question'
      )
}else if(pilihan == "batu"){
    if(kom == "gunting"){
        manusia.classList.remove('seri');
        komputer.classList.remove('seri');
        manusia.classList.toggle('biasa');
        manusia.classList.remove('kalah');
        manusia.classList.remove('menang');
        manusia.classList.toggle('menang');
        komputer.classList.remove('kalah');
        komputer.classList.remove('menang');
        komputer.classList.toggle('biasa');
        komputer.classList.toggle('kalah');
        Swal.fire(
            'KAMU MENANG',
            'Pilihan kamu ' + pilihan + ' pilihan komputer ' + kom,
            'success'
          );
    }else{
        manusia.classList.remove('seri');
        komputer.classList.remove('seri');
        manusia.classList.toggle('biasa');
        manusia.classList.remove('menang');
        manusia.classList.remove('kalah');
        manusia.classList.toggle('kalah');
        komputer.classList.remove('menang');
        komputer.classList.remove('kalah');
        komputer.classList.toggle('biasa');
        komputer.classList.toggle('menang');
        Swal.fire({
            icon: 'error',
            title: 'YAHH KALAH',
            text: 'Pilihan kamu ' + pilihan + ' pilihan komputer ' + kom ,
          })
    }
}
    else if(pilihan == "gunting"){
        if(kom == "kertas"){
            manusia.classList.remove('seri');
        komputer.classList.remove('seri');
            manusia.classList.toggle('biasa');
            manusia.classList.remove('kalah');
            manusia.classList.remove('menang');
            manusia.classList.toggle('menang');
            komputer.classList.remove('kalah');
            komputer.classList.remove('menang');
            komputer.classList.toggle('biasa');
            komputer.classList.toggle('kalah');
            Swal.fire(
                'KAMU MENANG',
                'Pilihan kamu ' + pilihan + ' pilihan komputer ' + kom,
                'success'
              )
        }else{
            manusia.classList.remove('seri');
        komputer.classList.remove('seri');
            manusia.classList.toggle('biasa');
            manusia.classList.remove('menang');
            manusia.classList.remove('kalah');
            manusia.classList.toggle('kalah');
            komputer.classList.remove('menang');
            komputer.classList.remove('kalah');
            komputer.classList.toggle('biasa');
            komputer.classList.toggle('menang');
            Swal.fire({
                icon: 'error',
                title: 'YAHH KALAH',
                text: 'Pilihan kamu ' + pilihan + ' pilihan komputer ' + kom,
              })
        }
    }
        else if(pilihan == "kertas"){
            if(kom == "batu"){
                manusia.classList.remove('seri');
        komputer.classList.remove('seri');
                manusia.classList.toggle('biasa');
                manusia.classList.remove('kalah');
                manusia.classList.remove('menang');
                manusia.classList.toggle('menang');
                komputer.classList.remove('kalah');
                komputer.classList.remove('menang');
                komputer.classList.toggle('biasa');
                komputer.classList.toggle('kalah');
                Swal.fire(
                    'KAMU MENANG',
                    'Pilihan kamu ' + pilihan + ' pilihan komputer ' + kom,
                    'success'
                  )
            }else{
                manusia.classList.remove('seri');
        komputer.classList.remove('seri');
        manusia.classList.toggle('biasa');
        manusia.classList.remove('menang');
        manusia.classList.remove('kalah');
        manusia.classList.toggle('kalah');
        komputer.classList.remove('menang');
        komputer.classList.remove('kalah');
        komputer.classList.toggle('biasa');
        komputer.classList.toggle('menang');
                Swal.fire({
                    icon: 'error',
                    title: 'YAHH KALAH',
                    text: 'Pilihan kamu ' + pilihan + ' pilihan komputer ' + kom,
                  })
            }
        }
}