const user = {
	name: "John Doe",
	email: "doejohn@email.com",
	friends: [{
		name: "Mary",
		address: {
			street: "Some Street",
			number: 89
		}
	}],
	age: 42,
	phone: {
		countryCode: "+55",
		ddd: "22",
		number: "998765432"
	}
}

// Ele faz o encadeamento se existir a propriedade, caso não exista, ele para
console.log(user?.friends[0]?.phone?.ddd)
console.log(user.brothers?.[5].name)
