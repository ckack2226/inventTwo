'use client'

import { Form } from "./Forms"
import { useAuthFetch } from '@/app/hook/useAuthFetch'
import { useLoading } from '@/app/hook/useLoading'

export default function LoginPage () {
  const { finishLoading, isLoading, startLoading } = useLoading()
  const authFetch = useAuthFetch()

  const login = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'register',
      redirectRoute: '/login',
      formData
    })
    finishLoading()
  }


console.log(FormData);

  return (
    <>
      <Form
        title='Registrar usuario'
        onSubmit={login}
        description='Formulario para Registrarse'
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            label='Usuario'
            name='NombreUsuario'
            placeholder='Ingresa tu correo...'
          />
          <Form.Input
            placeholder='Ingresa tu contraseña...'
            label='Contraseña'
            name='password'
            type='password'
          />
          <Form.Input
            placeholder='Confirma tu contraseña...'
            label='Confirmar Contraseña'
            name='confirmPassword'
            type='password'
          />
        </div>
        <Form.SubmitButton buttonText='Registrarse'
         isLoading={isLoading} 
         />
      </Form>
    </>
  )
}
