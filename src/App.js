import "./app.css";
import  GraphicalView  from "./components/Graph";
import { Sidebar } from "./components/Sidebar";
import { Widget, LabelWithValue } from "./components/StaticView";

function App() {
  return (
    <div>
      <Sidebar>
        <LabelWithValue 
          label={"Name"}
          value={"Hey there"}
          labelPercent={20}
          valuePercent={40}
        />
      </Sidebar>

    

      <div className="mainContent">
        <Widget
          title={"Name"}
          subtitle={"Hey"}
        />
       
      </div>

    
     
     
    </div>
  );
}

export default App;
