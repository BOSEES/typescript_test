{
  // Javascript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript
  // function add(num1: number,num2: number): number {
  //   return num1 + num2;
  // }

  // // JavasScript
  // function jsFetchNum(id) {
  //   // code..
  //   // code..
  //   // code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript
  // function FetchNum(id: string): Promise<number> {
  //   // code..
  //   // code..
  //   // code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //Javascript =>  TypeScript
  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("kim")

  //Default Prameter
  function printMessage(message: string = "default Message") {
    console.log(message);
  }
  printMessage();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5,6));

}