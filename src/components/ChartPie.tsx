import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const ChartPie = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 15, label: "Pendiente", color: "#c19737" },
            { id: 1, value: 20, label: "Usado", color: "#43a86f" },
            { id: 2, value: 10, label: "Expirado", color: "#f44336" },
          ],
        },
      ]}
      width={200}
      height={200}
      margin={{ top: -60, bottom: 25 }}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "middle" },
          padding: 10,
        },
      }}
    />
  );
};

export default ChartPie;
