import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Cube3D(){
  const mountRef = useRef(null)

  useEffect(()=>{
    const width = 300
    const height = 300
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(1.6,1.6,1.6)
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.2 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const edges = new THREE.EdgesGeometry(geometry)
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x6b73ff }))
    scene.add(line)

    const dir = new THREE.DirectionalLight(0xffffff, 0.9)
    dir.position.set(5,5,5)
    scene.add(dir)
    const amb = new THREE.AmbientLight(0x404050,0.8)
    scene.add(amb)

    camera.position.z = 3.2

    let frameId
    const animate = ()=>{
      cube.rotation.x += 0.01
      cube.rotation.y += 0.015
      line.rotation.copy(cube.rotation)
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    // handle resize
    const handleResize = ()=>{
      const w = mountRef.current.clientWidth || width
      const h = mountRef.current.clientHeight || height
      renderer.setSize(w,h)
      camera.aspect = w/h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    return ()=>{
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      mountRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  },[])

  return <div ref={mountRef} style={{width:300,height:300}}/>
}
