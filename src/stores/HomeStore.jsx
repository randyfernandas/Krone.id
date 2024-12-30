import axios from "axios";
import { create } from "zustand";
import debounce from "../helpers/debounce";

const HomeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",
  searching: false,
  searched: false,

  //prepare search queries
  setQuery: (e) => {
    set({ query: e.target.value });
    HomeStore.getState().searchCoins();
  },

  //debounce function for when searching, wait for 500ms before showing the coin's search result
  searchCoins: debounce(async () => {
    set({ search: true });
    const { query, trending } = HomeStore.getState();

    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
        };
      });

      set({ coins, searching: false, searched: true });
    } else {
      set({ coins, searching: false, searched: false });
    }
  }, 500),

  //otherwise, show the default ui of trending coins in page
  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/search/trending`),
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
      ),
    ]);

    const btcPrice = btcRes.data.bitcoin.usd;
    console.log(btcPrice);

    const coins = res.data.coins.map((coin) => {
      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc.toFixed(10),
        priceUsd: (coin.item.price_btc * btcPrice).toFixed(10),
      };
    });

    set({ coins, trending: coins });
    console.log(coins);
  },
}));

export default HomeStore;
