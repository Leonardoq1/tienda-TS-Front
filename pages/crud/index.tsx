
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { TableProducts } from "../../components/crud/TableProducts";
import Navbar from "../../components/Navbar";
import { usePaginate } from "../../hooks/usePaginate";
import { Product } from "../../types/product.type";



type homeProps = {
  product: Product[]
}

export default function Index() {
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
      <Navbar />
      <TableProducts
        product={productLimit}
        previousPage={previousPage}
        nextPage={nextPage}
        refresh={getProducts}
      />
    </>
  )
}


//uso de data feching de next "getServerSideProps" no ayuda a renderisar peticiones de una api y siempre esta escuchando al backend.
// export const getServerSideProps: GetServerSideProps = async (context) => {  //
//   const rest = await fetch("http://localhost:8000/ProductView/mostrarProductos/");
//   const products = await rest.json()


//   return {
//     props: {
//       product: products //aqui estamos pasando todos los prodcutos a product jdjdj

//     }
//   }
// }
