import React from "react";

const withCryptoFetch = (WrappedComponent) => {
  const URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&per_page=10";

  return class extends React.Component {
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
        const response = await fetch(URL);
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
      return (
        <WrappedComponent
          isLoading={isLoading}
          items={items}
          loadData={this.loadData}
        />
      );
    }
  };
};

export default withCryptoFetch;
