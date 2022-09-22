import { useEffect, useState } from "react"


const pages: number = 4

export const usePaginate = <T = any>(data: T[]) => {
    //paginado la logica esta desde la linia 26 al 53 
    const [datosProducts, setDatosProducts] = useState<T[]>([])// Almacena los productos
    const [productLimit, setProductLimit] = useState<T[]>([])//Definimos las paginas a mostrar
    const [currentPage, setCurrentPage] = useState<number>(0) //Contador


    /*Pagina siguente*/
    const nextPage = () => {
        const totalElemeProdu: any = datosProducts.length;
        const nextPage: number = currentPage + 1;
        const firstIndex: number = nextPage * pages;

        if (firstIndex >= totalElemeProdu) {
            return;
        }

        setProductLimit([...data].splice(firstIndex, pages))
        setCurrentPage(nextPage);
    }

    /*Pagina anterios*/
    const previousPage = () => {
        const prevPage: number = currentPage - 1
        if (prevPage < 0) return;
        const firstIndex: number = prevPage * pages;
        setProductLimit([...data].splice(firstIndex, pages))
        setCurrentPage(prevPage);
    } //.fin de la logica de paginado

    useEffect(() => {

        setDatosProducts(data);
        setProductLimit([...data].splice(0, pages));


    }, [data])

    return {
        productLimit,
        nextPage,
        previousPage,
        currentPage

    }
}
