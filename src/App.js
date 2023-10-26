import React from "react";
import { BrowserRouter} from "react-router-dom";
import { logEvents } from "./appcues_components/EventLog";
import AppcuesRouter from "./Appcues";

/*
The AppcuesRouter contains the Appcues.page call, as well as all the app's page
changes. It needs to be additionally wrapped in BrowserRouter to function properly.

This is also where the Appcues.identify call is made, as well as any event listeners
like Appcues.on so that they will be called every time the page loads.
*/

const App = () => {

  if (true) {
    window.AppcuesSettings = { enableURLDetection: true};
    const user = window.user;
    const appcuesScript = document.createElement('script');
    appcuesScript.src = 'https://fast.appcues.com/85728.js';

    appcuesScript.onload = () => 
      console.log('testing identify');
      // window.Appcues.identify(user);
    
    const body = document.getElementById('body');
    body.append(appcuesScript);
  }

  if (!window.localStorage.currentUser) { // persists the current user across page refresh
    window.localStorage.setItem("currentUser", "testUser"); // if no current user, set userID to "testUser"
  }

  if (!window.localStorage.timestamp) { // persists the timestamp across refresh
    window.localStorage.setItem("timestamp", Date.now()); // if no timestamp, sets it to now
  }
  
  const userId = window.localStorage.currentUser;
  const currentTime = parseInt(window.localStorage.timestamp);

  console.log('hello');
  // window.Appcues.identify(543211, { // feel free to add in any user properties here
  //   school: {
  //     id: 12345
  //   },
  //   role: "tester",
  //   signupDate: currentTime,
  //   email: 'test@test.com'
  // })
//  window.Appcues.page()

  // setTimeout(() => {
  //   console.log("Delayed for 1 second.");
  //   window.Appcues.group('group1', {group1: "true"});
  // }, "1000")
    
// window.Appcues.loadLaunchpad('#launchpad', { position: 'right' });


  // window.Appcues.anonymous();

  // window.Appcues.on("all", function(name, payload) {
  //   // console.log(name);     // uncomment these two lines if you'd like to
  //   // console.log(payload);  // log all events into the dev tools console

  //   logEvents(name, payload); // adds events into the event log on the page
  // })

  console.log('all done');
  
  return ( 
    <BrowserRouter> 
      <AppcuesRouter /> 
    </BrowserRouter>
  )
}

export default App;
