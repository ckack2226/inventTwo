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
      endpoint: 'login',
      redirectRoute: '/home',
      formData
    })
    finishLoading()
  }

console.log(FormData);

  return (
    <>
      <Form
        title='Inicia Sesión'
        onSubmit={login}
        description='Formulario para iniciar sesión'
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
        </div>
        <Form.SubmitButton buttonText='Iniciar Sesión'
         isLoading={isLoading} 
         />
        <Form.Footer
          description='Te olvidate tu contraseña?'
          link='/forget-password'
          textLink='Recuperar contraseña'
        />
        <Form.Footer
          description='Aun no tienes cuenta?'
          link='/register'
          textLink='Registrate'
        />
      </Form>
    </>
  )
}
