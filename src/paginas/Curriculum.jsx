import React from 'react'

const Curriculum = () => {
  return (
    <div className='mt-20 mx-5'>
        
        <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
            
            <li class="ml-4 mt-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500">Mayo 2021</time>
                <h3 class="text-lg font-semibold text-cyan-500">Laravel 9 + integracion con Tailwind.css y Vue</h3>
                <p class="text-base font-normal text-gray-400">
                    Laravel 8 y 9, Bootstrap 4 Node, Vue, RestAPI, Sanctum Inertia, Livewire, Stripe y mas.
                </p>
            </li>
            <li class="mb-10 ml-4 mt-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white dark:text-gray-400">Enero 2022</time>
                <h3 class="text-lg font-semibold text-cyan-500">JavaScript Moderno</h3>
                <p class="mb-4 text-base font-normal text-gray-400">
                    JavaScript moderno variables, strings y sus metodos, operadores, objetos, arrays, funciones, iteradores, array methods, APIS, POO, etc.
                </p>
            </li>
            <li class="mb-10 ml-4 mt-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-white dark:text-gray-400">Mayo 2022(En curso)</time>
                <h3 class="text-lg font-semibold text-cyan-500">React Hooks</h3>
                <p class="text-base font-normal text-gray-400">
                    React Hooks, Gatsby, GraphQL, Firestore, Redux, Context MERN, Next.js, Styled Components Testing Cypress.
                </p>
            </li>
        </ol>

    </div>
  )
}

export default Curriculum