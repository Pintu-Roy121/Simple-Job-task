import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mo',
        pv: 42,
        amt: 2400,
        amount: 50
    },
    {
        name: 'Tu',
        pv: 11,
        amt: 2210,
        amount: 50
    },
    {
        name: 'We',
        pv: 23,
        amt: 2290,
        amount: 50
    },
    {
        name: 'Te',
        pv: 31,
        amt: 2000,
        amount: 50
    },
    {
        name: 'Fr',
        pv: 41,
        amt: 2181,
        amount: 50
    },
    {
        name: 'Sa',
        pv: 31,
        amt: 2500,
        amount: 50
    },
    {
        name: 'Su',
        pv: 41,
        amt: 2100,
        amount: 50
    },
];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#EB001B', '#ED311B'];


const SampleChart = () => {
    return (
        <ResponsiveContainer width="100%" height="60%" c>
            <BarChart
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="2 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey='amount' unit="$" />
                <Tooltip />
                <Legend />

                <Bar dataKey="pv" fill="#8884d8" >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SampleChart;