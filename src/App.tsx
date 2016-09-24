import * as React from 'react';
import { Clock } from './Clock';

export class App extends React.Component<any, any>{
  render(){
    return (
      <div>
        <h3>Clock Sample</h3>
        <Clock />
      </div>
    );
  }
}