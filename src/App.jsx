import { useState, useRef } from "react";
import styles from "./css/app.module.css";
import Inputbox from "./Inputbox";
let array = [];

function App() {
  const [components, setComponents] = useState([]);
  const boxCount = useRef(null);
  let arr = [];
  let indexArr = [];

  const getData = (index) => {
    // console.log(num);
    // boxPosition(checked);
    let x = parseInt(document.getElementById(`addVal[${index}]`).value);
    arr.push(x);
    // console.log(arr, "inside function");
    sumArray(arr);
    indexArr.push(index + 1);
    showIndex(indexArr);
  };
  // console.log(arr, "outside function");
  // const boxPosition = (checked) => {
  //   console.log(checked);
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addComponent();
    }
  };
  function addComponent() {
    var result = boxCount.current.value;
    for (var i = 0; i < result; i++) {
      // setComponents((arr) => [
      //   ...arr,
      //   <Inputbox handleChk={getData}  />,
      // ]);
      array.push(i);
      setComponents(array);
    }
    // setComponents(Inputbox);
  }
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log("Sum is", sum);
  }

  function showIndex(indexArr) {
    console.log("index selected");
    for (var i = 0; i < indexArr.length; i++) {
      console.log(indexArr[i]);
    }
  }

  // function checkAll() {}

  return (
    <div className={styles.container}>
      <input
        type="text"
        name=""
        id=""
        ref={boxCount}
        onKeyDown={handleKeyDown}
        placeholder="Enter number of box"
      />
      <button onClick={addComponent}>Add TextBox</button>
      {/* <button onClick={checkAll}>Check all</button> */}
      {/* <div>{components}</div> */}
      <div className={styles.componentList}>
        {components &&
          components.map((index) => (
            <Inputbox
              key={index}
              handleChk={() => getData(index)}
              index={index}
            />
          ))}
      </div>
      <br />
      <p>Please open conosle of the browser</p>
    </div>
  );
}

export default App;
