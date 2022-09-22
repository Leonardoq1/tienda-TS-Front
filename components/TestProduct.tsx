export const TestProduct = ({ products, currentPage, previousPage, nextPage }) => {
    return (
        <>

            <h1 className="text-center text-black text-lg font-bold ">Pagina {currentPage + 1}</h1>
            <div className="grid grid-cols-2 gap-2  place-content-center ">
                <button className="rounded-md bg-gray-200 px-4 py-2  transition duration-300 hover:bg-lime-300" onClick={previousPage}> <strong>Previous</strong> </button>
                <button className="rounded-md bg-gray-200 px-4 py-2  transition duration-300 hover:bg-lime-300" onClick={nextPage}> <strong>Next</strong> </button>
            </div>
            <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={'#'}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

           </>
)}
