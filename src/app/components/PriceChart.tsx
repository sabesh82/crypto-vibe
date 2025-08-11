"use client";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartData,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function PriceChart() {
  const [chartData, setChartData] = useState<ChartData<"line"> | null>(null);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
      );
      const data = await res.json();

      setChartData({
        labels: data.prices.map((p: [number, number]) =>
          new Date(p[0]).toLocaleDateString()
        ),
        datasets: [
          {
            label: "BTC Price (USD)",
            data: data.prices.map((p: [number, number]) => p[1]),
            borderColor: "rgba(75,192,192,1)",
            fill: false,
            tension: 0.1,
          },
        ],
      });
    }
    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: 900, height: 450 }}>
      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}
