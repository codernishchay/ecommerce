import Button from "./Button";

function StoreFrontBody(){
    return (
        <div class ="flex flex-row mt-20">

            <div class="w-2/5  flex-col justify-center">
            
              <h2 class="font-serif text-3xl mb-5 ">Welcome You stupid</h2>
              <p>Hello there how are you</p>
              <p>Hello there how are you</p>
              <p>Hello there how are you</p>
              <p>Hello there how are you</p>
              <p class="mb-5">Hello there how are you</p>
            
              <Button size="10" children="Hello there ! " class="my-10"></Button>
              
            </div>
            
        </div>
    )
}

export  default StoreFrontBody; 