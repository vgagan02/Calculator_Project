import { useState } from "react";

function Main(){
    
    const [input,changeInput]=useState('')

    const clickEvent=(arg)=>{
        if(arg==='AC'){
            changeInput('');
        }
        else if(arg==='='){
            try{
                changeInput(eval(input).toString());
            }catch{
                changeInput('Error')
            }
        }
        else if(arg==='DEL'){
            changeInput(input.slice(0,-1));
        }
        else{
            changeInput(input+arg);
        }
    }

    return(
        <div className="mainbody">
            <input className="gridelement0 element2" type="text" value={input} readOnly/>
            <button className="gridelement1 element" onClick={()=>{clickEvent('7')}}>7</button>
            <button className="gridelement2 element" onClick={()=>{clickEvent('8')}}>8</button>
            <button className="gridelement3 element" onClick={()=>{clickEvent('9')}}>9</button>
            <button className="gridelement4 element" onClick={()=>{clickEvent('+')}}>+</button>
            <button className="gridelement5 element" onClick={()=>{clickEvent('4')}}>4</button>
            <button className="gridelement6 element" onClick={()=>{clickEvent('5')}}>5</button>
            <button className="gridelement7 element" onClick={()=>{clickEvent('6')}}>6</button>
            <button className="gridelement8 element" onClick={()=>{clickEvent('-')}}>-</button>
            <button className="gridelement9 element" onClick={()=>{clickEvent('1')}}>1</button>
            <button className="gridelement10 element" onClick={()=>{clickEvent('2')}}>2</button>
            <button className="gridelement11 element" onClick={()=>{clickEvent('3')}}>3</button>
            <button className="gridelement12 element" onClick={()=>{clickEvent('=')}}>=</button>
            <button className="gridelement13 element" onClick={()=>{clickEvent('AC')}}>AC</button>
            <button className="gridelement14 element" onClick={()=>{clickEvent('*')}}>x</button>
            <button className="gridelement15 element" onClick={()=>{clickEvent('/')}}>÷</button>
            <button className="gridelement16 element" onClick={()=>{clickEvent('(')}}>(</button>
            <button className="gridelement17 element" onClick={()=>{clickEvent(')')}}>)</button>
            <button className="gridelement18 element" onClick={()=>{clickEvent('0')}}>0</button>
            <button className="gridelement19 element" onClick={()=>{clickEvent('DEL')}}>DEL</button>
        </div>
    );
}

export default Main