import React from 'react'
import CreateTournament from '../components/CreateTournanment'
import CreateTeam from '../components/CreateTeam'

const DashboardPage = () => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        < CreateTournament />
        <div className='m-20 p-4'>
          <CreateTeam />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
