import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  return (
    <div>
    <h1>Dashboard</h1>
    <button>LOGOUT</button>

    </div>
  )
}

