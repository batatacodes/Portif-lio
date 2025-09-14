import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

export default function App(){
  return (
    <div className="site">
      <div className="container">
        <Header />
        <main className="main">
          <About />
          <Projects />
        </main>
      </div>
    </div>
  )
}
