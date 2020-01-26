import { readable } from 'svelte/store';

const distance = readable(
  {
    cm: 'UNKNOWN DISTANCE',
    inches: 'UNKNOWN DISTANCE'
  },
  (set) => {
    var connection = new WebSocket('ws://127.0.0.1:2222');
    connection.onopen = function() {
      console.log('opened');
    };
    connection.onmessage = function(message) {
      const distance = JSON.parse(message.data);
      set(distance);
    };
  }
);

export default distance;
