function anotherAddEventListener(typeOfEvent, callback) {
  //Detect Event code ...

  /* So when the event happens, pressing a key on the keyboard,
    then this object gets created based on that event. */
  let eventThatHappened = {
    eventType: 'keypress',
    key: 'p',
    durationOfKeypress: 2,
  };

  //Now we can pass that object back through the callback method
  if (eventThatHappened.eventType === typeOfEvent) {
    //Check if the type of the event that happened is equal to
    //the type that the programmer was looking for then it will
    //go ahead and trigger the callback function.
    callback(eventThatHappened);
  }
}

anotherAddEventListener('keypress', function (event) {
  console.log(event);
});
