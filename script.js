function validationForm(){
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;

    console.log(firstName);
    console.log(lastName);

    if (firstName != '' && lastName != ''){
        alert('Sukses Kirim');
    }else{
        alert('Inputan ada yang kosong')
    }

}