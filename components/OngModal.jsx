import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import DeleteModal from './DeleteModal'

const OngModal = ({
    id,
    open,
    setOpen,
    nombre,
    siglas,
    mision,
    vision,
    contacto,
    email,
    telefono,
    paginaWeb,
    facebook,
    instagram,
    twitter,
    youtube,
    renderTelefonos
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
                  <div className="sm:flex sm:items-start">
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
                            <div className={`md:text-justify ${mision ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Mis??on</p> 
                                { mision }
                            </div>
                            <div className={`md:text-justify ${vision ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Vis??on</p> 
                                { vision }
                            </div>
                            <div className={`text-ellipsis overflow-hidden ${paginaWeb ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>P??gina Web</p>
                                <a className='hover:font-bold hover:text-primary' href={paginaWeb}>
                                    { paginaWeb }
                                </a>
                            </div>
                            <div className={`text-ellipsis overflow-hidden ${contacto ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Contacto</p> 
                                { contacto }
                            </div>
                            <div className={`${telefono.length ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Telefono</p> 
                                {renderTelefonos()}
                            </div>
                            <div className={`${email ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Email</p>
                                { email }
                            </div>
                            <div className={`text-ellipsis overflow-hidden ${facebook ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Facebook</p> 
                                <a className='hover:font-bold hover:text-primary' href={facebook}>
                                    { facebook }
                                </a>
                            </div>
                            <div className={`text-ellipsis overflow-hidden ${instagram ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Instagram</p>
                                <a className='hover:font-bold hover:text-primary' href={instagram}>
                                    { instagram }
                                </a>
                            </div>
                            <div className={`text-ellipsis overflow-hidden ${twitter ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>Twitter</p> 
                                <a className='hover:font-bold hover:text-primary' href={twitter}>
                                    { twitter }
                                </a>
                            </div>
                            <div className={`text-ellipsis overflow-hidden ${youtube ? 'block' : 'hidden'}`}>
                                <p className='font-semibold text-gray'>YouTube</p> 
                                <a className='hover:font-bold hover:text-primary' href={youtube}>
                                    { youtube }
                                </a>
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
                    open={openDeleteModal}
                    setOpen={setOpenDeleteModal}
                    title={'Organizaci??n'}
                    nombre={nombre}
                    id={id}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default OngModal