console.log("Hello world!");
function replaceName(){
    let nameUser = prompt("Siapa Nama Anda?","");
    document.getElementById("namaPengguna").innerHTML = nameUser
    // console.log("Test")
}
replaceName();

const namaUser = document.getElementById("inputname");
const tglLahir = document.getElementById("dateofbirth");
const pesanUser = document.getElementById("messages");
const form = document.getElementById("forminput");
const today = new Date();
const time = today.getTimezoneOffset();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    document.getElementById("currentDate").innerHTML = day+" - ";
    document.getElementById("currentMonth").innerHTML = month+" - ";
    document.getElementById("currentYear").innerHTML = year;
    document.getElementById("namaUser").innerHTML = namaUser.value;
    document.getElementById("tglUser").innerHTML = tglLahir.value;
    document.getElementById("pesanUser").innerHTML = pesanUser.value;

    var gender = document.getElementsByName("gender");
    
    for (let i = 0; i <= gender.length; i++) {
        if(gender[i].checked){
            document.getElementById("jKelamin").innerHTML = gender[i].value;
        }
        
    }
})