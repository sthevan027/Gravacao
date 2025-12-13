import React from 'react'

function UserActivityTable() {
  const activities = [
    { id: 1, user: 'João Silva', action: 'Login', time: '2 min atrás', status: 'online' },
    { id: 2, user: 'Maria Santos', action: 'Cadastro', time: '15 min atrás', status: 'online' },
    { id: 3, user: 'Pedro Costa', action: 'Atualização de perfil', time: '32 min atrás', status: 'offline' },
    { id: 4, user: 'Ana Oliveira', action: 'Login', time: '45 min atrás', status: 'online' },
    { id: 5, user: 'Carlos Souza', action: 'Logout', time: '1h atrás', status: 'offline' },
    { id: 6, user: 'Julia Ferreira', action: 'Cadastro', time: '1h 20min atrás', status: 'online' }
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Usuário
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ação
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tempo
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {activities.map((activity) => (
            <tr key={activity.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{activity.user}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm text-gray-500">{activity.action}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm text-gray-500">{activity.time}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    activity.status === 'online'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {activity.status === 'online' ? '🟢 Online' : '⚫ Offline'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserActivityTable

