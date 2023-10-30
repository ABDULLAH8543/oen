import React, { useState } from 'react';
import "./App.css";
import imgone from "./logo-white-text.svg";
import user from "./user.jfif";
import per from "./per.png"
import usertwo from "./userfsd.jfif"
import book from "./book.svg"
import notes from "./baj.svg"
import baj from "./baj.svg"
import cal from "./cal.svg"
import b from "./b.webp"
import m from "./m.webp"
import c from "./c.webp"
import d from "./d.webp"
import clock from "./clock.svg"
import discover from "./discover.svg"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Order from "./order"

function App() {

  const [labelState, setLabelState] = useState("labelone");

  const handleLabelClick = (label) => {
    setLabelState(label);
  };

  const renderLabelContent = () => {
    if (labelState === "labelone") {
      return (
        <>
          <h6 id="types">Type of paper</h6>
          <select name="" id="firstoptions">
            <option>assignment</option>
            <option>blog post</option>
            <option>information</option>
            <option>nothing</option>
          </select>
          <h6 id="optionheadingtwo">Academic level</h6>
          <select name="" id="secoptions">
            <option>1-2</option>
            <option>3-4</option>
            <option>5-6</option>
          </select>
        </>
      );
    } else if (labelState === "labeltwo") {
      return (
        <>
          <h6 id="types">Type of service</h6>
          <select name="" id="firstoptions">
            <option>programming</option>
            <option>html</option>
            <option>css</option>
            <option>js</option>
            <option>python</option>
            <option>ruby</option>
          </select>
          <h6 id="optionheadingtwo">Description</h6>
          <select name="" id="secoptions">
            <option>web developer</option>
            <option>app developer</option>
            <option>full stack</option>
          </select>
        </>
      );
    }
  };
  const [optionstwo, setoptionstwo] = useState("optionthree");
  const optiontwo = (option) => {
    setoptionstwo(option)
  }
  const innertwo = () => {
    if (optionstwo === "optionthree") {
      return (
        <>
          <div id="opt">
            <p>PAPER TITLE</p>
            <p id="h">SERVICES TYPE</p>
            <p id="w">discipline</p>
            <p id="r">SIZE</p>
            <p id="q">DEADLINE</p>
          </div>
          <div id="t">
            <p id="tt">Graphic User Interface Development in Java Swing</p>
            <p>Programming</p>
            <p>Java</p>
            <p>XS</p>
            <p>8h</p>
            <p>Read more</p>
          </div>
          <div id="ttwo">
            <p id="tt">Hypothesis Testing in R: Investigating Respiratory Status in a Clinical Trial</p>
            <p>Programming</p>
            <p>R</p>
            <p>XS</p>
            <p>8h</p>
            <p>Read more</p>
          </div>
          <div id="tthree">
            <p id="tt">Data Visualization in Python using Matplotlib Library</p>
            <p>Programming</p>
            <p>Python</p>
            <p>XS</p>
            <p>8h</p>
            <p>Read more</p>
          </div>
        </>
      )
    }
    else if (optionstwo === "optionfour") {
      return (
        <>
          <div id="opt">
            <p>PAPER TITLE</p>
            <p id="h">Academic level</p>
            <p id="w">Paper type</p>
            <p id="r">Paper format</p>
            <p id="q">Discipline</p>
          </div>
          <div id="t">
            <p id="tt">Antibiotic Resistance Now "Global Threat", WHO Warns by Pippa Stephens</p>
            <p>Master's</p>
            <p>Article Summary</p>
            <p>Oxford</p>
            <p>Health Care</p>
            <p>Read more</p>
          </div>
          <div id="ttwo">
            <p id="tt">Secret Hiding Places as I Was a Child</p>
            <p>High school</p>
            <p>Composition</p>
            <p>APA</p>
            <p>English 101</p>
            <p>Read more</p>
          </div>
          <div id="tthree">
            <p id="tt">Lab Report</p>
            <p>College</p>
            <p>Lab Report</p>
            <p>APA 6</p>
            <p>Physics</p>
            <p>Read more</p>
          </div>
        </>
      )
    }
  }
  const [height, setheight] = useState("15vh");
  const heightfun = () => {
    setheight(height === "15vh" ? '25vh' : "15vh")
  }
  const [heighttwoo, setheighttwoo] = useState("15vh")
  const heighttwo = () => {
    setheighttwoo(heighttwoo === '15vh' ? '25vh' : '15vh');
  }
  const [heightthreee, setheightthreee] = useState("15vh")
  const heightthree = () => {
    setheightthreee(heightthreee === '15vh' ? '25vh' : '15vh');
  }
  const [heightfourr, setheightfourr] = useState("15vh")
  const heightfour = () => {
    setheightfourr(heightfourr === '15vh' ? '25vh' : '15vh');
  }
const [navbar, setNavbar] = useState("-240px");
const [navInner, setNavInner] = useState("☰");

const toggleNavbar = () => {
  if (navbar === "-240px") {
    setNavbar("90%");
    setNavInner("X");
  } else {
    setNavbar("-240px");
    setNavInner("☰");
  }}
  return (

    <div>
      <div className="head">
        <img src={imgone} alt="" id="logo" />
        <label className="checkbtn">
          <i id="bnav" onClick={toggleNavbar}>
        {navInner}
      </i>
        </label>
        <ul style={{ right: navbar }}>
          <li>how we work</li>
          <li>samples</li>
          <li>reviews</li>
          <li>services</li>
          <li>contant us</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" id="userlogo" width="26" height="26" fill="yellow"
            class="bi bi-person" viewBox="0 0 16 16">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg><span id='spanspan'>manage orders</span>
          </li>
          <li><Link to="Order"><button id="orderbtn">order now</button></Link></li>
        </ul>
      </div>
      <div id="contentbody">
        <h1 id="innerheading">DO MY ASSIGNMENT:
          <span>HELP FROM GENUINE EXPERTS</span>
          <img src={user} alt="" id="userimg" />
        </h1>
        <div class="stars">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="yellow" class="bi bi-star"
            viewBox="0 0 16 16">
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="yellow" class="bi bi-star"
            viewBox="0 0 16 16">
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="yellow" class="bi bi-star"
            viewBox="0 0 16 16">
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="yellow" class="bi bi-star"
            viewBox="0 0 16 16">
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
          <span id="rating">4.9</span>
        </div>
      </div>
      <div>
        <p id="based">based on 294847 <span>customer's reviews</span></p>
      </div>
      <div class="body">

        <div id="label">

          <div id="labelone" onClick={() => handleLabelClick("labelone")}
            style={{ backgroundColor: labelState === "labelone" ? "white" : "rgb(216, 216, 216)" }}
          >
            <p>ACADEMIC WRITING</p>
          </div>
          <div id="labeltwo" onClick={() => handleLabelClick("labeltwo")}
            style={{ backgroundColor: labelState === "labeltwo" ? "white" : "rgb(216, 216, 216)" }}>
            <p>STEM ASSIGNMENT</p>
          </div>
        </div>
        <div class="checkcontent">
          <div class="bodytwo">
            <div class="options">
              {renderLabelContent()}
              <button id="ordertwobtn">proceed to order</button>
            </div>
            <div id="parttwo">
              <h4>How you can get you paper done super fast</h4>
              <ol>
                <li>Fill out the order form</li>
                <li> Pay for your assignment</li>
                <li>Stay in touch with your expert</li>
                <li>Download the finished work</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="sectiontwo">
          <h1>DOMYASSIGNMENTS GUARANTEES</h1>
          <div id="stone">
            <div id="k">
              <h5>Money-back guarantee</h5>
              <p>In case you dont receive the paper you’ve asked for, or you wish to cancel the order for any
                reason, you can get a full or partial refund.</p>
            </div>
            <div id="f">
              <h5>Free revisions</h5>
              <p>Do My Assignments expert will edit your paper for free if you notice any flaws within it. Apply
                for a revision if you want to change anything in your paper.</p>
            </div>
            <div id="l">
              <h5>Authenticity guarantee</h5>
              <p>Every paper we deliver is customized. To guarantee its originality, we double-check every
                assignment with our in-house plagiarism-detection software.</p>
            </div>
            <div id="c">
              <h5>Confidentiality guarantee</h5>
              <p>We never publicly disclose email addresses or phone numbers that our customers provide. We want
                every student to feel safe and protected while using our service.</p>
            </div>
          </div>
          <img src={per} alt="" id="graph" />
        </div>
        <div class="card">
          <div id="cardone">
            <img src={usertwo} alt="" id="userf" />
            <h4>Having a hard time figuring out how to do your assignment?</h4>
            <p>Ask our experts for help and get it done in no time! <span>More about writer categories</span></p>
            <button id="btnthree">Place an order</button>
          </div>
        </div>
        <div class="bodythree">
          <h1>FOLLOW THESE 4 STEPS TO GET YOUR ORDER</h1>
          <div class="threeinner">
            <h5>Fill out The order form</h5>
            <h5>pay for your assignment</h5>
            <h5>stay in touch with your expert</h5>
            <h5>Download the finished Work</h5>
          </div>
          <div class="bodyfour">
            <h1>WE WRITE ANY TYPE OF ASSIGNMENT</h1>
            <p>Just specify what kind of help you’re looking for.</p>
            <img src={notes} alt="" />
            <p id="k">All we need is your instructions</p>
            <div id="flex">
              <div id="one">
                <h1>We write assignments and more</h1>
                <p>Our 460+ writers are always ready to tackle your papers, from research projects in management
                  and psychology to creative writing tasks.</p>
                <img src={book} alt="" width="400px" />
              </div>
              <div id="two">
                <h1>We help with STEM tasks of any size</h1>
                <p>Assignments in maths, programming, and other complex subjects aren’t an issue for our
                  qualified experts. All you need to do is place an order.</p>
              </div>
            </div>
            <div class="bodyfive">
              <h1>FREEBIES YOU RECEIVE WITH EVERY ORDER:</h1>
              <ol>
                <li>Bibliography section with reliable sources</li>
                <li>Consistent communication with your writer</li>
                <li>Formatting in any academic style</li>
                <li>Free title page</li>
                <li>24/7 WOW-support team</li>
              </ol>
            </div>
          </div>
        </div>
        <div class="bodysix">
          <img src={cal} alt="" />
          <h1>By the way, you can save money if you set a longer deadline</h1>
          <p>The sooner you order, the more money you save. Don’t hesitate!</p>
        </div>
        <button id="six">Place your order</button>
        <div class="bodyseven">
          <h1>DOMYASSIGNMENTS TOP EXPERTS</h1>
          <img src={baj} alt="" />
          <p id="on">Each of our experts is highly qualified in their field</p>
          <p id="tw">We make sure your expert suits your academic needs. All our writers pass several application
            tests and undergo thorough training before they start working.</p>
        </div>
        <div id="imgcoll">
          <img src={b} alt="" height="280px" />
          <img src={m} alt="" height="280px" />
          <img src={c} alt="" height="280px" />
          <img src={d} alt="" height="280px" />
        </div>
        <div class="dis">
          <h4>Harry</h4>
          <h4>Eliza</h4>
          <h4>Sarah</h4>
          <button id="btnsix">hire assignment expert</button>
        </div>
        <div class="distwo">
          <p>If you need a poem or a complex literary analysis, this guy is ready to help. Creative writing is Harry’s
            strong point.</p>
          <p>She specializes in management, writing papers to meet students’ demands. Place an order to get help from
            Eliza in the shortest term.</p>
          <p>She knows C++ and JavaScript, easily dealing with programming assignments of any level.</p>
          <button id="btnse">more about our experts</button>
        </div>
        <div class="bodyeight">
          <h1>OUR SAMPLES</h1>
          <p>Let the quality of our papers speak for itself.</p>
          <button id="btneight">check out all samples</button>
        </div>
        <div class="optionstwo">
          <div id="optionstone" onClick={() => optiontwo("optionthree")} style={{ backgroundColor: optionstwo === "optionthree" ? "white" : "rgb(216, 216, 216)" }}>
            <p>ACADEMIC WRITING</p>
          </div>
          <div id="optionsttwo" onClick={() => optiontwo("optionfour")} style={{ backgroundColor: optionstwo === "optionfour" ? 'white' : "rgb(216, 216, 216)" }}>
            <p>STEM ASSIGNMENT</p>
          </div>
        </div>
        <div class="optionsinner">
          {innertwo()}
        </div>
        <div id="bodynine">
          <h4>We craft each paper from scratch and make them 100% unique</h4>
          <p>We always scan each writing task for plagiarism. You can also ask us to provide you with an originality
            report.</p>
          <img src={book} alt="" />
        </div>
        <div id="ten">
          <h1>EVALUATION OF OUR WORK</h1>
          <p>Here’s what students say about DoMyAssignments.</p>
          <button>check out all reviews</button>
        </div>
        <div id="bodyten">
          <div id="one">
            <h1>Knowledgable and professional writer in their field</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam deserunt sint ea hic odio
              porro </p>
          </div>
          <div id="one">
            <h1>Knowledgable and professional writer in their field</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam deserunt sint ea hic odio
              porro </p>
          </div>
          <div id="one">
            <h1>Knowledgable and professional writer in their field</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam deserunt sint ea hic odio
              porro </p>
          </div>
        </div>
        <div class="twobody">
          <div id="label">
            <div id="labelone" onClick={() => handleLabelClick("labelone")}
              style={{ backgroundColor: labelState === "labelone" ? "white" : "rgb(216, 216, 216)" }}
            >
              <p>ACADEMIC WRITING</p>
            </div>
            <div id="labeltwo" onClick={() => handleLabelClick("labeltwo")}
              style={{ backgroundColor: labelState === "labeltwo" ? "white" : "rgb(216, 216, 216)" }}>
              <p>STEM ASSIGNMENT</p>
            </div>
          </div>
          <div class="checkcontent">
            <div class="bodytwo">
              <div class="options">
                {renderLabelContent()}
                <button id="ordertwobtn">proceed to order</button>
              </div>

              <div id="parttwo">
                <h4>How you can get you paper done super fast</h4>
                <ol>
                  <li>Fill out the order form</li>
                  <li> Pay for your assignment</li>
                  <li>Stay in touch with your expert</li>
                  <li>Download the finished work</li>
                </ol>
              </div>
            </div>
          </div>
          <div class="bodytwelve">
            <div id="oneee">
              <h1>ANSWERS ABOUT ASSIGNMENT HELP</h1>
              <p>If your question is not on the list, you can use our chat and talk to our specialist.</p>
              <button id="btnten">open chat</button>
            </div>
            <div id="twoe">
              <ol>
                <div id="twoeone" style={{ height: height }}>
                  <li>Can you do my assignment for me?<span id="spanone" onClick={heightfun}>+</span></li>
                  <p>Yes, we can do your assignment for you to give you an idea of how you should handle your
                    tasks!</p>
                </div>
                <div id="twoetwo" style={{ height: heighttwoo }}>
                  <li>Who can I pay to do my homework?<span id="spantwo" onClick={heighttwo}>+</span></li>
                  <p>At our website, you can pay top-level experts for their help! When we do your homework,
                    we assign each order to the most suitable professional in the corresponding field. Each
                    of our experts is a highly qualified specialist who knows the struggles of student life
                    first-hand. They work from different countries, so there`s always someone to ask for
                    professional assistance.</p>
                </div>
                <div id="twoethree" style={{ height: heightthreee }}>
                  <li>How fast can you help with university assignment?<span id="spanthree" onClick={heightthree}>+</span></li>
                  <p>We can provide you with university assignment help in just 8 hours! This urgent delivery
                    doesn’t affect quality, so it costs a bit more than an identical order with a longer
                    deadline would. That’s why you’re always welcome to order in advance and save money by
                    giving your expert more time. Nonetheless, we can always help you with maximum urgency.
                  </p>
                </div>
                <div id="twoefour" style={{ height: heightfourr }}>
                  <li>Can you assist if I need help with my assignment confidentially?<span
                    id="spanfour" onClick={heightfour}>+</span></li>
                  <p>Yes, we can! We never publicly disclose the private information of our clients when we do
                    your assignment. Our privacy policy safeguards all the information you share with us.
                    The only goal we use your email and phone number for is delivering your orders. That’s
                    it! However, you can always opt to receive email notifications about our special offers
                    and discounts.</p>
                </div>
              </ol>
            </div>
          </div>
          <div class="bodythirteen">
            <img src={clock} alt="" />
            <h1>Need your assignment ASAP?</h1>
            <p>We are here for you 24/7. Just tell us about your task, and we’ll help you out.</p>
            <button id="btneleven">order now</button>
          </div>
          <div class="bodyfourteen">
            <div id="on">
              <h1>STEM assignments</h1>
              <ul id="ul">
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
              </ul>
            </div>
            <div id="ontwo">
              <h1>Academic writing</h1>
              <ul id="ul">
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
                <li id="li">Coding homework help</li>
              </ul>
            </div>
          </div>
          <div class="bodyfifteen">
            <h5 id="fiveheading">Info</h5>
            <ul>
              <li>contact us</li>
              <li>pricing</li>
              <li>our writers</li>
              <li>Guarantees</li>
              <li>F&S</li>
              <li>Blog</li>
            </ul>
            <h5>Terms</h5>
            <ul id="ultwo">
              <li>terms and conditions</li>
              <li>money back gurantee</li>
              <li>privacy policy</li>
              <li>Revision policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
          <div class="bodysixteen">
            <h1>Disclaimer</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis modi cumque neque nostrum fugit cum possimus minus beatae, labore dicta obcaecati ea laboriosam tempore quos dolor reprehenderit blanditiis sunt quod!</p>
            <h1>we accept</h1>
            <img src={discover} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;







//  import React, { useState } from 'react';

// function App() 
//    const [content, setContent] = useState("fdsf");
//     const handleClick = () => {
//         setContent("ABDULLAH JUTT");
//   }

//   return (
//       <div>
//       <h1 onClick={handleClick}>{content}</h1>
//       <p>oky</p>
//     </div>
//   );
// }

// export default App;

// const [content, setContent] = useState('<div>this is div</div>');

// const handleClick = () => {
//     setContent('<h1>this is h1</h1>');
//   };
//   <div onClick={handleClick} dangerouslySetInnerHTML={{ __html: content }}></div>