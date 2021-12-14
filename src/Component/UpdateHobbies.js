import React from "react";
import { useState, useEffect } from "react";
import "../Asserts/form.css";

/**
 * @author
 * @function UpdateHobbies
 **/

export const UpdateHobbies = (props) => {
  const [posts, setPosts] = useState([1, 2]);

  return (
    <div className="create">
      <div>
        <div>My Hobbies</div>
        {posts.map((posts) => (
          <input key={posts.id}>
            <lable>{posts}</lable>
          </input>
        ))}
      </div>
    </div>
  );
};
