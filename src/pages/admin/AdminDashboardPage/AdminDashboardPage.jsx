import React from 'react'
import ProtectedRoute from '../../../components/common/admin/ProtectedRoute/ProtectedRoute'

const AdminDashboardPage = () => {
  return (
    <div>AdminDashboardPage
      <ProtectedRoute/>
    </div>
  )
}

export default AdminDashboardPage