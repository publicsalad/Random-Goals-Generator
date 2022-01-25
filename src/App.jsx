import { useState, useEffect } from "react";
import "./App.css";

// Dependencies
import WebFont from "webfontloader";
import axios from "axios";

// Components
import Item from "./components/Item/Item";
import GoalSettings from "./components/GoalSettings/GoalSettings";

function App() {
  const [loading, setLoading] = useState(false);
  const [currType, setCurrType] = useState("social");
  const [goals, setGoals] = useState([
    {
      activity: "Learn to Cook Adobo",
      type: "cooking",
      in_progress: false,
      key: 8907291,
    },
  ]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Kalam"],
      },
    });
  }, []);

  const handleAddNew = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://www.boredapi.com/api/activity?type=${currType}`
    );
    const mergedData = [...goals, { ...response.data, in_progress: false }];
    console.log(mergedData);
    setGoals(mergedData);
    setLoading(false);
  };

  const handleRemoveGoal = (pos) => {
    let copy = [...goals];
    copy.splice(pos, 1);
    setGoals(copy);
  };

  const handleRetrieveGoal = (goal) => {
    setCurrType(goal);
  };

  return (
    <div className="App">
      <div className="AppContainer">
        <h1>Random Goals Generator</h1>

        <GoalSettings
          handleRetrieveGoal={handleRetrieveGoal}
          handleAddNew={handleAddNew}
          isLoading={loading}
        />
        <div className="GoalGrid">
          {goals.map((item, pos) => (
            <Item
              key={pos}
              handleRemoveGoal={handleRemoveGoal}
              {...item}
              pos={pos}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
