var dog = {
  "name": "Max",
  "legs": 4,
  "domesticated": true,
  "enemies": ["fleas", "Mailman" ]
};

dog["name"] // Max
dog["legs"]// 4
dog["domesticated"] // true
dog["enemies"] // [fleas, Mailman]

const dog = ["Max", 4, true, "fleas", "Mailman"];
for (let i = 0; i < dog.length; i++) {
  console.log(dog)
}
}