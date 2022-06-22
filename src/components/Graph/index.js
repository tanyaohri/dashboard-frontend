import React from "react";
import { 
    Tooltip,
    CartesianGrid, 
    Legend, Line, 
    LineChart, ResponsiveContainer, 
    XAxis, YAxis 
} from "recharts";


export default function GraphicalView({
    data,
    xKey,
    yKey
}) {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={yKey} stroke="#82ca9d" />
    </LineChart>
  );
}
