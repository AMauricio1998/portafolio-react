import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import js from '../assets/icons8-javascript.gif';
import react from '../assets/icons8-reaccionar-nativo-48.png';
import node from '../assets/icons8-node-js-48.png';
import sql from '../assets/icons8-logo-de-mysql-48.png';
import tailwind from '../assets/icons8-tailwindcss-48.png';
import laravel from '../assets/icons8-laravel-50.png';

const Habilidades = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
        <div className='col-start-1 col-end-5 mx-5 mt-8 flex justify-between'>
            <img src={react} alt=""/>
            <img src={sql} alt=""/>
            <img src={laravel} alt=""/>
            <img src={tailwind} alt=""/>
            <img src={js} alt="" style={{ height: '48px', }}/>
            <img src={node} alt=""/>
        </div>
        <div className='col-start-1 col-span-2 md:mt-16'>
            <h4 className='font-bold font-mono text-center text-cyan-300 text-3xl'>Front-End</h4>

            <div className='mx-5 mt-5 px-2 py-2 rounded-lg border-2 border-gray-500'>
                <div className='w-full my-2 text-white font-bold font-mono text-center'>Tecnologias de desarrollo front-end</div>
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-orange-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '80%'}}>
                        <span className='font-bold'>HTML</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '50%'}}>
                        <span className='font-bold'>CSS</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-blue-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '60%'}}>
                        <span className='font-bold'>Tailwind</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-indigo-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '65%'}}>
                        <span className='font-bold'>Bootstrap</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-yellow-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '75%'}}>
                        <span className='font-bold'>JavaScript</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-cyan-300 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '50%'}}>
                        <span className='font-bold'>ReactJS</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-gray-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '40%'}}>
                        <span className='font-bold'>JQuery</span>
                    </div>
                </div>
            </div>

        </div>
        <div className='col-start-3 col-span-2 md:mt-16'>
            <h4 className='font-bold font-mono text-center text-cyan-300 text-3xl'>Back-End</h4>

            <div className='mx-5 mt-5 px-2 py-2 rounded-lg border-2 border-gray-500'>
            <div className='w-full my-2 text-white font-bold font-mono text-center'>Tecnologias de desarrollo back-end</div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-indigo-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '60%'}}>
                        <span className='font-bold'>PHP</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-orange-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '80%'}}>
                        <span className='font-bold'>Laravel</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-green-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '50%'}}>
                        <span className='font-bold'>Node JS</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-blue-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '75%'}}>
                        <span className='font-bold'>MySQL</span>
                    </div>
                </div>
                
                <div className='w-full bg-gray-200 rounded-full mt-4 my-2'>
                    <div className='bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full h-4' style={{width: '50%'}}>
                        <span className='font-bold'>Java</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Habilidades