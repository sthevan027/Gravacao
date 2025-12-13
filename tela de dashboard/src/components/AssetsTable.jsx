import React from 'react'

function AssetsTable() {
  const assets = [
    { id: 1, name: 'Equipamentos de TI', value: 450000, category: 'Tecnologia' },
    { id: 2, name: 'Mobiliário', value: 320000, category: 'Infraestrutura' },
    { id: 3, name: 'Veículos', value: 280000, category: 'Transporte' },
    { id: 4, name: 'Imóveis', value: 1200000, category: 'Propriedade' },
    { id: 5, name: 'Investimentos', value: 200000, category: 'Financeiro' }
  ]

  const total = assets.reduce((sum, asset) => sum + asset.value, 0)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ativo
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categoria
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Valor
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assets.map((asset) => (
            <tr key={asset.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{asset.name}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {asset.category}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-right">
                <div className="text-sm font-semibold text-gray-900">
                  R$ {asset.value.toLocaleString('pt-BR')}
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-green-50 font-bold">
            <td colSpan="2" className="px-4 py-3 text-sm text-gray-900">
              Total
            </td>
            <td className="px-4 py-3 text-right text-sm text-green-900">
              R$ {total.toLocaleString('pt-BR')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AssetsTable

