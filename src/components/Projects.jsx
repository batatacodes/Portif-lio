import React from 'react'

const items = [
  { title: 'Relógio Brasileiro', url: 'https://relogiobrasileiro.netlify.app/', img: '/imagens/relogio.svg' },
  { title: 'Coração Pulsando', url: 'https://coracaopulsando.netlify.app/', img: '/imagens/coracao.svg' },
  { title: 'Reprodutor De Músicas', url: 'https://musica-reprodutor.netlify.app/', img: '/imagens/musica.svg' },
  { title: 'Game Explorer 2', url: 'https://gameexplorer2.netlify.app/', img: '/imagens/game.svg' },
  { title: 'Subway Runners (Mobile)', url: 'https://subway-runners-dev.netlify.app/', img: '/imagens/subway_mobile.svg' },
  { title: 'Subway Runners (PC)', url: 'https://subway-runners-pc.netlify.app/', img: '/imagens/subway_pc.svg' }
]

export default function Projects(){
  return (
    <section className="projects card">
      <h2>Projetos</h2>
      <div className="grid">
        {items.map(it=> (
          <a key={it.title} className="project" href={it.url} target="_blank" rel="noreferrer">
            <img src={it.img} alt={it.title} />
            <div className="proj-name">{it.title}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
