import React from 'react'
import { Outlet } from 'react-router-dom'
import { DashboardLayout } from '../pages/DashboardLayout/DashboardLayout'

export const Layout = () => {
  return (
    <div>
      <DashboardLayout />
      <Outlet />
    </div>
  )
}
