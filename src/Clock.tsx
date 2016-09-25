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
    const { format = 'YYYY/MM/DD HH:mm:ss', tz = 0 } = this.props;
    const { now } = this.state;
    const nowStr = moment(now).utc().add(tz, 'hours').format(format);

    return (
      <div className="clock">{nowStr}</div>
    );
  }
}