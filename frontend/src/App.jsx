import React from 'react'
import Home from './pages/Home'

export default function App(){
  return (
    <div className="min-h-screen">
      <Home />
      <footer className="mt-16 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Budde Narasimha. All rights reserved.
      </footer>
    </div>
  )
}
