import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

function UserFlowChart() {
  const data = [
    { name: 'Seg', usuarios: 1200, ativos: 320, novos: 18 },
    { name: 'Ter', usuarios: 1215, ativos: 335, novos: 22 },
    { name: 'Qua', usuarios: 1230, ativos: 310, novos: 20 },
    { name: 'Qui', usuarios: 1240, ativos: 345, novos: 25 },
    { name: 'Sex', usuarios: 1245, ativos: 360, novos: 28 },
    { name: 'Sáb', usuarios: 1247, ativos: 340, novos: 23 },
    { name: 'Dom', usuarios: 1247, ativos: 342, novos: 23 }
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px'
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="usuarios"
          stroke="#3b82f6"
          strokeWidth={2}
          name="Total de Usuários"
          dot={{ fill: '#3b82f6', r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="ativos"
          stroke="#10b981"
          strokeWidth={2}
          name="Usuários Ativos"
          dot={{ fill: '#10b981', r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="novos"
          stroke="#f59e0b"
          strokeWidth={2}
          name="Novos Usuários"
          dot={{ fill: '#f59e0b', r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default UserFlowChart

