import React, { useState } from "react";

const UploadDataPage = () => {
  const [inputFileValue, setInputFileValue] = useState("");
  const [inputEventName, setInputEventName] = useState("");
  const [isDisabled, setButtonDisabled] = useState(true);
  const [isCheckedList, setIsCheckedList] = useState([]);

  function submitButtonHandler({ filename, eventname }) {
    if (filename === "" || eventname === "") {
      setButtonDisabled(true); // no file is passed to input
    } else {
      setButtonDisabled(false); // we have a file to input
    }
  }

  function handleInputEventChange(event) {
    const eventNewName = event.target.value;
    setInputEventName(eventNewName);

    submitButtonHandler({ filename: inputFileValue, eventname: eventNewName });
  }

  function handleCheckboxChange(event) {
    const { id, checked } = event.target;
    let newCheckedListState = isCheckedList;

    if (newCheckedListState.some((obj) => obj.id === id)) {
      // remove the object of this id from the list
      newCheckedListState = newCheckedListState.filter((obj) => obj.id !== id);
    } else {
      //append the authorized user in
      newCheckedListState.push({ id, checked }); // here i can change the atributes to whatever i need to pass to backend about the authorized users
    }
    setIsCheckedList(newCheckedListState);
  }

  function handleFileInputChange(event) {
    const newFilename = event.target.value;
    setInputFileValue(newFilename);

    submitButtonHandler({ filename: newFilename, eventname: inputEventName });
  }

  function onSubmit() {
    console.log(inputFileValue, isDisabled);

    // make api call for passing the data to backend
    // passing to backend: the csv , the list of authorized users , event name
    //<==================================================================================================== add
    console.log(isCheckedList);

    // fetch here
  }

  // fetch here
  //make api call for get the user data and fill the users array
  const users = [
    { id: 0, name: "mike" },
    { id: 1, name: "osman" },
    { id: 2, name: "osman" },
    { id: 3, name: "osman" },
    { id: 4, name: "osman" },
    { id: 5, name: "osman" },
  ];

  return (
    <div>
      <h1>UploadDataPage</h1>
      <input
        type="text"
        placeholder="Event name"
        onChange={handleInputEventChange}
      />
      <br />
      <input
        type="file"
        accept=".csv, application/vnd.ms-excel, text/csv"
        capture="filesystem"
        lang="en"
        multiple={false}
        name="file"
        title="Select CSV File"
        onChange={handleFileInputChange}
      />
      <button disabled={isDisabled} onClick={onSubmit}>
        Upload
      </button>
      <h4>Authorized Users</h4>
      <ul>
        {users.map((user, index) => (
          <div className="user-checkbox-pair">
            <li key={user.id}>{user.name}</li>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              id={user.id}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UploadDataPage;
