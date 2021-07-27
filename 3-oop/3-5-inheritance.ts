import { throws } from "assert";

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

    constructor(coffeeBeans: number) {
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

    private preHeat(): void {
      console.log("커피 끓이는중");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`커피 ${shots}만큼 내리는중`);
      return {
        shots: shots,
        hasMilk: false,
      }
    }

    clean(): void {
      console.log("청소중");
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("우유 끓이는중");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk()
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CafeLatteMachine(23,"adawda");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
