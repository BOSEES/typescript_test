{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number) : CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("음수의 커피충전은 안됩니다.");
      }
      this.coffeeBeans = coffeeBeans;
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
  
  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(2);
  console.log(maker);
}
