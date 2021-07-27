{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup; 
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number) : CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("음수의 커피충전은 안됩니다.");
      }
      this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots: number) {
      console.log("커피콩 갈고있음.");
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피콩이 부족합니다.");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preHeat(): void {
      console.log("커피 끓이는중");
    }

    extract(shots: number): CoffeeCup {
      console.log(`커피 ${shots}만큼 내리는중`);
      return {
        shots: shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }
  
  const maker = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(2);
}
