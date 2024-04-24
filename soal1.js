function checkInput(x) {
    if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
        return; 
    }
    if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
        return; 
    }

    let result = Math.sqrt(x);
    console.log("Akar kuadrat dari: " + x + " adalah: " + result);
}

// Contoh pemanggilan fungsi
checkInput(5);
checkInput(-1);
checkInput(32);
