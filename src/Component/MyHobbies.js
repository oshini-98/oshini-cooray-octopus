import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * @author
 * @function
 **/

export const MyHobbies = (props) => {
  const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [searchStr, setSearch] = useState("");

  return (
    <div>
      <div>My Hobbies</div>
      <div>
        <input
          type="text"
          placeholder="Search by Type..."
          style={{
            borderWidth: "2.5px",
            width: "20rem",
            height: "2rem",
            textAlign: "left",
            borderRadius: "15px",
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {posts
        .filter((r) => {
          if (searchStr === "") {
            return r;
          } else if (r.toLowerCase().includes(searchStr.toLowerCase())) {
            return r;
          }
        })
        .map((posts) => (
          <div key={posts.id}>
            <lable>{posts}</lable>
          </div>
        ))}
      <button type="submit">Edit</button>
    </div>
  );
};