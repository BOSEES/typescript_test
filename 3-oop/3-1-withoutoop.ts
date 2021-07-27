{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }
  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shot:number): CoffeeCup {
    if (coffeeBeans < shot * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shot * BEANS_GRAMM_PER_SHOT;

    return {
      shots: shot,
      hasMilk: false,
    }
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  // const coffee = makeCoffee(2);
  // console.log(coffee);
  console.log(makeCoffee(2));
}
