import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class Container extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {visible: true};
  }
  delHeader = () => {
    this.setState({visible: false});
  }
  render() {
    let test;
    if (this.state) {
      test = <Child />;
    };
    return (
      <div>
      {test}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("This text will disapper");
  }
  render() {
    return (
      <h1>This is a test text</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));