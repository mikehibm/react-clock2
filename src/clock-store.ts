import * as EventEmitter from 'eventemitter3';
import * as assign from 'object-assign';


export class ClockStore extends EventEmitter {

    private clocks = [
        {},
        { format: '[JPN: ]MMM DD (ddd) HH:mm:ss', tz: "9" },
        { format: '[HWI: ]MMM DD (ddd) HH:mm:ss', tz: "-10" }
    ];

    constructor() {
        super();
        const clocksStr = localStorage.getItem('clocks');
        const clocks = clocksStr && JSON.parse(clocksStr);
        this.clocks = clocks || this.clocks;
    }

    static create() {
        return singleInstance;
    }

    getState() {
        //Return a new array in stead of reference to the existing array.
        return [...this.clocks];
    }

    addClock(clock) {
        //Assign a new array in stead of mutating the existing array.
        this.clocks = [...this.clocks, clock];
        this.saveAndEmitEchange();
    }

    updateClock(index, clock) {
        this.clocks = this.clocks
            .map((c, i) => i === index ? assign(c, clock) : c);
        this.saveAndEmitEchange();
    }

    removeClock(index) {
        this.clocks = this.clocks
            .filter((c, i) => i !== index);
        this.saveAndEmitEchange();
    }

    saveAndEmitEchange() {
        localStorage.setItem('clocks', JSON.stringify(this.clocks));
        this.emit('change');
    }

}

const singleInstance = new ClockStore();

