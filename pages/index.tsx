import react, { useEffect } from 'react';
import { useState } from 'react'
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer'
import { TestProduct } from '../components/TestProduct';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Product } from '../types/product.type';
import { usePaginate } from '../hooks/usePaginate';


type homeProps = {
  product: Product []
}

export default function Home( ){

const [products, setProducts] = useState<any[]>([])

const { nextPage, previousPage, productLimit, currentPage } = usePaginate<Product>(products)

const getProducts = async () => {
  const rest = await fetch("http://localhost:8000/ProductView/mostrarProductos/");
  const products = await rest.json()
  setProducts(products)
}

useEffect(() => {
  (async () => {
    await getProducts();
  })();
} ,[])
  
  return (
    <>
      <Head>
        <title>ShoppFast</title>
      </Head>
      <Navbar />
      <TestProduct products={productLimit} currentPage={currentPage} previousPage={previousPage} nextPage={nextPage} />
      <Footer />
    </>
  )
}

//uso de data feching de next "getServerSideProps" no ayuda a renderisar peticiones de una api y siempre esta escuchando al backend.
// export const getServerSideProps: GetServerSideProps = async (context) => {  //
//   const rest = await fetch("http://localhost:8000/ProductView/mostrarProductos/");
//   const products = await rest.json()
  

//   return {
//     props: {
//       product: products //aqui estamos pasando todos los produtos a product :D

//     }
//   }
// }