import React from 'react'

function MetricCard({ title, value, change, changeType, icon, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <span
          className={`text-sm font-semibold px-2 py-1 rounded ${
            changeType === 'positive'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {change}
        </span>
      </div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  )
}

export default MetricCard

