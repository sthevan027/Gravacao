import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

function AssetsLiabilitiesChart() {
  const data = [
    { name: 'Jan', ativos: 2200000, passivos: 950000 },
    { name: 'Fev', ativos: 2250000, passivos: 920000 },
    { name: 'Mar', ativos: 2300000, passivos: 900000 },
    { name: 'Abr', ativos: 2350000, passivos: 890000 },
    { name: 'Mai', ativos: 2400000, passivos: 885000 },
    { name: 'Jun', ativos: 2450000, passivos: 890000 }
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          formatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}
        />
        <Legend />
        <Bar dataKey="ativos" fill="#10b981" name="Ativos" radius={[8, 8, 0, 0]} />
        <Bar dataKey="passivos" fill="#ef4444" name="Passivos" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default AssetsLiabilitiesChart

