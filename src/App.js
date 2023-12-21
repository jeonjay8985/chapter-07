import AddColorForm from "./components/colormanager/AddColorForm";
import ColorList from "./components/colormanager/ColorList";
//import StarRating from "./components/starrating/StarRating";
import colorData from "./components/colormanager/color-data.json"
import {useState} from "react"
import { v4 } from 'uuid';

function App() {
  const[colors, setColors]=useState(colorData) //colors값이 변경->랜더링. 변경은 메소드를 통해
  return (
    <div className="App">
      <AddColorForm
        onNewColor={(title, color)=>{
          const newColors=[
            ...colors, //새로운 배열 만들기. 기존의 배열->전개연산자 사용(원래있던 배열 살림)
            { 
              id:v4(),
              rating:0,
              title,
              color
            }
          ]
          setColors(newColors)
        }}
      />
      <ColorList 
      colors={colors} 
      onRemoveColor={id=>{
        //console.log(id)
        const newColors=colors.filter(color=>color.id!==id) //삭제
        setColors(newColors)

      }}
      onRateColor={(id, rating)=>{
        //console.log(id, rating)s
        const newColors=colors.map(color=>
          color.id===id? {...color, rating}:color)
        setColors(newColors)
      }}
      />
      {/* <ColorList/> */}
    </div>
  );
}

export default App;
