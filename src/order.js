import React, { useState } from 'react';
import "./order.css"
import imgone from "./logo-white-text.svg";
import Calendar from 'react-calendar';


function App() {
  const [labelState, setLabelState] = useState("labelone");
  const handle = (label) => {
    setLabelState(label)
  }

  const [step, setStep] = useState(1);
  const [stepText, setStepText] = useState([
    "What do you need help with?",
    "When is your assignment due?",
    "Basic assignment details",
    "Task size",
  ]);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  }

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  const [steptwo, setsteptwo] = useState(1);
  const [steptwotext, setsettwotext] = useState([
    "What do you need help with?",
    "Which year are you in?",
    "When is your paper due?",
    "Basic paper details",
    "Detailed requirements",
    "What do you expect?",
    "Upgrades"
  ]);
  const handlenexttwo = () => {
    if (steptwo < 7) {
      setsteptwo(steptwo + 1);
    }
  }
  const handlepretwo = () => {
    if (steptwo > 1) {
      setsteptwo(steptwo - 1);
    }
  }
  const [stepthree, setstepthree] = useState(1);
  const [stepthreetext, setstepthreetext] = useState([
    "What do you need help with?",
    "When is your assignment due?",
    "Basic assignment details",
    "Task size",
    "Additional services"
  ])
  const handlenextthree = () => {
    if (stepthree < 5) {
      setstepthree(stepthree + 1);
    }
  }
  
  const handleprethree = () => {
    if (stepthree > 1) {
      setstepthree(stepthree - 1);
    }
  }
  const next = () => {
    if (labelState === 'labelone') {
      handleNextStep();
    }
    if (labelState === 'labeltwo') {
      handlenexttwo();
    }
    if (labelState === 'labelthree') {
      handlenextthree();
    }
  }
  const pre = () => {
    if (labelState === 'labelone') {
      handlePreviousStep();
    }
    if (labelState === 'labeltwo') {
      handlepretwo();
    }
    if (labelState === 'labelthree') {
      handleprethree();
    }

  }
  const run = () => {
    if (labelState === 'labelone') {
      return (
        <>
          <p id='pone'>STEP {step}/4</p>
          <h1 id='hone'>{stepText[step - 1]}</h1></>
      )
    }
    else if (labelState === 'labeltwo') {
      return (
        <>
          <p id='pone'>STEP {steptwo}/7</p>
          <h1 id='hone'>{steptwotext[steptwo - 1]}</h1>
        </>
      )
    }
    else if (labelState === 'labelthree') {
      return (
        <>
          <p id='pone'>STEP {stepthree}/5</p>
          <h1 id='hone'>{stepthreetext[stepthree - 1]}</h1>
        </>
      )
    }
  }
  const [size, setsize] = useState("small");
  const handlesize = (size) => {
    setsize(size);
  }
  const extra = () => {
    if (size === 'small') {
      return (
        <>
          <p>Example:
            up to 7 short practice problems or theoretical questions</p>
          <p>Possible deliverables:
            Simple computationsSimple charts and diagramsShort answers to questions</p>
        </>
      )
    }
    if (size === 'extra') {
      return (
        <>
          <p>Example:
            up to 3 short practice problems or theoretical questions</p>
          <p>Possible deliverables:
            Simple computationsShort answers to questions</p>
        </>
      )
    }
    if (size === 'medium') {
      return (
        <>
          <p>Example:
            up to 15 practice problems or theoretical questions</p>
          <p>Possible deliverables:
            ComputationsCharts and diagramsDetailed explanations</p>
        </>
      )
    }
    if (size === 'large') {
      return (
        <>
          <p>Example:
            moderately complex problem analysis project (using applied math methods)</p>
          <p>Possible deliverables:
            ComputationsCharts and diagramsDetailed reportPresentation</p>
        </>
      )
    }
  }
  const [value, setvalue] = useState(1);
  const [w, setw] = useState(275)
  const [checked, setChecked] = useState(false)
  const m = () => {
    if (value > 1) {
      setvalue(value - 1);
      setw(checked ? w - 550 : w - 275);
    }
  }
  const a = () => {
    if (value < 100) {
      setvalue(value + 1)
      setw(checked ? w + 550 : w + 275);
    }
  }

  const check = () => {
    setChecked(!checked);
    setw(checked ? 275 : 550);
  }
  const [more, setmore] = useState('one');
  const moreee = (lab) => {
    setmore(lab)
  }
  const [valuet, setvaluet] = useState(1);
  const bd = () => {
    if (valuet < 10) {
      setvaluet(valuet + 1)
    }
  }
  const cd = () => {
    if (valuet > 0) {
      setvaluet(valuet - 1)
    }
  }
  const [valuetc, setvaluetc] = useState(1);
  const db = () => {
    if (valuetc < 10) {
      setvaluetc(valuetc + 1)
    }
  }
  const dc = () => {
    if (valuetc > 0) {
      setvaluetc(valuetc - 1)
    }
  }
  const moree = () => {
    if (more === 'one') {
      return (
        <>
          <p>+ charts</p>
        </>
      )
    }
    else if (more === 'two') {
      return (
        <>
          <div id='fd'>
            <h6>charts</h6>
            <p onClick={cd}>-</p>
            <p>{valuet}</p>
            <p onClick={bd}>+</p>
          </div>
        </>
      )
    }
  }
  const [slides, setslides] = useState('one');
  const less = (amount) => {
    setslides(amount)
  }
  const okk = () => {
    if (slides === 'one') {
      return (
        <>
          <p>+ Slides</p>
        </>
      )
    }
    else if (slides === 'two') {
      return (
        <>
          <div id='fd'>
            <h6>slides</h6>
            <p onClick={dc}>-</p>
            <p>{valuetc}</p>
            <p onClick={db}>+</p>
          </div>
        </>
      )
    }
  }
  const [ref, setref] = useState(1);
  const rem = () => {
    if (ref > 1) {
      setref(ref - 1)
    }
  }
  const rea = () => {
    if (ref < 10) {
      setref(ref + 1)
    }
  }
  const [valyue, onChange] = useState(new Date());
  const render = () => {
    if (labelState === 'labelone' && step === 2) {
      return (
        <>
       <Calendar onChange={onChange} value={valyue} />
        </>
      )
    }
    else if (labelState === 'labelone' && step === 3) {
      return (
        <>
          <h4 id='as'>Assignment details</h4>
          <p id='ap'>Discipline</p>
          <select id='sone'>
            <option>math</option>
            <option>physics</option>
            <option>programming</option>
            <option>ML</option>
            <option>computer</option>
          </select>
          <p id='ap'>Software</p>
          <select id='sone'>
            <option>excel</option>
            <option>muix</option>
            <option>bootstrap</option>
            <option>tailwand</option>
            <option>jango</option>
          </select>
          <p id='ap'>instruction</p>
          <textarea placeholder='type anything' id='tone'></textarea>
        </>
      )
    }
    else if (labelState === 'labelone' && step === 4) {
      return (
        <>
          <h4 id='ast'>Task size</h4>
          <div id='aptt'>
            <p onClick={() => handlesize('extra')}>Extra small</p>
            <p onClick={() => handlesize('small')}>small</p>
            <p onClick={() => handlesize('medium')}>Medium</p>
            <p onClick={() => handlesize('large')}>Large</p>
          </div>
          <div id='uf'>
            {extra()}
          </div>
        </>
      )
    }
    else if (labelState === 'labelthree' && stepthree === 2) {
      return (
        <>
          <div id='ho'>
          <Calendar onChange={onChange} value={valyue} />
          </div>
        </>
      )
    }
    else if (labelState === 'labelthree' && stepthree === 3) {
      return (
        <>
          <h4 id='as'>Assignment details</h4>
          <p id='ap'>Programming language</p>
          <select id='sone'>
            <option>React js</option>
            <option>React native</option>
            <option>js</option>
            <option>python</option>
            <option>css</option>
          </select>
          <p id='ap'>Category</p>
          <select id='sone'>
            <option>front-end developer</option>
            <option>back-end developer</option>
            <option>full stack</option>
            <option>android developer</option>
            <option>ios</option>
          </select>
          <p id='ap'>instruction</p>
          <textarea placeholder='type anything' id='tone'></textarea>
        </>
      )
    }
    else if (labelState === 'labelthree' && stepthree === 4) {
      return (
        <>
          <div id='ok'>
            <h4 id='ast'>Task size</h4>
            <div id='aptt'>
              <p onClick={() => handlesize('extra')}>Extra small</p>
              <p onClick={() => handlesize('small')}>small</p>
              <p onClick={() => handlesize('medium')}>Medium</p>
              <p onClick={() => handlesize('large')}>Large</p>
            </div>
            <div id='uf'>
              {extra()}
            </div>
          </div>
        </>
      )
    }
    else if (labelState === 'labelthree' && stepthree === 5) {
      return (
        <>
          <h4>Assignment details</h4>
          <div id='ji'>
            <div><input type='checkbox' /><span>Advanced programming level</span></div>
            <div><input type='checkbox' /><span>Well-commited code</span></div>
            <div><input type='checkbox' /><span>Code plagiarism report</span></div>
          </div>
        </>
      )
    }
    else if (labelState === 'labeltwo' && steptwo === 2) {
      return (
        <>
          <h4 id='ltt'>Choose what best describes your education level</h4>
          <div id='lt'>
            <p>Senior in hight school</p>
            <p>Undergraduate student (years 1-2)</p>
            <p>Undergraduate student (years 3-4)</p>
            <p>Graduate student</p>
            <p>PhD student</p>
          </div>
        </>
      )
    }
    else if (labelState === 'labeltwo' && steptwo === 3) {
      return (
        <>
        <div id='bsdk'>
          <Calendar onChange={onChange} value={valyue} />
        </div>
        </>
      )
    }
    else if (labelState === 'labeltwo' && steptwo === 4) {
      return (
        <>
          <h4 id='as'>Provide general requirements</h4>
          <p id='ap'>Types of paper</p>
          <select id='sone'>
            <option>Speech</option>
            <option>Book</option>
            <option>Reviews</option>
            <option>Information</option>
          </select>
          <p id='ap'>Subject or Discipline</p>
          <select id='sone'>
            <option>English</option>
            <option>Film</option>
            <option>Dramas</option>
            <option>Netflix</option>
          </select>
          <p id='ap'>Pages</p>
          <div id='jn'>
            <p id='m' onClick={m}>-</p>
            <p id='v'>{value}</p>
            <p id='a' onClick={a}>+</p>
            <p id='ww'>{w} Words</p>
            <p id='i'><input type='checkbox' onClick={check} />i need single page</p>
            <p id='more' onClick={() => moreee('two')}>{moree()}</p>
            <p id='less' onClick={() => less('two')}>{okk()}</p>
          </div>
        </>
      )
    }
    else if (labelState === 'labeltwo' && steptwo === 5) {
      return (
        <>
          <h4 id='o'>Specify additional instructions</h4>
          <textarea id='oo' placeholder='type anything'></textarea>
          <h5 id='o'>Paper format</h5>
          <select id='sone'>
            <option>MLA 8</option>
            <option>APA 7</option>
          </select>
          <h5 id='o'>Refrences to be used</h5>
          <p id='m' onClick={rem}>-</p>
          <p id='v'>{ref}</p>
          <p id='a' onClick={rea}>+</p>
        </>
      )
    }
    else if (labelState === 'labeltwo' && steptwo === 6) {
      return (
        <>
          <h5 id='op'>Choose the paper level you prefer</h5>
          <div id='opd'>
            <p>Basic paper for everyday homework</p>
            <p>Advanced paper for essential assignments</p>
            <p>Top-level paper For tasks that matter the most</p>
          </div>
          <h5 id='op'>Choose your language style</h5>
          <p id='ope'>32% of our clients order Proficient English for Philosophy assignments</p>
          <div id='opd'>
            <p>Simple English for everyday homework</p>
            <p>Regular English for essential assignments</p>
            <p>Froficient English For tasks that matter the most</p>
          </div>
        </>
      )
    }
    else if (labelState === 'labeltwo' && steptwo === 7) {
      return (
        <>
          <h5 id='oph'>Add more services to your order</h5>
          <p id='opp'><input type='checkbox' />Printable source</p>
        </>
      )
    }
  };
  return (
    <div>
      <div className='headd'>
        <img src={imgone} />
      </div>
      <div className='bodyone'>
        <p>placing an order</p>
        <p>work in progress</p>
        <p>delivery date</p>
        <p>due date</p>
      </div>
      <div className='bodytwoo'>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="blue" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="blue" class="bi bi-card-text" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
          <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
        </svg>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="red" class="bi bi-flag" viewBox="0 0 16 16">
          <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
        </svg>
      </div>
      <div className='bodyfourr'>
        <p>sep 28,12:50 AM</p>
        <p>sep 30</p>
        <p>Oct 3, 12:51 AM</p>
        <p>Oct 4</p>
      </div>
      <div className='bodythreee'>
        <div id='onee'>
          {run()}
        </div>
        <div id='twoo'>
          <div id='btwoo'>
            {render()}
            <h3 style={{ display: step === 1 ? 'block' : 'none' }}>Choose the task you want to delegate</h3>
            <div onClick={() => handle("labeltwo")} style={{ backgroundColor: labelState === "labeltwo" ? "rgb(209, 209, 255)" : "white", display: step === 1 ? 'block' : 'none' }}>
              <h3>Academic writing</h3>
              <p>eg essay, research</p>
            </div>
            <div onClick={() => handle("labelthree")} style={{ backgroundColor: labelState === "labelthree" ? "rgb(209, 209, 255)" : "white", display: step === 1 ? 'block' : 'none' }}>
              <h3>Programming</h3>
              <p>eg essay, research</p>
            </div>
            <div onClick={() => handle("labelone")} style={{ backgroundColor: labelState === "labelone" ? "rgb(209, 209, 255)" : "white", display: step === 1 ? 'block' : 'none' }}>
              <h3>Calculations</h3>
              <p>eg essay, research</p>
            </div>
          </div>
          <button onClick={next} id='next'>Next</button>
          <button onClick={pre} id='pre'>Previous</button>
        </div>
      </div>
      <div id='ull'>
        <ul>
          <li>cookie policy</li>
          <li>Terms and conditions</li>
          <li>moneyBack Policy</li>
          <li>Privacy Policy</li>
          <li>Social Responsibility Policy</li>
        </ul>
      </div>
    </div>
  )
}
export default App

