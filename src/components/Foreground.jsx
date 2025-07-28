import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { IoMdAdd } from "react-icons/io";
import "./foreground.css";
import { RxCross2 } from "react-icons/rx";

const Foreground=()=>{
  const [data,setData]=useState([]);
  const [showForm,setShowForm]=useState(false);
  const [desc,setDesc]=useState("");
  const [fileSize,setFileSize]=useState("");
  const [close,setClose]=useState(false);
  const [tagOpen,setTagOpen]=useState(false);
  const [tagTitle,setTagTitle]=useState("");
  const [tagColor,setTagColor]=useState("");
  const foregroundRef=useRef(null);
  const [filled,setFilled]=useState(false);

  const generateDocs=()=>{
    const info={
      desc:desc,
      fileSize:fileSize,
      close:close,
      tag:{
        tagOpen:tagOpen,
        tagTitle:tagTitle,
        tagColor:tagColor
      }
    }
    if(data.length>0){
      const copydata=[...data];
      copydata.push(info);
      setData(copydata);
    }
    else{
      data.push(info);
      setData(data);
    }
    setFilled(true);
    setShowForm(false);
  };

  const toggleForm=()=>{
    setShowForm(prev=>!prev);
    setDesc("");
    setFileSize("");
    setClose(false);
    setTagTitle("");
    setTagOpen(false);
    setTagColor("");
  }

  const toggleTagOpen=()=>{
    setTagOpen(prev=>!prev);
  }

  const toggleClose=()=>{
    setClose(prev=>!prev);
  }

  return (
    <div ref={foregroundRef} className="relative z-[3] w-full h-full flex gap-3 flex-wrap p-5">
    {filled&&(
      data.map((item,id)=>{
        return <Card data={item} key={id} reference={foregroundRef}/>
      })
    )}

      <button onClick={toggleForm} className="absolute bottom-15 left-[50%] rounded-full hover:scale-110 ease-in-out duration-250 active:scale-100 cursor-pointer bg-zinc-300">
        {showForm?<RxCross2 size='3em' color='black'/>:<IoMdAdd size='3em' color='black'/>}
      </button>

    {showForm&&(<div id='cardForm' className='bg-zinc-900/80 text-white rounded-xl h-fit w-fit p-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
      <form onSubmit={generateDocs} className='flex gap-10 flex-col'>
        <div className='flex justify-around gap-5'>
          <label>
          Description:
          <textarea className='border-1 leading-3 p-2' name="desc" rows={3} placeholder='Enter desc here' value={desc} required onChange={(event)=>{
            setDesc(event.target.value);
          }}></textarea>
          </label>
          <label>
            File size:
            <input type="text" className='border-1' required value={fileSize} onChange={(event)=>{
              setFileSize(event.target.value);
            }}/>
          </label>
          <label>
            Close:
            <input type='checkbox' name='close' value={close} onChange={toggleClose}/>
          </label>
        </div>

        <div>
          <fieldset className='flex gap-8'>
            <legend>Tag</legend>
            <label>
              isOpen:
              <input type="checkbox" value={tagOpen} onChange={toggleTagOpen}/>
            </label>
            {tagOpen&&(
              <>
              <label>
                Tag title:
                <input type="text" className='border-1' required value={tagTitle} onChange={(event)=>{
                  setTagTitle(event.target.value);
                }}/>
              </label>
              <label>
                Tag Color:
                <select>
                  <option value="green" className='bg-zinc-700'>Green</option>
                  <option value="blue" className='bg-zinc-700' selected>Blue</option>
                </select>
            </label>
            </>
          )}

          </fieldset>
        </div>
        <button type='submit' className='bg-zinc-700 w-fit h-fit p-5 rounded-xl self-center cursor-pointer hover:scale-105 active:scale-95 duration-250 ease-in-out'>Create</button>
      </form>
  </div>)}
    </div>
  );
};

export default Foreground;