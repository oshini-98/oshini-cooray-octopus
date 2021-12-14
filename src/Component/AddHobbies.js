import React from "react";
import "../Asserts/form.css";

/**
 * @author
 * @function AddHobbies
 **/

export default function AddHobbies(props) {
  return (
    <div className="create">
      <form>
        <label>Add Hobby</label>
        <input type="text" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
