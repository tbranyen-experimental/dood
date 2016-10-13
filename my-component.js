const { Component, html } = React;

class MyComponent extends Component {
  render() {
    return html`
      <span>${this.props.label} : ${this.state.counter}</span>
    `;
  }

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    setInterval(() => {
      this.setState({ counter: ++this.state.counter });
    }, 500);
  }
}
