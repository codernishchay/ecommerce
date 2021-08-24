import Button from "./Button";

function StoreFrontBody(){
    return (
         <div className="flex flex-row bg-white-900 mt-16 ml-10">
             <div  className= "w-1/3 flex flex-col justify-around">
                <div className="p-10">
                    <h1 className="text-5xl text-left">
                        Hello Welcome to Store
                    </h1>
                    
              <div>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint culpa reprehenderit voluptatem fugiat! Modi sequi rerum assumenda odio sit architecto t    </p>
              </div>
              <div className="text-center"><Button size='100'>Shop Now</Button></div>
       

          </div>
          </div>
          <div>
              
             <img src="./images/undraw_Outdoor_adventure_re_j3b7.svg" className=""></img>
          </div>
         </div>
    )
}

export  default StoreFrontBody; 