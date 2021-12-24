import { useState } from "react";
import "./InputScreensLonely.scss";

const INPUTS = [
  {
    label: "I am feeling",
    preText: ["CONTENT", "CARED", "IMPORTANT", "WORTHY"]
  },
  {
    label: "I am manifesting",
    preText: ["JOY", "COMPANIONSHIP", "PEACE", "LOVE"]
  },
  {
    label: "My life will have",
    preText: ["LAUGHTER", "MEANING", "RELATIONSHIPS", "SATISFACTION"]
  }
];

const InputScreensLonely = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const handleOnChange = e => {
    if (e.target.name === "input-1") {
      setValue1(e.target.value);
    } else if (e.target.name === "input-2") {
      setValue2(e.target.value);
    } else {
      setValue3(e.target.value);
    }
  };

  const handlePreText = (e, pretext, index) => {
    let selected;
    if (index === 1) {
      selected = e.target.classList.contains("selected");
      let value = resolveInputValue(selected, value1, pretext);
      setValue1(value);
    } else if (index === 2) {
      selected = e.target.classList.contains("selected");
      let value = resolveInputValue(selected, value2, pretext);
      setValue2(value);
    } else {
      selected = e.target.classList.contains("selected");
      let value = resolveInputValue(selected, value3, pretext);
      setValue3(value);
    }

    if (!selected) e.target.classList.add("selected");
    else e.target.classList.remove("selected");
  };

  const resolveInputValue = (selected, input, pretext) => {
    let value = selected
      ? input.includes(`, ${pretext}`)
        ? input.replace(`, ${pretext}`, "")
        : input.replace(`${pretext}`, "")
      : `${input ? input + ", " + pretext : pretext}`;

    return value;
  };
  return (
    <div className="input-container">
      {INPUTS.map((item, index) => (
        <div className="input-box">
          <div className="input">
            <div className="text"> {item.label}</div>
            <input
              type="text"
              name={`input-${index + 1}`}
              value={
                index + 1 === 1 ? value1 : index + 1 === 2 ? value2 : value3
              }
              onChange={handleOnChange}
              placeholder="Type Something here"
            />
          </div>
          <div className="pre-text">
            {item.preText.map((text, idx) => (
              <div
                key={idx}
                onClick={e => handlePreText(e, text, index + 1)}
                className={`pre-text-${idx + 1}`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="footer-btn">
        <button
          type="button"
          className="btn game-modal-button"
          onClick={() => {}}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default InputScreensLonely;
