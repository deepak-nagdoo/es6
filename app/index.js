import Lion from './calss/inheritance/Lion';
import Bird from './calss/inheritance/Bird';
import Calculate from './calss/static/Calculate';
import Wizz, { Wizard } from './calss/prototypes/Wizard'; // without {} is dafault, with {} is name module
const lion = new Lion('Musk', 6);
console.log(lion.hello()); // inheriting Animal class and over-riding same method

const bird = new Bird('Chat', 3, 'blue');
console.log(bird.hello()); // inheriting Animal class and updating the constructor

console.log(Calculate.add(2, 5)); // direct refrence to static function

const protWiz = new Wizz('Hot'); // a prototype looks like a function that has its own variables and function.
//Wizz imported as default from the parent.
console.log(protWiz.talk());

const protWizzard = new Wizard('Harry'); // a prototype imported as name variable from a module.
console.log(protWizzard);
Wizard.prototype.new_name; // change the prototype declaration without touching the parent file(i.e. original module).
protWizzard.new_name = 'Updated-Name';
console.log(protWizzard);