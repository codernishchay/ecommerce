
function Header ({size, title}) {
    return (
    <div class=" w-full bg-black">  
   <div class="bg-white h-10 w-full m-auto  py-5">
   <div class= "flex flex-row width-full justify-between">
     <div className="flex flex-row">
       <h1 class="text-4xl font-bold text-blue-900 ml-8 font-serif px-5">Shopping</h1>


     <a  href="#" class="text-green-900 hover:text-blue-200 p-2 text-xl">StoreFront</a>
     <a  href="#" class="text-green-900 hover:text-blue-200 p-2 text-xl">Category</a>
     <a  href="#" class="text-green-900 hover:text-blue-200 p-2 text-xl">Account</a>
     </div>
     <div className="px-5">
     <a class="text-black-800 flex flex-row hover:text-blue-200 rounded-3x font-serif text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-block"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>Cart</a>    
     </div>
     </div>
   </div>
   </div>

    ); 
};


export default Header;



