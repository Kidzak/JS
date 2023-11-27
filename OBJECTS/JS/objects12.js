function createUser(name, address, bodyDimensions) {
    let userPrototype = {
      welcome() {
        console.log(`Hello there1 My name is${this.name}, I live at ${this.address}, and I have this height and weight: ${JSON.stringify(this.bodyDimensions)}`);
      },
      dragInfo(otherUser) {
        otherUser.name = this.name;
        otherUser.address = this.address;
        otherUser.bodyDimensions = this.bodyDimensions;
      },
      dotknijTrawy() {
        console.log("Friends: N/A");
      },
    };
  
    return Object.create(userPrototype, {
      name: { value: name },
      address: { value: address },
      bodyDimensions: { value: bodyDimensions }
    });
  }
  
  let usuario1 = createUser('Obi-Wan Kenobi', 'tattoine', { height: '182cm', weight: '77kg' });
  let usuario2 = Object.create(Object.getPrototypeOf(usuario1), Object.getOwnPropertyDescriptors(usuario1));

  usuario1.dragInfo(usuario2);
  usuario1.dotknijTrawy();
  usuario1.welcome();
  usuario2.welcome();
  