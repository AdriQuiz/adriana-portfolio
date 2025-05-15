import React from 'react'
import photo1 from "../assets/photo1.png"
import photo2 from "../assets/photo2.png"
import photo3 from "../assets/photo3.png"
import asknicely from "../assets/asknicely.png"

function Projects() {
  return (
    <div id='projects' className='bg-white min-h-[100vh] px-10 py-16 lg:p-40'>
      <h2 className='text-4xl font-bold text-center text-color-6 mb-16'>Mis proyectos</h2>
      <div className='bg-color-6 rounded-lg p-8 lg:p-14 mb-10'>
          <h3 className='text-white text-2xl font-bold text-center mb-3'>Asistente Conversacional implementado con Búsqueda Híbrida <span className='text-blue-400'> Graph RAG</span></h3>
          <h5 className='text-center text-blue-400 font-semibold mb-8'>MongoDB &bull; ExpressJS &bull; ReactJS &bull; NodeJS &bull; Tailwind CSS &bull; Python &bull; Neo4j &bull; LangChain</h5>
          <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
            <li className='text-justify'>
              Proyecto de Grado para el Museo Catedralicio de la Catedral Metropolitana de Santa Cruz, 
              Bolivia, bajo la metodología ICONIX. 
            </li>
            <li className='text-justify'>
              Desarrollé un pipeline para método RAG potenciado con grafos para la mejora de búsquedas. 
            </li>
            <li className='text-justify'>
              Diseñé y prototipé interfaces amigables para interactuar con el asistente. 
            </li>
            <li className='text-justify'>
              Implementación de una API en Python para conectar con el modelo GPT-4o-mini y recibir 
              respuestas en base al contexto de museología y piezas artísticas. 
            </li>
          </ul>
          <div className='flex flex-col items-center space-y-6 mt-8'>
            <img src={photo1} height={400} width={700} className='rounded-lg' alt="" />
            <img src={photo2} height={400} width={700} className='rounded-lg' alt="" />
            <img src={photo3} height={400} width={700} className='rounded-lg' alt="" />
          </div>
      </div>
      <div className='bg-color-6 rounded-lg p-8 lg:p-14'>
          <h3 className='text-white text-2xl font-bold text-center mb-3'>Landing Page para la marca<span className='text-orange-400'>{" "}AskNicely</span></h3>
          <h5 className='text-center text-blue-400 font-semibold mb-8'>ReactJS &bull; Tailwind CSS</h5>
          <ul className="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
            <li className='text-justify'>
              Landing page para una empresa ficticia de servicios de retroalimentación de clientes, llamada AskNicely. 
            </li>
            <li className='text-justify'>
              Desarrollada con ReactJS y Tailwind CSS.
            </li>
            <li className='text-justify'>
              Link demo:{" "} 
              <a href="https://survey-landing-page-iota.vercel.app/" target='_blank' className='text-blue-400 hover:text-blue-700'>
                Survey Landing Page
              </a>
            </li>
          </ul>
          <div className='flex flex-col items-center space-y-6 mt-8'>
            <img src={asknicely} height={400} width={700} className='rounded-lg' alt="" />
          </div>
      </div>
    </div>
  )
}

export default Projects