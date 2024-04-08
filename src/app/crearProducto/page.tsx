'use client'

import axios from "axios";
import Header from "@/app/components/header";
import React, {useState } from 'react';
import { useSearchParams } from "next/navigation";

export default function Crear() {
  const searchParams = useSearchParams();
  const id = searchParams.get('product')
  const [formData, setFormData] = useState({
    Nombre: '',
    Precio: '',
    Descripcion: '',
    UnidadMedida: '',
    ProveedorID: '',
    LicenciaCertificacionID: ''
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/producto', formData); 
  
      if (response.status === 200) {
        console.log('Producto creado con éxito'); 
      } else {
        console.error('Error al crear el producto:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  

    return (
        <>
            <Header />
<form className="w-full max-w-lg" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Nombre Producto
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="nombre" id="nombre" onChange={handleInputChange} placeholder="Nombre"  />
    </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Descripcion
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="descripcion" id="descripcion" onChange={handleInputChange} placeholder="Descripcion" />
      <p className="text-gray-600 text-xs italic">La puedes hacer lo larga que quieras</p>
    </div>
  </div>
    <div className="w-full  px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Precio
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" name="precio" id="precio" onChange={handleInputChange} placeholder="Precio" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Unidad medida
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="unidadmedida" id="unidadmedida" onChange={handleInputChange} placeholder="Producto" />
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Proveedor ID
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" name="proveedorid" id="proveedorid" onChange={handleInputChange} placeholder="Producto" />
    </div>
    <div className="w-full px-3 mb-6 pt-5 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        licencia Certificacion
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" name="licenciacertificacionid" id="licenciacertificacionid" onChange={handleInputChange} placeholder="Producto" />
    </div>
  </div>
  <button type="submit" className="btn btn-primary bg-slate-300 rounded">Crear Produto</button>
</form>
        </>
    );
}
