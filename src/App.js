import './App.css';
import Keypad from './components/Keypad';
import Display from './components/Display';
import { useEffect } from 'react'
import React from 'react'
import { connect } from 'react-redux';
import { updateMarginLeft } from './redux/actions/cssActions';

function App() {

  const togglePower = () => {
    const toggleSwitch = document.getElementById("toggle-switch")
    const button = document.querySelectorAll(".drum-pad")
    button.forEach(drumPad => {
      toggleSwitch.checked ? drumPad.removeAttribute("disabled") : drumPad.setAttribute("disabled", "disabled");
    })
  }

  useEffect(() => {
    const toggleSwitch = document.getElementById("toggle-switch")
    toggleSwitch.addEventListener("change", togglePower)
  }, [])
  


  return (
      <div id="drum-machine">
        <Keypad />
        <Display />
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    marginLeft: state.css.marginLeft
  }
}

const mapDispatchToProps = {
  updateMarginLeft
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
