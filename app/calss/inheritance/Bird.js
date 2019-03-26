import Animal from './Animal';

class Bird extends Animal {
    constructor(n, h, color) {
        super(n, h);
        this.color = color;
    }

    hello() {
        return `hi ! this is ${this.name} from birds... and I am ${this.color}`;
    }
}

export default Bird;