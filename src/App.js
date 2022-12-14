import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "π": "Car",
    "π": "Police Car",
    "π": "Taxi",
    "πΊ": "Auto Rickshaw",
    "π": "SUV",
    "π": "Bus",
    "π": "Mini Bus",
    "π": "Trolley Bus",
    "π": "Ambulance",
    "π": "Fire Engine",
    "π": "Delivery Van",
    "π": "Articulated Lorry",
    "π": "Tractor",
    "π¦½": "Manual Wheelchair",
    "π¦Ό": "Motorized Wheelchair",
    "πΉ": "SkateBoard",
    "π²": "Bicycle",
    "π΄": "Kick Scooter",
    "π΅": "Motor Scooter",
    "π": "MotorCycle",
    "π": "RacinG Car",
    "π": "High-speed Train",
    "π": "Bullet Train",
    "π": "Light Rail",
    "π": "Mono Rail",
    "π": "Railway Carriage",
    "π": "Tram Car",
    "π": "Train",
    "π": "Tram",
    "π": "Metro",
    "π": "Suspension Railway",
    "π ": "Mountain Cableway",
    "π‘": "Aerial Tramway",
    "π": "Locomotive",
    "β": "Aeroplane",
    "πͺ": "Parachute",
    "π": "Helicopter",
    "π": "Rocket",
    "πΈ": "Flying Saucer",
    "π°": "Satellite",
    "β΅": "Sailing Boat",
    "π€": "Speed Boat",
    "π₯": "Motor Boat",
    "β΄": "Ferry",
    "π³": "Passenger Shipe",
    "π’": "Ship"
  };

  var emojiWeKnow = Object.keys(emojiDictionary);

  let emojiInputHandler = (event) => {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "ERROR 404 : We Dont Have It In The Database";
    }

    setMeaning(meaning);
  };

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>πTransport Emoji Dictionaryπ</h1>
      <input onChange={emojiInputHandler}></input>

      <div className="meaningstyle">{meaning}</div>

      <div className="heading">EMOJIS WE KNOW</div>
      <div>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
