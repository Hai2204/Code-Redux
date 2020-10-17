import React, { Component } from 'react';

function tick(){
    var timeNow = document.querySelector('#time')
    var date = new Date();
    const now = date.toLocaleTimeString();
    const toDate = date.toLocaleDateString();
    timeNow.innerHTML = `<div className="uk-h2">${now} - ${toDate}</div>`
   } 
  setInterval(tick, 1000);
class Time extends Component {
  render() {
        return (
            <div id="time" className="uk-visible@m">
            </div>
        );
    }
}

export default Time;