import React, { useState } from "react";

function App() {
  // States to manage the list and the input value as asked
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Functions to handle adding items to the list
  const handleAddItem = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      setItems([...items, trimmedValue]);
      setInputValue(""); 
    } else {
      alert("Input field cannot be empty!");
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };


  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    cursor: "pointer",
  };

  const inputStyle = {
    padding: "10px",
    width: "300px",
    marginBottom: "10px",
  };

  const listItemStyle = {
    padding: "5px 0",
    fontSize: "18px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        onKeyDown={handleKeyDown} 
        style={inputStyle}
      />
      <br />
      <button onClick={handleAddItem} style={buttonStyle}>
        Add Item
      </button>
      <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
        {items.map((item, index) => (
          <li key={index} style={listItemStyle}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
