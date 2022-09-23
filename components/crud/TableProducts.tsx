import Link from "next/link"
import { useRouter } from "next/router";
import { Product } from "../../types/product.type"
import { useToastify } from "../../hooks/useToastify";

export const TableProducts = ({ product, previousPage, nextPage, refresh }) => {

    const router = useRouter();
    const {notifyElimi}=useToastify()

    const delet = async (id: Product) => {
       
        await fetch(`http://localhost:8000/ProductView/${id}`, {
            method: 'DELETE'
        });

        await refresh();
        notifyElimi()
       
    }

    return (
        <>
            <div className="grid grid-cols-2 gap-2  place-content-center ">
                <button className="rounded-md bg-gray-200 px-4 py-2  transition duration-300 hover:bg-lime-300" onClick={previousPage}> <strong>Previous</strong> </button>
                <button className="rounded-md bg-gray-200 px-4 py-2  transition duration-300 hover:bg-lime-300" onClick={nextPage}> <strong>Next</strong> </button>
            </div>
            <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4">
                    <h1 className="font-serif text-3xl font-bold underline decoration-gray-400"> Table of Products</h1>
                    <div className="flex justify-end">
                        <Link href={'crud/create'}>
                            <button className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600">Create Post</button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            ID</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Name</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Image</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Price </th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            expireOn</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Description </th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Stock</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Activo</th>
                                        <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                            Actions</th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {
                                        product.map((produ) => {
                                            return (
                                                <tr key={produ.id}>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            {produ.id}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            {produ.name}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            <img className="max-w-[60px]" src={produ.image} alt="img del producto" />
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            $ {produ.price}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            {produ.expireOn}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            {produ.description}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            {produ.stock}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                        <div className="flex items-center">
                                                            {produ.activo}
                                                        </div>
                                                    </td>
                                                    <td className=" px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                                        <button onClick={() => router.push('/crud/edit/' + produ.id)} className="text-indigo-600 hover:text-indigo-900" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => { delet(produ.id)}} ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"2"} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
