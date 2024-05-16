function generateSequence() {
    const sukuPertama = parseFloat(document.getElementById('sukuPertama').value);
    const beda = parseFloat(document.getElementById('Beda').value);
    const sukuKeN = parseFloat(document.getElementById('SukuKeN').value);
    const jenis = document.getElementById('choise').value;
    let hasil;

    if (jenis === 'baris') {
        hasil = sukuPertama + (sukuKeN - 1) * beda;
    } else if (jenis === 'deret') {
        hasil = (sukuPertama + sukuPertama + (sukuKeN - 1) * beda) / 2 * sukuKeN;
    }

    document.getElementById('sequenceResult').innerHTML = `Nilai deret aritmatika adalah: ${hasil}`;
}
