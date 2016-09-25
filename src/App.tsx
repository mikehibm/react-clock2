import * as React from 'react';
import { Clock } from './Clock';

export class App extends React.Component<any, any>{
  render() {
    const { data } = this.props;
    const clocks = data.map((p, ix) => <Clock key={ix} {...p} />);

    return (
      <div>
        <h3>Clock Sample</h3>
        { clocks }
      </div>
    );
  }
}