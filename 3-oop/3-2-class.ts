{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7;
    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number) : CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shot:number): CoffeeCup {
      if (this.coffeeBeans < shot * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shot * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shot,
        hasMilk: false,
      }
    }
  }
  
  const maker = new CoffeeMaker(32);

  // console.log(maker.makeCoffee(2));
  console.log(maker);
  const maker2 = CoffeeMaker.makeMachine(3); //staic을 이용한 클래스레벨 접근
  console.log(maker2);
}
