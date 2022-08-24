import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Admin = ({}) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const validateUser = () => {
        if (user == 'admin' && password == 'admin'){
            router.push('agregar')
            localStorage.setItem('admin', 'true')
        } else {
            toast.error('Usuario o contraseña incorrecta')
        }
    }

    return (
        <>
            <ToastContainer 
                position='bottom-center'
                autoClose={2000}
            />
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
                            Administración
                        </h2>
                    </div>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Usuario
                            </label>
                            <input
                            id='username'
                            name="username"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray focus:border-gray focus:z-10 sm:text-sm"
                            placeholder='Usuario'
                            onChange={event => {setUser(event.target.value)}}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                            Contraseña
                            </label>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-primary placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                            placeholder="Contraseña"
                            onChange={event => {setPassword(event.target.value)}}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-gray  focus:outline-none"
                            onClick={validateUser}
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin