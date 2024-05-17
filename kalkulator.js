function generateSequence() {
    const sukuPertama = parseFloat(document.getElementById('sukuPertama').value);
    const beda = parseFloat(document.getElementById('Beda').value);
    const sukuKeN = parseFloat(document.getElementById('SukuKeN').value);
    const jenis = document.getElementById('choise').value;
    let hasil;

    if (jenis === 'baris') {
        hasil = sukuPertama + (sukuKeN - 1) * beda;
        result = "Hasil dari baris ke-" + sukuKeN + ' adalah ' + hasil;
    } else if (jenis === 'deret') {
        jumlahDeret = (sukuPertama + sukuPertama + (sukuKeN - 1) * beda) / 2 * sukuKeN;
        result = "jumlah deret dari " + sukuPertama + "ke-"+  sukuKeN + " adalah" + jumlahDeret;
    }

    document.getElementById('sequenceResult').innerHTML = result;
}
