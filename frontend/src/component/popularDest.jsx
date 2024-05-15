export default function PopularDestination() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <a href="#" className="font-semibold inline-block">
              Cooking BLog
            </a>
          </div>
          <a href="#">See All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <a href="#">
                <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <span className="ml-1">6 mins ago</span>
              </span>

              <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <a href="#">
                <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <span className="ml-1">6 mins ago</span>
              </span>

              <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg flex flex-col">
            <div className="relative">
              <a href="#">
                <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="Sunset in the mountains" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a href="#" className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                Simplest Salad Recipe ever
              </a>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
              <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <span className="ml-1">6 mins ago</span>
              </span>

              <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
                <span className="ml-1">39 Comments</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
