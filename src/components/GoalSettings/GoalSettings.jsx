import { useState } from "react";

export default function GoalSettings({
  handleRetrieveGoal,
  handleAddNew,
  isLoading,
}) {
  const [selected, setSelected] = useState("social");

  const handleTypeChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);

    handleRetrieveGoal(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRetrieveGoal(selected);
  };

  return (
    <form className="GoalSettings" onSubmit={handleFormSubmit}>
      <label htmlFor="goalType">
        <h3>Goals Settings</h3>
        <select
          name="goalType"
          value={selected}
          onChange={(e) => handleTypeChange(e)}
        >
          <option value="social">social</option>
          <option value="recreational">recreational</option>
          <option value="cooking">cooking</option>
        </select>
      </label>
      <button
        type="submit"
        onClick={() => handleAddNew()}
        className={isLoading ? "loading" : ""}
      >
        {isLoading ? "Loading..." : "Generate"}
      </button>
    </form>
  );
}
