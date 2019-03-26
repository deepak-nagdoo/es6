const Wizard = function(name) {
    this.name = name;

    this.say = () => {
        return `${this.name} is my name from prot...`;
    }
}

export default function Wizz(say) {
    this.say = say;

    this.talk = function() {
        return `${this.say} is Wizz`;
    }
}

export { Wizard }