import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react"
import { useToastify } from "../../hooks/useToastify";

export default function Create() {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    const [stock, setStock] = useState(0);
    const [expireOn, setExpireOn] = useState(Date);
    const [activo, setActivo] = useState('');


    const route = useRouter();
    const {notifyAdd} = useToastify()

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        let postDate = {
            name: name,
            image: image,
            description: description,
            price: price,
            stock: stock,
            expireOn: expireOn,
            activo: activo
        };

        let response = await fetch('http://localhost:8000/ProductView/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(postDate)
        });
        let result = await response.json();
        await route.push('/crud')
        notifyAdd()
    }
    return (
        <>
            <h2 className="text-center font-serif text-3xl font-bold mt-5 mb-5">Create a Product</h2>
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
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Img-url
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
                                type={"url"}
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
                                step={"any"}
                                type={"number"}
                                placeholder="$"
                                onChange={e => setPrice(parseInt(e.target.value))}
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className=" block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">
                                Stock
                            </label>
                            <input
                                className="appearance-none block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
                                type={"number"}
                                placeholder="0"
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
                                onChange={e => setExpireOn(e.target.value)}
                                required
                            />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-zip">
                                activo
                            </label>
                            <input
                                className="block w-full bg-white text-black border border-grey-lighter rounded py-3 px-4"
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