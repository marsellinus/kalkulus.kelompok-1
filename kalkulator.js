function generateSequence() {
    const sukuPertama = parseFloat(document.getElementById('sukuPertama').value);
    const beda = parseFloat(document.getElementById('Beda').value);
    const sukuKeN = parseInt(document.getElementById('SukuKeN').value);
    const choise = document.getElementById('choise').value;

    if (isNaN(sukuPertama) || isNaN(beda) || isNaN(sukuKeN) || sukuKeN <= 0) {
        alert("Please enter valid numbers for all fields. Suku ke-n must be greater than 0.");
        return;
    }

    let result = "";
    if (choise === "baris") {
        result = calculateArithmeticSequence(sukuPertama, beda, sukuKeN);
    } else if (choise === "deret") {
        result = calculateArithmeticSeries(sukuPertama, beda, sukuKeN);
    } else {
        result = "Invalid choice.";
    }

    document.getElementById('sequenceResult').innerText = result;
}

function calculateArithmeticSequence(a, d, n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(a + i * d);
    }
    return `The first ${n} terms of the arithmetic sequence are: ${sequence.join(", ")}`;
}

function calculateArithmeticSeries(a, d, n) {
    let sum = (n / 2) * (2 * a + (n - 1) * d);
    return `The sum of the first ${n} terms of the arithmetic series is: ${sum}`;
}

document.getElementById('menu-toggle').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });
