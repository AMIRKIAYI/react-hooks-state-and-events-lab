import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable to manage Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the Dark Mode state
  function handleDarkMode(){
    setIsDarkMode(!isDarkMode);
  };

  // Conditional class based on Dark Mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
