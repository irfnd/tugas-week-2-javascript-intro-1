/**
 * * Nama   : Irfandi Iqbal Abimanyu
 * * Kelas  : Fullstack Website Batch 3
 */

const printSegitiga = (jumlah) => {
	let error = false;
	let errorMsg = [];

	// Melakukan validasi
	if (!jumlah || typeof jumlah !== "number") {
		errorMsg.push("Data harus number dan wajib diisi!");
		error = true;
	}

	if (!error) {
		let segitiga = "";
		for (let i = 0; i < jumlah; i++) {
			for (let j = 0; j < jumlah - i; j++) {
				segitiga += `${j + 1} `;
			}
			segitiga += "\n";
		}
		console.log(segitiga);
	} else {
		console.log(errorMsg.join("\n"));
	}
};

printSegitiga(5);
