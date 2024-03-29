'use client'

import { Form } from "./components/Forms"

export default function LoginPage() {
  return (
    <>
      <Form
        title='Inicia Sesión'
        onSubmit={() => {}}
        description='Formulario para iniciar sesión'
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input
            label='Usuario'
            name='Usuario'
            placeholder='Ingresa Usuario'
          />
          <Form.Input
            placeholder='Ingresa tu contraseña...'
            label='Contraseña'
            name='password'
            type='password'
          />
        </div>
        <Form.SubmitButton buttonText='Iniciar Sesión' />
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
