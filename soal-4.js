/**
 * * Nama   : Irfandi Iqbal Abimanyu
 * * Kelas  : Fullstack Website Batch 3
 */

let data = {
	id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
};

console.log(data, "\n");

// * a.
let newData = {
	...data,
	name: "Irfandi Iqbal Abimanyu",
	email: "irfandiabimanyu@gmail.com",
	hobby: ["Membaca", "Coding", "Bermain Game", "Mendengarkan Musik"],
};

console.log(newData, "\n");

// * b.
let {
	address: { street, city },
} = newData;

console.log({ street, city });
