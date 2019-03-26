class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    hello() {
        return `Hi ! ${this.name} is here....`;
    }
}

export default Animal;