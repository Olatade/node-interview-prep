function Split(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("splitting");
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      let [firstArg] = args;
      // modify the value passed into the function
      firstArg = firstArg.split("");
      originalMethod.call(this, firstArg);
    };
  }
  
  function Reverse(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("reversing");
  
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      const [firstArg] = args;
      const reversedString = firstArg.reverse();
      originalMethod.call(this, reversedString);
    };
  }
  
  function Join(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("joining");
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      const [firstArg] = args;
      const reversedString = firstArg.join("");
      originalMethod.call(this, reversedString);
    };
  }
  
  class StringManager {
    @Split
    @Reverse
    @Join
    print(string: string) {
      console.log(string);
    }
  }
  
  const stringManager = new StringManager();
  const output = stringManager.print("HELLO");
  
  const numbers = [5, 6, 2, 3, 7];
  
  const maxNumber = Math.max.apply(null, numbers);
  