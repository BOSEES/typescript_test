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

    constructor(coffeeBeans: number, private milk: MilkFrother, private suger:SugerProvider) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugerAdded = this.suger.addSuger(coffee);
      return this.extract(sugerAdded);
    }
  }
  interface MilkFrother {
    makeMilk(cup: CoffeeCup) : CoffeeCup;
  }
  interface SugerProvider {
    addSuger(cup: CoffeeCup) : CoffeeCup;
  }
  //우유 거품기
  class CheapMilkSteamer implements MilkFrother {
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
  class FancyMilkSteamer implements MilkFrother {
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
  class ColdMilkSteamer implements MilkFrother {
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
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
      }
    }
  }
  //설탕 제조기
  class AutomaticSugerMixer implements SugerProvider {
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
  class SugerMixer implements SugerProvider {
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
  class NoSuger implements SugerProvider {
    addSuger(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
      }
    }
  }

  //우유
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  //설탕
  const candySuger = new AutomaticSugerMixer();
  const suger = new SugerMixer();
  const noSuger = new NoSuger();

  //머신
  const candySugerMachine = new CoffeeMachine(12,noMilk,candySuger);
  const sugerMachine = new CoffeeMachine(12, noMilk,suger);

  const latteMachine = new CoffeeMachine(12,cheapMilkMaker, noSuger);
  const sweetLatteMachins = new CoffeeMachine(12, cheapMilkMaker, noSuger);
}
