import React, { Component } from "react";
import withCryptoFetch from "./hoc/withCryptoFetch";

class CryptoTable extends Component {
  render() {
    const { isLoading, items, loadData } = this.props;

    if (isLoading) {
      return <p>Loading....</p>;
    }

    return (
      <>
        <h1>Crypto Table</h1>
        <table>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.name} ({item.symbol})
                </td>
                <td>CAD {item.current_price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">
                <button onClick={loadData}>Reload</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}

export default withCryptoFetch(CryptoTable);
