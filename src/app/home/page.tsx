'use client'

import Header from "../components/header"
import SeccionProducto from "../components/seccionProducto/seccionProducto"
import React, { useState, useEffect } from 'react';
import { Producto } from "../models/Product";

export default function HomePage() {

  const [productos, setProductos] = useState<Producto[]>([]);

  // useEffect(() => {
  //   const cargarProductos = async () => {
  //     const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/producto`);
  //     if (!respuesta.ok) throw new Error('Respuesta de la API no fue exitosa');;
  //     const productosDesdeAPI = await respuesta.json();
  //     setProductos(productosDesdeAPI);
  //   };
  
  //   cargarProductos();
  // }, []);
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/producto`);
        if (!respuesta.ok) throw new Error('Respuesta de la API no fue exitosa');
        const productosDesdeAPI = await respuesta.json();
        setProductos(productosDesdeAPI.productos);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    cargarProductos();
  }, []);
  
  return (
    <>
      <Header />
      <SeccionProducto lista={productos as Producto[]} />
    </>
  );
}