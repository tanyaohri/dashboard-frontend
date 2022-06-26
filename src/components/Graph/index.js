import React from "react";
import { 
    Tooltip,
    CartesianGrid, 
    Legend, Line, 
    LineChart, ResponsiveContainer, 
    Area,
    AreaChart,
    XAxis, YAxis 
} from "recharts";


export default function GraphicalView({
    data,
    xKey,
    yKey,
    extraKey,
}) {
  return (
    <AreaChart
      width={850}
      height={400}
      data={data}
      margin={{
        top: 30,
        right: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeLinecap="3 3" vertical={(props) => null}/>
      <XAxis 
         strokeWidth={0} 
         dataKey={xKey}         
         label={{fill:"#9FA2B4"}}
         style={{

          fontFamily: 'Mulish',
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "13px",
          color: "#9FA2B4"
        }}
      />
      <YAxis
        tickCount={6.5}
        label={{fill:"#9FA2B4"}}
        style={{
          fontFamily: 'Mulish',
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "13px",
          color: "#9FA2B4"
        }}
        strokeWidth={0} orientation="right" axisLine={false}
      />
      <Tooltip />
      <Area type="monotone" dataKey={yKey} stroke="#3751FF" fillOpacity={0.07} fill="#3751FF"/>
      <Area type="monotone" dataKey={extraKey} stroke="#DFE0EB" strokeWidth={1.5} fill="none" />
    </AreaChart>
  );
}
