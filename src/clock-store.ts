import * as EventEmitter from 'eventemitter3';

export class ClockStore extends EventEmitter {

    private clocks = [
        {},
        { format: 'YYYY-MM-DD HH:mm:ss'},
        { format: '[JPN: ]MMM DD (ddd) HH:mm:ss', tz: "9" },
        { format: '[HWI: ]MMM DD (ddd) HH:mm:ss', tz: "-10" }
    ];

    getState() {
        //Return a new array in stead of reference to the existing array.
        return [...this.clocks];
    }

    addClock(clock) {
        //Assign a new array in stead of mutating the existing array.
        this.clocks = [...this.clocks, clock];
        this.emit('change');
    }

    static create() {
        return singleInstance;
    }
}

const singleInstance = new ClockStore();

