import React, { useState } from "react";

const ColorGuesser = () => {
  const [guessingResult, setGuessingResult] = useState("");

  const randomInt = (number) => {
    let result = Math.floor(Math.random() * number);
    switch (result) {
      case 10:
        return "A";
      case 11:
        return "B";
      case 12:
        return "C";
      case 13:
        return "D";
      case 14:
        return "E";
      case 15:
        return "F";
    }
    return result;
  };

  const createRandomColor = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr[i] = randomInt(16);
    }

    return "#" + arr.join("");
  };

  const randomColorList = () => {
    let arr = [];

    for (let i = 0; i < 3; i++) {
      arr[i] = createRandomColor();
    }

    return arr;
  };

  const [colorArr, setColorArr] = useState(randomColorList());
  // const colorArr = randomColorList();

  const [correctOne, setCorrectOne] = useState(randomInt(3));
  // const correctOne = randomInt(3);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            setCorrectOne(randomInt(3));
            setColorArr(randomColorList());
            setGuessingResult("");
          }}
        >
          click to retry
        </button>

        <div
          style={{
            width: 300,
            height: 300,
            backgroundColor: colorArr[correctOne],
          }}
        ></div>
        <div>
          <br />
          <button
            onClick={() => {
              correctOne === 0
                ? setGuessingResult("Correct!")
                : setGuessingResult("Oops, try again");
            }}
          >
            {" "}
            {colorArr[0]}{" "}
          </button>
          <button
            onClick={() => {
              correctOne === 1
                ? setGuessingResult("Correct!")
                : setGuessingResult("Oops, try again");
            }}
          >
            {" "}
            {colorArr[1]}{" "}
          </button>
          <button
            onClick={() => {
              correctOne === 2
                ? setGuessingResult("Correct!")
                : setGuessingResult("Oops, try again");
            }}
          >
            {" "}
            {colorArr[2]}{" "}
          </button>
        </div>
        <div>{guessingResult}</div>
      </div>
    </>
  );
};

export default ColorGuesser;
