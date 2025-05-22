import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useTranslation } from "react-i18next";

const mockCategories = [
  "00:00",
  "02:00",
  "04:00",
  "06:00",
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
];
const mockSeries = [
  {
    name: "24K Gold",
    data: [
      62.1, 62.3, 62.5, 62.7, 62.6, 62.8, 63.0, 63.2, 63.1, 63.3, 63.5, 63.7,
    ],
    color: "#ffe066",
  },
  {
    name: "22K Gold",
    data: [
      57.0, 57.2, 57.3, 57.5, 57.4, 57.6, 57.8, 58.0, 57.9, 58.1, 58.3, 58.5,
    ],
    color: "#ffd700",
  },
  {
    name: "21K Gold",
    data: [
      54.0, 54.1, 54.3, 54.5, 54.4, 54.6, 54.8, 55.0, 54.9, 55.1, 55.3, 55.5,
    ],
    color: "#ffb700",
  },
  {
    name: "18K Gold",
    data: [
      46.5, 46.7, 46.8, 47.0, 46.9, 47.1, 47.3, 47.5, 47.4, 47.6, 47.8, 48.0,
    ],
    color: "#ff8c00",
  },
];

const GoldPriceHighChart = () => {
  const { t } = useTranslation();

  const options: Highcharts.Options = {
    chart: {
      type: "area",
      backgroundColor: "background.paper",
      style: { fontFamily: "inherit" },
      borderRadius: 10,
      spacing: [20, 20, 20, 20],
    },
    title: {
      text: t("Gold Price Trend (Last 24 Hours)"),
      style: { color: "#FFD700", fontWeight: "bold", fontSize: "1.3rem" },
    },
    xAxis: {
      categories: mockCategories,
      labels: { style: { color: "#B0B0B0", fontWeight: "500" } },
      title: { text: t("Time (hrs)"), style: { color: "#FFD700" } },
      gridLineColor: "#222",
      lineColor: "#FFD700",
      tickColor: "#FFD700",
    },
    yAxis: {
      title: { text: t("Price (KD)"), style: { color: "#FFD700" } },
      labels: { style: { color: "#B0B0B0" } },
      gridLineColor: "#222",
      min: 45,
      max: 65,
    },
    legend: {
      itemStyle: { color: "#FFD700", fontWeight: "600" },
      itemHoverStyle: { color: "#fff" },
      align: "center",
      verticalAlign: "top",
      layout: "horizontal",
    },
    tooltip: {
      backgroundColor: "#101c2c",
      borderColor: "#FFD700",
      style: { color: "#fff" },
      shared: true,
      valueSuffix: " KD",
    },
    series: mockSeries as Highcharts.SeriesOptionsType[],
    plotOptions: {
      area: {
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 4,
          fillColor: "#fff",
          lineWidth: 2,
        },
        lineWidth: 3,
        fillOpacity: 0.15,
      },
    },
    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default GoldPriceHighChart;
