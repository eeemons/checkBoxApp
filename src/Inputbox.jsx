import styles from "./css/inputbox.module.css";
import { useRef, useState } from "react";
const Inputbox = (props) => {
  const inputVal = useRef(null);
  // console.log("Individual nums" + " " + props.num);
  const [checked, setChecked] = useState(true);

  // console.log(props.index, "from input box");

  const handleChk = () => {
    setChecked(!checked);
    if (checked == true) {
      handleChange();
    }
  };
  const handleChange = () => {
    var res = parseInt(inputVal.current.value);
    props.handleChk(res, checked);
    // console.log(res);
  };

  return (
    <div className={styles.container}>
      <input type="checkbox" onClick={handleChk} name="" id="" />
      <input
        id={`addVal[${props.index}]`}
        type="text"
        ref={inputVal}
        placeholder="Enter numbers"
      />
    </div>
  );
};
export default Inputbox;
