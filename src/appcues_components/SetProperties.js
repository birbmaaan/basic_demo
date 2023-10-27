import React from "react";

const setTimestamp = () => { // sets user's signup date to current time;
  const currentTime = Date.now();
  window.localStorage.setItem("timestamp", currentTime);
  window.Appcues.identify(window.localStorage.currentUser, {
    signupDate: currentTime
  })
}

const setCustomTime = () => {
  const inputTime = document.getElementById("set-timestamp").value;
  const customTime = parseInt(inputTime);
  window.localStorage.setItem("timestamp", customTime);
  window.Appcues.identify(window.localStorage.currentUser, {
    signupDate: customTime
  })
}

async function updateGroupProperty() {
  const groupProperty = document.getElementById("group-prop").value;
  const groupId = document.getElementById("group-id").value;
  const groupValue = document.getElementById("group-val").value;

  window.Appcues.group(groupId, {
    [groupProperty]: groupValue
  })


        // makes a call to `https://api.appcues.com/v1/accounts/${appcuesAccountId}/users/${id}/launchpad?url=${referrer}`;
  const flows = await getAppcuesLaunchpad();
        // retrieved flows are not correct
  console.log(flows);

}

function getAppcuesLaunchpad() {
  getAppcuesLaunchpadNet();
  getAppcuesLaunchpadCom();
}

async function getAppcuesLaunchpadNet() {
  fetch('https://api.appcues.com/v1/accounts/85728/users/543211/widget?url=http%3A%2F%2Flocalhost%3A3000%2Fsettings', {
    method: "GET"
  })
}
async function getAppcuesLaunchpadCom() {
  fetch('https://api.appcues.com/v1/accounts/85728/users/543211/widget?url=http://localhost:3000/settings', {
    method: "GET"
  })
}

const SetProperties = () => {
  return (
    <div className="property-setter">
      <p>If you'd like to set the user's signupDate property to current time, you can use this button:</p>
      <button onClick={setTimestamp}>Set New Signup Date</button>
      <p>If you'd like to set a custom signup date, enter below. Make sure you use a UNIX timestamp. 
        <br/>
        <a href="https://www.epochconverter.com/">Epoch Converter</a> can help you generate one.</p>
      <input placeholder="1234567890" id="set-timestamp" type="text"/>
      <button onClick={setCustomTime}>Set Custom Signup Date</button>
      <input placeholder="group ID" id="group-id" type='text' />
      <input placeholder="group property" id="group-prop" type='text' />
      <input placeholder="group property value" id="group-val" type='text' />
      <button onClick={updateGroupProperty}>Update Group</button>
      <button onClick={getAppcuesLaunchpad}>Query Launchpad API</button>
    </div>
  )
}

export default SetProperties;