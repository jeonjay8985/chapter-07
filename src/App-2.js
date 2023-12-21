import AddColorForm from "./components/colormanager/AddColorForm";
import ColorList from "./components/colormanager/ColorList";
import colorData from "./components/colormanager/color-data.json"
import {useState} from "react"

function App() {
  const[colors,setColors]=useState(colorData)
  return (
    <div className="App">
      <AddColorForm />
      <ColorList 
        colors={colors} 
        onRemoveColor={id=>{
          const newColors=colors.filter(color=>color.id!==id)
          setColors(newColors)
        }}
        onRateColor={(id,rating)=>{
          // console.log(id, rating)
          const newColors=colors.map(color=>
            color.id===id?{...color,rating}:color)
          setColors(newColors)
        }}
      />
      {/* <ColorList/> */}
    </div>
  );
}

export default App;
