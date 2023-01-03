const user = {
  name: "John Doe",
  email: "john@gmail.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: "76",
    }
  }],
  age: "42",
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "99999999"
  }
}

//console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)