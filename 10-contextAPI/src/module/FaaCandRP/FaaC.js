import React, { Component } from "react";

const bold = (string) => {
  return <strong>{string}</strong>;
};

const italic = (string) => {
  return <em>{string}</em>;
};

const Formatter = (props) => {
  return props.children({ bold, italic });
};

export default class FaaC extends Component {
  render() {
    return (
      <>
        <h1>FaaC</h1>
        <p>This text doesn't know about the Formatter function</p>
        <Formatter>
          {({ bold, italic }) => (
            <p>
              This text is {bold("bold")} and {italic("italic")}
            </p>
          )}
        </Formatter>
      </>
    );
  }
}
