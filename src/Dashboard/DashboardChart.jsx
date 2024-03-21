import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './DashboardChart.css'

const DashboardChart = () => {

  const data = [
    { name: 'Page A', uv: 4000 },
    { name: 'Page B', uv: 3000 },
    { name: 'Page C', uv: 2000 },
    { name: 'Page D' },
    { name: 'Page E', uv: 1890 },
    { name: 'Page F', uv: 2390 },
    { name: 'Page G', uv: 3490 },
  ];
return (
    <div className='charts'>
    <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884D8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="uv" fill="#82CA9D" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
        </div>
  )
}

export default DashboardChart