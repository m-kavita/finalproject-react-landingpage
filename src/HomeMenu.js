import menu1 from './assets/menu1.jpg'

function HomeMenu(){
    return(
        <div className='text-gray-600 px-16 pb-6 font-body'>
            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

            {/* card grid #1 */}
            <div className='mt-8 grid lg:grid-cols-4 gap-7'>
                {/* card-1 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-2 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-3 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-4 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-5 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-6 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-7 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-8 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-9 */}
                <div className='card hover:shadow-lg'>
                    <img src={menu1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold'>5 Bean Chilli Stew</span>
                        <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
            </div>

            <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

            {/* card grid #2 */}
            <div className='mt-8'>
                {/* will add duplicates from the first */}
            </div>
            <div className='flex justify-center'>
                <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-sm transform hover:scale-105 hover:bg-opacity-50 transition ease-out duration-200'>Load More</div>
            </div>

        </div>
    )
}

export default HomeMenu;