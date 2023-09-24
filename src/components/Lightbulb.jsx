import { useState } from "react";

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [isLit, setIsLit] = useState(false);

  // Using Swtich Case
  // const getLightbulbClasses = () => {
  //   switch (isLit) {
  //     case true:
  //       return 'lightbulb on';
  //     case false:
  //       return 'lightbulb off';
  //     default:
  //       return 'lightbulb';
  //   }
  // };

  // Using Ternary operators
  const getLightbulbClasses = () => {
    return `lightbulb ${isLit ? 'on' : 'off'}`;
  };

  const toggleLight = () => {
    // Toggle the on/off state
    setIsLit(!isLit) // When clicked the state changes between true and false 
  };
  return (
    <div className="lightbulb-container">
      <div className={getLightbulbClasses()} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};