import { useState } from "react";
import Compfour from "./Compfour";

function Compthree() {
  const [activityArr, setActivityArr] = useState([
    { id: 1, activity: "Go for walk" },
    { id: 2, activity: "Have breakfast" },
    { id: 3, activity: "Take a shower" }
  ]);
  const [newActivity, setNewActivity] = useState("");

  const handleAdd = () => {
    if (newActivity.trim() === "") return;
    const newId = activityArr.length ? activityArr[activityArr.length - 1].id + 1 : 1;
    setActivityArr([...activityArr, { id: newId, activity: newActivity }]);
    setNewActivity("");
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div>
        <h2>Manage Activities</h2>
        <input
          type="text"
          placeholder="Next Activity?"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
          style={{ height: "30px", width: "300px" }}
        />
        <button
          onClick={handleAdd}
          style={{
            height: "38px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "none",
            border: "none"
          }}
        >
          Add
        </button>
      </div>
      <div style={{ marginLeft: "380px", marginTop: "-90px" }}>
        <div
          style={{
            height: "250px",
            width: "500px",
            backgroundColor: "violet",
            padding: "5px",
            marginLeft: "5px",
            borderRadius: "5px"
          }}
        >
          <h2>Today's Activity</h2>
          {activityArr.length === 0 ? (
            <p>You have not added any activities yet</p>
          ) : (
            activityArr.map((item, index) => (
              <Compfour
                id={item.id}
                activity={item.activity}
                index={index}
                activityArr={activityArr}
                setActivityArr={setActivityArr}
                key={item.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default Compthree;