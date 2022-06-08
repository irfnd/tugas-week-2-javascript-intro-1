/**
 * * Nama   : Irfandi Iqbal Abimanyu
 * * Kelas  : Fullstack Website Batch 3
 */

const averageUn = (nilai) => {
	let error = false;
	let errorMsg = [];

	// Melakukan validasi nilai
	if (!nilai || typeof nilai !== "object") {
		errorMsg.push("Parameter yang dimasukkan harus object dan wajib diisi!");
		error = true;
	} else {
		const keys = Object.keys(nilai);
		keys.map((el) => {
			if (!nilai[el] || typeof nilai[el] !== "number") {
				errorMsg.push(`Nilai ${el} harus number dan wajib diisi!`);
				error = true;
			}
		});
	}

	if (!error) {
		let arrNilai = Object.values(nilai);
		let rataRata =
			arrNilai.reduce((prev, curr) => prev + curr, 0) / arrNilai.length;
		let grade = "";

		// Validasi grade
		if (rataRata >= 90) {
			grade = "A";
		} else if (rataRata >= 80) {
			grade = "B";
		} else if (rataRata >= 70) {
			grade = "C";
		} else if (rataRata >= 60) {
			grade = "D";
		} else {
			grade = "E";
		}

		// Menampilkan output
		console.log(nilai);
		console.log(`\nRata-rata = ${rataRata}`);
		console.log(`Grade = ${grade}`);
	} else {
		console.log(errorMsg.join("\n"));
	}
};

averageUn({ mtk: 80, bahasaIndonesia: 90, bahasaInggris: 89, ipa: 69 });
