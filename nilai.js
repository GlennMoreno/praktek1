//nilai akhir

let nilaiAkhir = prompt("Masukkan Nilai Akhir");
if (nilaiAkhir >= 80 && nilaiAkhir <= 100) {
    document.write(`Nilai Akhir Anda A (${nilaiAkhir})`);
} else if ( nilaiAkhir >= 70 && nilaiAkhir <= 80) {
    document.write(`Nilai Akhir Anda B (${nilaiAkhir})`);
} else if ( nilaiAkhir >= 70 && nilaiAkhir <= 80) {
    document.write(`Nilai Akhir Anda c (${nilaiAkhir})`);
} else {
    document.write("Anda Belum Mengikuti Ujian");
}


//role (admin, operator)

let userRole = prompt ("Login Sebagai: ");
if (userRole == "Admin") {
    document.write("Selamat Datang Admin");
}else if (userRole == "operator") {
    document.write("selamat Datang Operator");
}else{
    document.write("Anda Dilarang Mengakses Halaman Ini");
}