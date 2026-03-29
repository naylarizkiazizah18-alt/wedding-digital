/* AMPL0P & MUSIC */
const buka = document.getElementById("buka");
const music = document.getElementById("music");
const openSound = document.getElementById("openSound");

buka.onclick = () => {
  document.getElementById("amplop").classList.add("buka");
  setTimeout(() => { openSound.play(); }, 200);
  setTimeout(() => {
    document.querySelector(".cover").style.display = "none";
    music.play().catch(()=>{});
  },1500);
}

/* MAPS */
function mapsAkad(){ window.location.href="https://www.google.com/maps/search/?api=1&query=KUA+Harjamukti+Cirebon"; }
function mapsResepsi(){ window.location.href="https://www.google.com/maps/search/?api=1&query=Kampung+Suket+Duwur+Cirebon"; }

/* WA FIX */
function waFix(){
  window.location.href="https://wa.me/6283861359792";
}
/* COPY REKENING - FINAL */
function copyRek(){
  // Buat input offscreen
  let input = document.createElement("input");
  input.value = "412601042931536";  // nomor rekening
  document.body.appendChild(input);

  input.style.position = "absolute";
  input.style.left = "-9999px"; // offscreen tapi tetap bisa select

  input.select();
  input.setSelectionRange(0, 99999); // support iOS

  try {
    let sukses = document.execCommand("copy");
    let notif = document.getElementById("notif");

    if(sukses){
      notif.innerText = "Berhasil disalin";
    } else {
      notif.innerText = "Gagal menyalin";
    }

    // Fade in notif di atas tombol
    notif.style.opacity = "1";
    // Fade out setelah 2 detik
    setTimeout(()=>{
      notif.style.opacity = "0";
    }, 2000);
  } catch(e){
    console.error("Copy gagal", e);
  }

  // Hapus input setelah copy
  document.body.removeChild(input);
}

/* WISHES */
function kirim(){
  let n=document.getElementById("nama").value;
  let p=document.getElementById("pesan").value;
  let h=document.getElementById("hadir").value;

  let div=document.createElement("div");
  div.className="card";
  div.innerHTML=`<b>${n}</b> (${h})<br>${p}`;

  document.getElementById("list").appendChild(div);
}

/* COUNTDOWN */
let target=new Date("April 15, 2026 00:00:00").getTime();

function updateCountdown(){
  let now=new Date().getTime();
  let sisa=target-now;

  document.getElementById("d").innerText = String(Math.floor(sisa/86400000)).padStart(2,"0");
  document.getElementById("h").innerText = String(Math.floor((sisa%86400000)/3600000)).padStart(2,"0");
  document.getElementById("m").innerText = String(Math.floor((sisa%3600000)/60000)).padStart(2,"0");
  document.getElementById("s").innerText = String(Math.floor((sisa%60000)/1000)).padStart(2,"0");
}

updateCountdown();
setInterval(updateCountdown,1000);