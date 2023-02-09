import Chance from 'chance';
const chance = Chance();

export const user = () => {
  //  console.log(chance.name());
    return chance.name();
} 