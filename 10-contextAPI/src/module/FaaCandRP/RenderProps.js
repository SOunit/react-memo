import React, { Component } from "react";

const PriceTable = ({ isLoading, items, loadData }) => {
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
};

const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&per_page=";

class CryptoPrices extends React.Component {
  state = {
    isLoading: false,
    items: [],
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState(() => ({ isLoading: true }));

    try {
      const response = await fetch(URL + this.props.limit.toString());
      const cryptoData = await response.json();

      this.setState(() => ({
        isLoading: false,
        items: cryptoData,
      }));
    } catch (error) {
      this.setState(() => ({ isLoading: false }));
    }
  };

  render() {
    const { isLoading, items } = this.state;
    const { render } = this.props;

    if (typeof render !== "function") {
      return null;
    }

    return render({
      isLoading,
      items,
      loadData: this.loadData,
    });
  }
}

export default class RenderProps extends Component {
  render() {
    return (
      <>
        <h1>Render Props</h1>
        <CryptoPrices limit={5} render={(props) => <PriceTable {...props} />} />
      </>
    );
  }
}
