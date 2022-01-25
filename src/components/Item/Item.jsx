import { BsTrash2 } from "react-icons/bs";
export default function Item({ pos, handleRemoveGoal, ...item }) {
  return (
    <div className="Goal">
      <h3>{item.activity}</h3>
      <p>Type: {item.type}</p>

      <div className="GoalControls">
        <button onClick={() => handleRemoveGoal(pos)}>
          <BsTrash2 />
        </button>
      </div>
    </div>
  );
}
