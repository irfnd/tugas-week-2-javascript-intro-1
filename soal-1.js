/**
 * * Nama   : Irfandi Iqbal Abimanyu
 * * Kelas  : Fullstack Website Batch 3
 */

const biodata = {
	name: "Irfandi Iqbal Abimanyu",
	age: 21,
	hobbies: ["Membaca", "Coding", "Bermain Game", "Mendengarkan Musik"],
	isMarried: false,
	schoolList: [
		{
			name: "SD Negeri 2 Mojopahit",
			major: null,
			yearIn: 2007,
			yearOut: 2013,
		},
		{
			name: "SMP Negeri 2 Punggur",
			major: null,
			yearIn: 2013,
			yearOut: 2016,
		},
		{
			name: "SMK Negeri 3 Metro",
			major: "Teknik Komputer dan Jaringan",
			yearIn: 2016,
			yearOut: 2019,
		},
		{
			name: "Politeknik Negeri Lampung",
			major: "Manajemen Informatika",
			yearIn: 2019,
			yearOut: null,
		},
	],
	skills: [
		{
			skillName: "HTML, CSS",
			level: "Advanced",
		},
		{
			skillName: "Javascript",
			level: "Beginner",
		},
		{
			skillName: "Python",
			level: "Beginner",
		},
	],
	interestInCoding: true,
};

console.log(biodata);
