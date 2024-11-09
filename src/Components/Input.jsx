import React, { useEffect, useState } from 'react'

export const Input = () => {
    const [val,setVal]=useState(0);
    const [cards,setCards]=useState([{}]);
    var cnt=0;
    var [cardStatus,setCardStatus]=useState([]);
    var obj={};
    
    
    const createCards=()=>{
        // e.preventDefault();
        

        if(val==''){ //if the size is 0
            setCards([{}]);
            return;
        }
        [...Array(val)].map((items,i)=>{
            setCards(prevCards => [
                ...prevCards,
                { id: i, status: true },
                { id: i, status: true }
            ]);
        }) 
            
    
        console.log(cards,val);
        

    }

    useEffect(()=>{
        createCards();
    },[val])
    
    
    return (
        <>
            <h1 className='text-center'>
                <span  className="block py-5 text-gray-800 font-semibold text-md">
                    Enter The Size (Even No's only)
                </span>
                <h1 className="">
                    <input
                        type="text"
                        className=" text-center w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        onChange={(e)=>setVal(e.target.value)}
                        
                    />
                    <p>{val}</p>
                </h1>
            </h1>
            <div className="card-container flex items-center justify-center h-2/3 w-screen">
                <div className={`cards rounded border-solid border-2 border-slate-700 grid grid-cols-${val} bg-slate-100`}>
                    
                    {
                        cards.map((items,i)=>{                            
                            return(
                                <div key={i} className="flex items-center font-bold hover:bg-sky-700 m-2 justify-center h-16 w-16 rounded border-solid border-2 border-slate-700 bg-slate-100">{items.id}</div>
                            )
                        })
                    }

                    
                </div>
            </div>
        </>
    )
}
