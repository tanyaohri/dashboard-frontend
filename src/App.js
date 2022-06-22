import { Sidebar } from "./components/Sidebar";
import { Widget, LabelWithValue } from "./components/StaticView";

function App() {
  return (
    <div>
      Hi there 
      <Sidebar>
        <LabelWithValue 
          label={"Name"}
          value={"Hey there"}
          labelPercent={20}
          valuePercent={40}
        />
      </Sidebar>

      <Widget
        title={"Name"}
        subtitle={"Hey"}
      />
     
    </div>
  );
}

export default App;
