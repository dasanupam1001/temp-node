// Events

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on - listen for an event
// emit - emit an event

customEmitter.on('response', (name, id) => {
  console.log(`data received: name: ${name}, id: ${id}` )
})  // subscribe to the event

customEmitter.on('response', () => {
  console.log('here is another logic')
}) 

customEmitter.emit('response','Anupam',38) // first we have to listen to the event and then emit it, o/w it is not gonna work // one emit can listen to multiple events and will accept arguements accordingly