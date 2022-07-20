import React from 'react'
import web from '../assets/web.png'

const Principal = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
        <div className='col-start-1 col-end-3 text-center md:mt-40'>
            <h1 
                className='text-6xl underline decoration-cyan-300 mx-10 font-mono font-bold text-cyan-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 text-start'
            >
                Sobre mi!
            </h1>
            <p className='text-justify mt-5 text-white mx-10'> 
                Estudiante de noveno cuatrimestre de <span className='underline decoration-pink-500 font-bold'>Ingenieria en Desarrollo y 
                Gestion de Software</span> en la Universidad Tecnologica del Valle de Toluca.
            </p>
            <p className='text-justify mt-5 text-white mx-10'>
                Soy un Desarrollador Web con conocimientos intermedios en tecnologias front-end y back-end
                como ReactJS, NodeJS, MySQL, Laravel entre otros. Cuento con las habilidades suficientes para
                construir una aplicacion o sitio web que sea funcional y facil de usar.
            </p>
        </div>
        <div className='col-span-2 mt-40 flex justify-center'>
            <img src={web} alt="web" style={{width: '500px', height: '400px'}} />
        </div>
    </div>
  )
}

export default Principal