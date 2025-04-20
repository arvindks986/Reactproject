import { useReducer } from "react"


export const UseReduce=() => {
    //const count=2;
    const intialState = {
        count:0,
        a:4,
        n:6
    };
    console.log(intialState);
   
const reducer=(state,action) =>{
    console.log(state.count,state.a);
    switch(action.type) {
    case "INC":
     return {...state,count:state.count + 1}

     case "DEC":
     return {...state,count:state.count - 1}

     default:
     return{...state, count:state.count}
    }


};

  const [state,dispatch]=useReducer(reducer, intialState);

  return (
<div>
  
  <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
  <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
  <h1>{state.count}</h1>
  </div>
  );         

}