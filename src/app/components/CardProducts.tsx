"use client"
import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL;
console.log(API_URL);


export default function CardProducts() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/productos').then((response) => {
      setProducts(response.data);
    }); 
  }, []);
  
  return (
    <div className="gap-2 pt-5 grid grid-cols-2 sm:grid-cols-4">
      {products.map((product: any, index) => (
        <Card className="bg-gray-100" shadow="md" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <b className="w-full object-cover h-[140px]">{product.Nombre}</b>

          </CardBody>
          <CardFooter className="text-small justify-between">
            <p className="text-default-500">${product.Precio}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}