{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean,
    hasSuger: boolean,
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
        hasSuger: false,
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
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("우유 끓이는중");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class AutomaticSugerMixer {
    private getSuger(){
      console.log("설탕 만드는중");
      return true;
    }
    addSuger(cup:CoffeeCup): CoffeeCup {
      const suger = this.getSuger();
      return {
        ...cup,
        hasSuger: suger,
      }
    }
  }
  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string,private milkForther: CheapMilkSteamer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkForther.makeMilk(coffee);
    }
  }
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(beans: number, private suger: AutomaticSugerMixer){
      super(beans);
    }
    makeCoffee(shots: number) : CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.suger.addSuger(coffee);
    }
  }
  class SweetCafeLatteMachine extends CoffeeMachine {
    constructor(private beans: number,private milk: CheapMilkSteamer,private suger: AutomaticSugerMixer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugerAdded = this.suger.addSuger(coffee);
      return this.milk.makeMilk(sugerAdded);
    }
  }
}
