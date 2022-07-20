import React from 'react'
import iss from '../assets/iss1.png'

const Proyectos = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
        <div className='col-start-1 col-end-3 max-w-sm mt-12 mx-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <a href="http://young-caverns-12464.herokuapp.com">
                <img src={iss} alt="ISS" className='rounded-t-lg' />
            </a>

            <div className='p-5'>
                <a href="http://young-caverns-12464.herokuapp.com">
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Sistema de procesamiento de solicitudes.</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Sistemas hecho en Laravel, JS y Tailwind css. Su principal funcion es procesar las solicitudes de insumos de papeleria en las diferentes areas de la empresa.
                </p>
                <p className='font-semibold text-gray-700'>Admin: <span className='font-normal'>al221910354@gmail.com</span></p>
                <p className='font-semibold text-gray-700'>User: <span className='font-normal'>mr030972@gmail.com</span></p>
                <p className='font-semibold text-gray-700'>Contraseñas: <span className='font-normal'>123456789</span></p>
                <a href="http://young-caverns-12464.herokuapp.com" className="inline-flex mt-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Ver mas
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    </div>
    
  )
}

export default Proyectos