function Card() {
  
  return (
  <div> 
    <div class="flex items-center bg-purple-400">
  <div class="container ml-auto mr-auto flex flex-wrap items-start">
    {/* <div class="pl-5 pr-5 mb-5"> */}
      <div class="rounded-xl  bg-white m-h-64  p-2 transform hover:translate-y-2  shadow-xl hover:shadow-2l transition duration-300 ml-auto mr-auto">
        <figure class="mb-2 max-w-full p-3">
          <img src="https://source.unsplash.com/random" alt="" class="h-64 ml-auto mr-auto rounded-t-xl " />
        </figure>
        <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 class="text-white text-2xl font-bold leading-none">
              iPhone 11 Pro Max
            </h5>
            <span class="text-xs text-gray-400 leading-none">And then there was Pro.</span>
          </div>
          <div class="flex items-center">
            <div class="text-lg text-white font-light">
              $1099,00
            </div>
            <button href="" class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto animate-spin">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        {/* </div><div className=""></div> */}
      </div>
    </div>
  </div>
</div>
  </div>
  );
}

export default Card;