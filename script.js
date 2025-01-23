// Daftar harga barang
const hargaBarang = {
    "Pensil": 2000,
    "Buku Tulis": 5000,
    "Penghapus": 1500,
    "Bolpoin": 3000,
    "Penggaris": 4000
};

// Update harga barang otomatis saat memilih
function updateHarga() {
    let nama = document.getElementById("namaBarang").value;
    document.getElementById("hargaBarang").value = nama ? `Rp ${hargaBarang[nama].toLocaleString()}` : "";
}

// Hitung total harga
function hitung() {
    let nama = document.getElementById("namaBarang").value;
    let jumlah = parseInt(document.getElementById("jumlahBarang").value);

    if (nama === "" || isNaN(jumlah) || jumlah <= 0) {
        alert("Harap isi semua kolom dengan benar!");
        return;
    }

    let totalHarga = hargaBarang[nama] * jumlah;
    document.getElementById("hasil").value = `Total: Rp ${totalHarga.toLocaleString()}`;
}
