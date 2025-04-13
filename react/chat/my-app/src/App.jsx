import { useState, setState } from 'react'

import axios from 'axios'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AskBox() {
  const [answer,setAnswer] = useState('')
  const [question,setQuestion] = useState("")

  // const [name,setName] = useState('')


  // const handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  
  // const handleClick = (evt) => {
  //   // console.log(this.state);
  //   evt.preventDefault();
  //   console.log(question);
  // }

  const handleClick = async(evt) => {
    // const data = {"test":"test"}//await axios.get('api/foo')
    evt.preventDefault();
    console.log(question);

    let data = JSON.stringify({
      "question": question
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/items',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    const res =  await axios.request(config);
    console.log(res);
    setAnswer({
      data: res.data.output,
      loading: false
  });
    console.log(answer);
  }

  return (
    <div style={{textAlign:'left'}}>
      <div style={{
            width: '350px',
            height: '200px',
            padding: '15px',
            border: '2px dotted',
            outline: 'none',
            textAlign:'left',
            resize: 'none'
          }}
          id="answer">{answer.data}</div>
      <div>
        <input style={{
            width: '230px',
            padding: '15px',
            borderRadius: '5px',
            outline: 'none',
            resize: 'none',
            margin: '10px 10px 10px 10px'
          }}
          // value = {this.state.textareaVal}
          value = {question}
          onChange={e => setQuestion(e.target.value)}
          id="question" placeholder="Ask me anything…" />

        <button type="button" value="Ask Me" id="ask" onClick={handleClick} >Ask Me</button>
        {/* <button>

          Ask Me
        </button> */}
      </div>
  </div>);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{textAlign:'left'}}>
        Hello, this is your chat robot:
        <AskBox />
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
