import * as React from 'react';
import { ClockStore } from './clock-store';
import { Clock } from './Clock';

export class App extends React.Component<any, any>{

    private clockStore = ClockStore.create();

    constructor(props) {
        super(props);

        const data = this.clockStore.getState();
        this.state = { now: new Date(), data };

        setInterval(() => {
            const now = new Date();
            this.setState({ now });
        }, 120);

        this.clockStore.on('change', () => {
            console.log('Store changed.');
            this.setState({ data: this.clockStore.getState() });
        });
    }

    render() {
        const { now, data } = this.state;
        const clocks = data.map((p, ix) =>
            <Clock key={ix} {...p} now={now}
                onRemove={this.handleRemoveClock.bind(this, ix)} />);

        return (
            <div>
                <h3>Clock Sample</h3>
                <button type="button" onClick={this.handleAddClock.bind(this)}>Add Clock</button>
                {clocks}
            </div>
        );
    }

    handleAddClock() {
        this.clockStore.addClock({ format: '[New clock = ]HH:mm:ss', tz: -10 });
    }

    handleRemoveClock(index) {
        this.clockStore.removeClock(index);
    }
}