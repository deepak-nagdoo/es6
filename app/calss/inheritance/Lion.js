import Animal from './Animal';

class Lion extends Animal {

    hello() {
        return `hi! this is ${this.name} from lions...`;
    }
}

export default Lion;