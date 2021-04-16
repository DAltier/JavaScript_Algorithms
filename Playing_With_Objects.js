var users = [
    { name: "Michael", age: 37 },
    { name: "John", age: 30 },
    { name: "David", age: 27 }];

for(var element in users){
    console.log(users[element].name + " - " + users[element].age);
}