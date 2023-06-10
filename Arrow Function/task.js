function person() {
    this.name = "John";
    this.age = 30;
  
    const innerFunction = () => {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
    };
  
    innerFunction();
  }
  
  person();