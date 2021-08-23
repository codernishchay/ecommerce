
function Header ({size, title}) {
    return (
    <div class="bg-indigo-600">
     
   <div class="container bg-blue-900 h-10  p-5 m-auto">
   <div class= "flex flex-row justify-between ">
     <div class=" bg-yellow-900  w-10 h-10  rounded-lg ">
       <h1 class="text-3xl text-red-900 ml-10">LOGO</h1>
     </div>
     <div>
     <a class="text-green-900 hover:text-blue-200 px-4">Home</a>
     <a class="text-green-900 hover:text-blue-200 px-4">Home</a>
     <a class="text-green-900 hover:text-blue-200 px-4">Home</a>
     <a class="bg-black text-green-100 inline-block hover:text-blue-200 px-5  py-3 rounded-3xl "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>Cart (0)</a>    
     </div>
     </div>
   </div>
 
  <div>
    <h2>
      Some Catchy title here
    </h2>
    <p>
      Some Catchy title here
    </p>
  </div>

   </div>

    ); 
};

export default Header;



