import React from 'react'

function LiabilitiesTable() {
  const liabilities = [
    { id: 1, name: 'Empréstimos Bancários', value: 450000, category: 'Financeiro' },
    { id: 2, name: 'Fornecedores', value: 180000, category: 'Comercial' },
    { id: 3, name: 'Impostos a Pagar', value: 120000, category: 'Fiscal' },
    { id: 4, name: 'Salários a Pagar', value: 140000, category: 'RH' }
  ]

  const total = liabilities.reduce((sum, liability) => sum + liability.value, 0)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Passivo
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
          {liabilities.map((liability) => (
            <tr key={liability.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{liability.name}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                  {liability.category}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-right">
                <div className="text-sm font-semibold text-gray-900">
                  R$ {liability.value.toLocaleString('pt-BR')}
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-red-50 font-bold">
            <td colSpan="2" className="px-4 py-3 text-sm text-gray-900">
              Total
            </td>
            <td className="px-4 py-3 text-right text-sm text-red-900">
              R$ {total.toLocaleString('pt-BR')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default LiabilitiesTable

