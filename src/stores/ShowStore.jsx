import axios from "axios";
import { create } from "zustand";

const ShowStore = create((set) => ({
  graphData: [],
  data: null,

  // fetch coin's market chart (365 days) and coins data
  fetchData: async (id) => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false,market_data=true`
      ),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      const [timeStamp, p] = price;
      const date = new Date(timeStamp).toLocaleDateString("en-id");
      return {
        Date: date,
        Price: p,
      };
    });

    console.log(dataRes.data);

    set({ graphData, data: dataRes.data });
  },
}));

export default ShowStore;
