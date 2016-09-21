import * as React from 'react';
import * as moment from 'moment';

export class Clock extends React.Component<any, any> {

  constructor(props) {
    super(props);
    const now = new Date();
    this.state = { now };

    setInterval(() => {
      const now = new Date();
      this.setState({ now });
    }, 300);
  }

  render() {
    const { now } = this.state;
    const nowStr = moment(now).format('YYYY/MM/DD HH:mm:ss');

    return (
      <div className="clock">{nowStr}</div>
    );
  }
}