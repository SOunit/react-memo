import React, { Component } from "react";

const withFormatting = (WrappedComponent) => {
  return class extends Component {
    wrapperStyle = () => {
      return { backgroundColor: "yellow" };
    };

    bold = (string) => {
      return <strong>{string}</strong>;
    };

    italic = (string) => {
      return <em>{string}</em>;
    };

    render() {
      return (
        <WrappedComponent
          wrapperStyle={this.wrapperStyle}
          bold={this.bold}
          italic={this.italic}
        />
      );
    }
  };
};

class InnerComponent extends Component {
  render() {
    return (
      <div style={this.props.wrapperStyle()}>
        <h1>HOC</h1>
        <p>
          This is {this.props.bold("bold")} and {this.props.italic("italic")}
        </p>
      </div>
    );
  }
}

export default withFormatting(InnerComponent);
