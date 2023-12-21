//colormanager/AddColorForm.js
import {useRef,useState} from "react"
import {useInput} from "./hooks"

export default function AddColorForm({onNewColor=f=>f}){
    const [titleProps,resetTitle]=useInput("")
    const [colorProps,resetColor]=useInput("#000000")
//   const [title, setTitle]=useState("")
//   const [color, setColor]=useState("#000000")
//   const txtTitle=useRef()
//   const hexColor=useRef()

    const submit=e=>{
        e.preventDefault()
        onNewColor(titleProps.value,colorProps.value)
        resetTitle()
        resetColor()
    // onNewColor(title, color)
    // setTitle("")
    // setColor("")
    // console.log(txtTitle.current.value)
    // console.log(hexColor.current.value)
    // const title=txtTitle.current.value
    // const color=hexColor.current.value
    // onNewColor(title,color)
    // txtTitle.current.value=""//빈 문자열로 초기화
    // hexColor.current.value=""
  }

 
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text" placeholder="color title..." required />
      <input
        {...colorProps}
        type="color" required />
      <button>ADD</button>
    </form>
  )
}

/*
  return (
    <form onSubmit={submit}>
      <input 
      value={title}
      onChange={event=>setTitle(event.target.value)} type="text" placeholder="color title..." required />
      <input
      value={color}
      onChange={event=>setColor(event.target.value)} type="color" required />
      <button>ADD</button>
    </form>
  )*/
