import React, { Component } from "react";
import withCryptoFetch from "./hoc/withCryptoFetch";

class PriceCSV extends Component {
  render() {
    const { isLoading, items, loadData } = this.props;

    if (isLoading) {
      return <p>Loading....</p>;
    }

    if (!items || items.length === 0) {
      return (
        <p>
          No data available. <button onClick={loadData}>Try again</button>
        </p>
      );
    }

    return (
      <>
        <h1>Price CSV</h1>
        <pre>
          {items.map(
            ({ name, symbol, current_price }) =>
              `${name};${symbol};${current_price}\n`
          )}
        </pre>
      </>
    );
  }
}

export default withCryptoFetch(PriceCSV);
