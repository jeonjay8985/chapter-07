import ColorList from "./components/colormanager/ColorList";
import colorData from "./components/colormanager/color-data.json"
import {useState} from "react"

function App() {
  const[colors,setColors]=useState(colorData)
  return (
    <div className="App">
      <ColorList 
        colors={colors} 
        onRemoveColor={id=>{
          const newColors=colors.filter(color=>color.id!==id)
          setColors(newColors)
        }}
      />
      {/* <ColorList/> */}
    </div>
  );
}

export default App;
