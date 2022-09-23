import axios from "axios";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react"
import { useToastify } from "../../../hooks/useToastify";
import { Product } from "../../../types/product.type";

export default function Edit() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [expireOn, setExpireOn] = useState ('');
    const [activo, setActivo] = useState('');

    const route = useRouter();

    const  {id}  = route.query
    
    const {notifyEdit} = useToastify()

    useEffect(()=>{
        
        const getProduct = async (id) => {
            const data = await fetch(`http://localhost:8000/ProductView/${id}`)
            const product:Product = await data.json()
            setName(product.name)
            setImage(product.image)
            setDescription(product.description)
            setPrice(product.price)
            setStock(product.stock)
            setExpireOn(product.expireOn)
            setActivo(product.activo)
            console.log(product)
         }
         getProduct(id) 
       
    },[])

    const submit = async (e:SyntheticEvent) => {
    e.preventDefault()

        let postDate = {
            name: name,
            image: image,
            description: description,
            price: price,
            stock: stock,
            expireOn: expireOn,
            activo: activo
        };

        await fetch('http://localhost:8000/ProductView/'+route.query.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(postDate)
        });
        
        await route.push('/crud')
        notifyEdit()
    }
   
   



    return (
        <>
            <h2 className="text-center font-serif text-3xl font-bold mt-5 mb-5">Edi {id}</h2>
            <div className="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <form onSubmit={submit}>

                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-red rounded py-3 px-4 mb-3"
                                type="text"
                                placeholder="Product"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Img
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
                                type={"text"}
                                value={image}
                                onChange={e => setImage(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                                Description
                            </label>
                            <textarea
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4 mb-3"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-2">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
                                Price
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
                                type={"number"}
                                placeholder="$"
                                value={price}
                                onChange={e => setPrice(parseInt(e.target.value))}
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
                                Stock
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
                                type={"number"}
                                placeholder="0"
                                value={stock}
                                onChange={e => setStock(parseInt(e.target.value))}
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
                                Expiration date
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
                                type={"date"}
                                value={expireOn}
                                onChange={e => setExpireOn(e.target.value)}
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
                                activo
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
                                type={"text"}
                                value={activo}
                                onChange={e => setActivo(e.target.value)}
                                required
                            />
                        </div>

                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">Agregar</button>
                    </div>
                </form>
            </div>

        </>
    )
}

