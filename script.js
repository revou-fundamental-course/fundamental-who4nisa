function validationForm(){
    let firstName = document.querySelector('#firstname').value;
    let lastName = document.querySelector('#lastname').value;
    let tanggalLahir = document.querySelector('#tanggallahir').value;
    let jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked')?.value;
    let kirimPesan = document.querySelector('#kirimpesan').value;

    console.log(firstName);
    console.log(lastName);
    console.log(tanggalLahir);
    console.log(jenisKelamin);
    console.log(kirimPesan);

    if (firstName && lastName && tanggalLahir){
        document.querySelector('#result').innerHTML = `
            <p>Nama: ${firstName} ${lastName}</p>
            <p>Tanggal Lahir: ${tanggalLahir}</p>
            <p>Jenis Kelamin: ${jenisKelamin}</p>
            <p>Pesan: ${kirimPesan}</p>
        `;
    }else{
        alert('Silahkan lengkapi form')
    }
}

let indexSlide = 0; //[0, 1, 2] 
showSlide(indexSlide);

// Auto slide
setInterval(() => {
    nextSlide(1);
}, 3000); // Change slide every 3 seconds

function nextSlide(n){
    showSlide(indexSlide += n);
    console.log('IndexSlide tambah' + n);
    console.log(indexSlide + ' Ini NextSlide');
}

function showSlide(n){
    let listImage = document.getElementsByClassName('banner-item');
    if (n >= listImage.length) indexSlide = 0;
    if (n < 0) indexSlide = listImage.length - 1;

    console.log(listImage.length + ' ini jumlah gambar');
    console.log(n + ' Ini N di ShowSlide');

    for (let i = 0; i < listImage.length; i++){
        listImage[i].style.display = 'none';
    }

    console.log(indexSlide + ' ini indexSlide di showSlide');
    listImage[indexSlide].style.display = 'block';
}

