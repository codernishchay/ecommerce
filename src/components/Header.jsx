
function Header ({size, title}) {
    return (
    <div class="bg-white">  
   <div class="container bg-white h-10  p-5 m-auto">
   <div class= "flex flex-row justify-between ">
       <h1 class="text-5xl text-blue-900 ml-10 font-serif">Shop_Here</h1>

     <div class="px-2
     ">
     <a  href="#" class="text-green-900 hover:text-blue-200 p-2 text-2xl ">Home</a>
     <a  href="#" class="text-green-900 hover:text-blue-200 p-2 text-2xl">Home</a>
     <a  href="#" class="text-green-900 hover:text-blue-200 p-2 text-2xl">Home</a>
     <a class="bg-black text-green-100 inline-block hover:text-blue-200 px-5  py-3 rounded-3xl text-2xl "><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>Cart</a>    
     </div>
     </div>
   </div>
   </div>

    ); 
};


export default Header;



