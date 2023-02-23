import React, { useState } from "react";

const UploadDataPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (newValue === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }

    console.log(newValue, isDisabled);
  };

  function onSubmit() {
    console.log(inputValue, isDisabled);
  }

  return (
    <div>
      <h1>UploadDataPage</h1>
      <input
        onChange={handleInputChange}
        type="file"
        placeholder="path to csv"
      />
      <button disabled={isDisabled} onClick={onSubmit}>
        Upload
      </button>
    </div>
  );
};

export default UploadDataPage;
