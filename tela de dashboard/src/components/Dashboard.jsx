import React, { useState, useEffect } from 'react'
import MetricCard from './MetricCard'
import UserFlowChart from './UserFlowChart'
import AssetsLiabilitiesChart from './AssetsLiabilitiesChart'
import UserActivityTable from './UserActivityTable'
import AssetsTable from './AssetsTable'
import LiabilitiesTable from './LiabilitiesTable'

function Dashboard() {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    activeUsers: 0,
    newUsers: 0,
    totalAssets: 0,
    totalLiabilities: 0,
    netWorth: 0
  })

  // Simulação de dados em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        totalUsers: 1247 + Math.floor(Math.random() * 50),
        activeUsers: 342 + Math.floor(Math.random() * 30),
        newUsers: 23 + Math.floor(Math.random() * 10),
        totalAssets: 2450000 + Math.floor(Math.random() * 50000),
        totalLiabilities: 890000 + Math.floor(Math.random() * 20000),
        netWorth: 1560000 + Math.floor(Math.random() * 30000)
      })
    }, 3000)

    // Inicializar com valores
    setMetrics({
      totalUsers: 1247,
      activeUsers: 342,
      newUsers: 23,
      totalAssets: 2450000,
      totalLiabilities: 890000,
      netWorth: 1560000
    })

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard de Controle</h1>
              <p className="mt-1 text-sm text-gray-500">Monitoramento de fluxo de usuários, ativos e passivos</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Última atualização</p>
                <p className="text-sm font-semibold text-gray-900">
                  {new Date().toLocaleTimeString('pt-BR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Total de Usuários"
            value={metrics.totalUsers.toLocaleString('pt-BR')}
            change="+12.5%"
            changeType="positive"
            icon="👥"
            description="Usuários cadastrados no sistema"
          />
          <MetricCard
            title="Usuários Ativos"
            value={metrics.activeUsers.toLocaleString('pt-BR')}
            change="+8.2%"
            changeType="positive"
            icon="🟢"
            description="Usuários online agora"
          />
          <MetricCard
            title="Novos Usuários (Hoje)"
            value={metrics.newUsers.toLocaleString('pt-BR')}
            change="+15.3%"
            changeType="positive"
            icon="✨"
            description="Novos cadastros hoje"
          />
          <MetricCard
            title="Total de Ativos"
            value={`R$ ${(metrics.totalAssets / 1000).toFixed(0)}k`}
            change="+5.1%"
            changeType="positive"
            icon="💰"
            description="Valor total dos ativos"
          />
          <MetricCard
            title="Total de Passivos"
            value={`R$ ${(metrics.totalLiabilities / 1000).toFixed(0)}k`}
            change="-2.3%"
            changeType="negative"
            icon="📊"
            description="Valor total dos passivos"
          />
          <MetricCard
            title="Patrimônio Líquido"
            value={`R$ ${(metrics.netWorth / 1000).toFixed(0)}k`}
            change="+7.8%"
            changeType="positive"
            icon="📈"
            description="Ativos - Passivos"
          />
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Fluxo de Usuários (Últimos 7 dias)</h2>
            <UserFlowChart />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ativos vs Passivos</h2>
            <AssetsLiabilitiesChart />
          </div>
        </div>

        {/* Tabelas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Atividade de Usuários Recentes</h2>
            <UserActivityTable />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resumo Financeiro</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-700 font-medium">Ativos</p>
                <p className="text-2xl font-bold text-green-900">
                  R$ {metrics.totalAssets.toLocaleString('pt-BR')}
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm text-red-700 font-medium">Passivos</p>
                <p className="text-2xl font-bold text-red-900">
                  R$ {metrics.totalLiabilities.toLocaleString('pt-BR')}
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700 font-medium">Patrimônio Líquido</p>
                <p className="text-2xl font-bold text-blue-900">
                  R$ {metrics.netWorth.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabelas de Ativos e Passivos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ativos</h2>
            <AssetsTable />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Passivos</h2>
            <LiabilitiesTable />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

