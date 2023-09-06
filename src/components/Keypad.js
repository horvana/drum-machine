import { useEffect } from "react";

function Keypad() {
  
  useEffect(() => {
    const buttons = document.querySelectorAll(".drum-pad");
    const audio = document.querySelectorAll(".clip");
    const volumeSlider = document.getElementById("volume-slider");
    

    function playAudio(audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }

    const updateVolume = () => {
      const volumeValue = volumeSlider.value / 100;
      audio.forEach((element) => {
        element.volume = volumeValue;
      });
    };

    volumeSlider.addEventListener("input", updateVolume);

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (!button.disabled) {
          playAudio(audio[index])
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      try {
        const audioElement = document.querySelector(`.clip[id="${e.key.toUpperCase()}"]`);
        const parentButton = audioElement.parentNode

        if (audioElement && !parentButton.disabled) {
          playAudio(audioElement);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  return (
    <div id="pad">
      <button className="drum-pad" id="heater-1" disabled>
        <p>Q</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          className="clip"
          id="Q"
        ></audio>
      </button>
      <button className="drum-pad" id="heater-2" disabled>
        <p>W</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          className="clip"
          id="W"
        ></audio>
      </button>
      <button className="drum-pad" id="heater-3" disabled>
        <p>E</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          className="clip"
          id="E"
        ></audio>
      </button>
      <button className="drum-pad" id="heater-6" disabled>
        <p>A</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          className="clip"
          id="A"
        ></audio>
      </button>
      <button className="drum-pad" id="open-hh" disabled>
        <p>S</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          className="clip"
          id="S"
        ></audio>
      </button>
      <button className="drum-pad" id="kick-n-hat" disabled>
        <p>D</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          className="clip"
          id="D"
        ></audio>
      </button>
      <button className="drum-pad" id="Kick" disabled>
        <p>Z</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          className="clip"
          id="Z"
        ></audio>
      </button>
      <button className="drum-pad" id="closed-hh" disabled>
        <p>X</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          className="clip"
          id="X"
        ></audio>
      </button>
      <button className="drum-pad" id="heater-4" disabled>
        <p>C</p>
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          className="clip"
          id="C"
        ></audio>
      </button>
    </div>
  );
}

export default Keypad;
