import App from "./App";
import React,{useMemo,useCallback} from "react";

function Increment(props) {
    const{counta,countb,setcountb,setcounta}=props;

    const handleIncreaseA = useMemo(() =>{
        return () => {
            setcounta(prevCounta => prevCounta + 1);
        };
    }, [setcounta]);

    // const handleincreasea=()=>{
    //     setcounta(counta+1);
    // }
    const handleincreaseb = useCallback(() => {
        setcountb(prevCountb => prevCountb + 1);
    }, [setcountb]);
    
    // const handleincreaseb=()=>
    // {
    //     setcountb(countb+1);
    // }

    return (
      <div className="App">
           <button onClick={handleIncreaseA}>
            Increment_a       
           </button>

           {counta}
{/* {counta} */}
        <br>
        </br>

              <button onClick={handleincreaseb}>
              Increment_b
     
             </button>
             {countb}
             {/* {countb} */}
      </div>
    );
  }
  
  export default Increment;