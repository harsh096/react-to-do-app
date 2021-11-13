import "./app.css";
import { useState } from "react";

function App() {
  const [currentList, setCurrentList] = useState("Reminders");

  const [reminders, setReminders] = useState(["8am Wake up", "11am Meeting"]);
  const [items, setItems] = useState(["Buy butter", "Buy eggs", "Buy milk"]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddClick = () => {
    if (inputText) {
      if (currentList === "To Do List") {
        setItems([...items, inputText]);
        setInputText("");
      } else {
        setReminders([...reminders, inputText]);
        setInputText("");
      }
    }
  };

  const handleListItemClick = (e) => {
    e.target.classList.toggle("strikeThrough");
  };

  return (
    <div>
      <div className="background">
        <div className="container">
          <div className="leftContainer">
            <button
              className={
                currentList === "To Do List"
                  ? "leftBarButton selected"
                  : "leftBarButton"
              }
              // className="leftBarButton"
              onClick={(e) => {
                setCurrentList("To Do List");
              }}
            >
              To Do List
            </button>
            <button
              className={
                currentList === "Reminders"
                  ? "leftBarButton selected"
                  : "leftBarButton"
              }
              // className="leftBarButton"
              onClick={(e) => {
                setCurrentList("Reminders");
              }}
            >
              Reminders
            </button>
          </div>
          <div className="rightContainer">
            <div className="upperContainer">
              <input
                type="text"
                className="newItemInput"
                placeholder="Enter new to do item..."
                onChange={handleInputChange}
                value={inputText}
              />
              <div className="addDiv" onClick={handleAddClick}>
                +
              </div>
            </div>
            {currentList === "To Do List" && (
              <ul className="itemsList">
                {console.log("re rendered")}
                {items.map((i) => {
                  return (
                    <li className="item" key={i} onClick={handleListItemClick}>
                      {i}
                    </li>
                  );
                })}
              </ul>
            )}
            {currentList === "Reminders" && (
              <ul className="remindersList">
                {reminders.map((r) => {
                  return (
                    <li
                      className="reminders"
                      key={r}
                      onClick={handleListItemClick}
                    >
                      {r}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
