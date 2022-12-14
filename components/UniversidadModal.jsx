import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import DeleteModal from './DeleteModal'

const UniversidadModal = ({
    id,
    open,
    setOpen,
    nombre,
    siglas,
    cargo,
    contacto,
    escuela,
    facultad,
    email,
    telefono
} ) => {

  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('admin') ? true : false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity bg-solid-black" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:items-start">
                    <div className=" text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-primary text-center mb-5">
                        { nombre }
                      </Dialog.Title>
                      <Dialog.Description as='div' className=''>
                        <div className="grid grid-cols-1 gap-4 mt-2">
                            <div className={`${siglas ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Siglas</p> 
                                { siglas }
                            </div>
                            <div className={`${facultad ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Facultad</p> 
                                { facultad }
                            </div>
                            <div className={`${escuela ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Escuela</p>
                                { escuela }
                            </div>
                            <div className={`${contacto ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Contacto</p>
                                { contacto }
                            </div>
                            <div className={`${cargo ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Cargo</p>
                                { cargo }
                            </div>
                            <div className={`${telefono ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Telefono</p>
                                { telefono }
                            </div>
                            <div className={`${email ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Email</p>
                                { email }
                            </div>
                        </div>
                      </Dialog.Description>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 md:content-center md:flex md:justify-center md:space-x-20">
                {isAdmin &&
                      <button
                          type="button"
                          className="w-full inline-flex mb-5 justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm md:mb-0"
                          onClick={() => setOpenDeleteModal(true)}
                      >
                          Eliminar
                      </button>
                  }
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary focus:outline-none focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Cerrar
                  </button>
                </div>
                <DeleteModal 
                    open = {openDeleteModal}
                    setOpen = {setOpenDeleteModal}
                    title = {'Universidad'}
                    nombre = {contacto}
                    id= {id}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default UniversidadModal