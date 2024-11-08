import React, { useState } from 'react'

export const Input = () => {
    const [val,setVal]=useState('');
    const [cards,setCards]=useState([{}]);
    var obj={};
    const createCards=(e)=>{
        e.preventDefault();
        setVal(e.target.value);
        console.log(arr)
    }
    return (
        <>
            <h1 className='text-center'>
                <label for="inputname" className="block py-5 text-gray-800 font-semibold text-md">
                    Enter The Size (Even No's only)
                </label>
                <h1 className="">
                    <input
                        type="text"
                        name="usrVal"
                        className=" text-center w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                        onChange={createCards}
                        
                    />
                    {/* <p>{val}</p> */}
                </h1>
            </h1>
            <div className="card-container flex items-center justify-center h-2/3 w-screen">
                <div className={`cards rounded border-solid border-2 border-slate-700 grid grid-cols-${val} bg-slate-100`}>
                    {
                        [...Array((val*val))].map((items,i)=>{
                            return(
                                <div className="flex items-center font-bold hover:bg-sky-700 m-2 justify-center h-16 w-16 rounded border-solid border-2 border-slate-700 bg-slate-100">{i+1}</div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}
