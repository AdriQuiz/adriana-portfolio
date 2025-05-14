import React from 'react'

function Projects() {
  return (
    <div id='projects' className='bg-white min-h-[100vh] px-10 py-16 lg:p-40'>
      <h2 className='text-4xl font-bold text-center text-color-6 mb-16'>Mis proyectos</h2>
      <div className='bg-color-6 rounded-lg p-8 lg:p-14'>
          <h3 className='text-white text-2xl font-bold text-center mb-3'>Asistente Conversacional implementado con Búsqueda Híbrida <span className='text-blue-400'> Graph RAG</span></h3>
          <h5 className='text-center text-blue-400 font-semibold mb-8'>MongoDB &bull; ExpressJS &bull; ReactJS &bull; NodeJS &bull; Python &bull; Neo4j &bull; LangChain</h5>
          <ul class="list-disc list-inside marker:text-blue-500 text-white space-y-2 text-left lg:mx-20">
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
      </div>
    </div>
  )
}

export default Projects