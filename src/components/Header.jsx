import React from 'react'
import Cube3D from './Cube3D'

export default function Header(){
  return (
    <header className="header">
      <div className="left-col">
        <div className="avatar-wrap">
          <img src="/imagens/avatar.svg" alt="avatar" className="avatar-img"/>
        </div>
        <div className="name-block">
          <h1>Isllan <span className="nick">Batata</span></h1>
          <p className="subtitle">Desenvolvedor | Projetos em React e Three.js</p>
        </div>
      </div>
      <div className="right-col">
        <div className="cube-wrap">
          <Cube3D />
        </div>
      </div>
    </header>
  )
}
