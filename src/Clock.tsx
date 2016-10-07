import * as React from 'react';
import * as moment from 'moment';

export class Clock extends React.Component<any, any> {

    shouldComponentUpdate(nextProps, nextState) {
        //Update only when seconds change.
        return this.props.now.getSeconds() !== nextProps.now.getSeconds();
    }

    render() {
        const { format = 'YYYY/MM/DD HH:mm:ss', tz = 0, now, onRemove } = this.props;
        const nowStr = moment(now).utc().add(tz, 'hours').format(format);

        return (
            <div className="clock">
                {nowStr} <a href='#' onClick={onRemove}>Remove</a>
            </div>
        );
    }

    handleRemove() {

    }
}