import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const Lines = () => {

  // Sample data
  const data = [
    { x: 1, y: 0, z: 122 },
    { x: 2, y: 12, z: 73 },
    { x: 3, y: 41, z: 32 },
    { x: 4, y: 35, z: 23 },
    { x: 5, y: 45, z: 20 },
    { x: 6, y: 25, z: 29 },
  ];


  return (
    <LineChart width={930} height={450} data={data}>
      <CartesianGrid stroke='#232431' />
      <XAxis dataKey="x" stroke='#D98AFF' />
      <YAxis yAxisId="left-axis" stroke='#D98AFF' />
      <YAxis yAxisId="right-axis" orientation="right" stroke='#D98AFF' />
      <Line yAxisId="left-axis" type="dashed" dataKey="y"
        stroke="#D98AFF" strokeWidth={4} dot={{ stroke: 'white', strokeWidth: 2 }} />
    </LineChart>
  );
}

export default Lines;
