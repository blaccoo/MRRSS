import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Careers() {
  return (
    <div>
    <Navbar />
      <section className="page-title">
        <div className="container">
          <div className="page-title-inner">
            <h2 style={{lineHeight:"3.5rem"}}>The Mineres Team</h2>
            <p className="px-lg-5">  The Mineres team comprises Blockchain Developers, Professional Traders, Full Stack Developers, Data Scientists, UX/UI Designers, Security Experts, Business Development Managers, Legal and Compliance Specialists,Project Managers, Marketing and Communications Specialists talented individuals focused on blockchain, data and artificial intelligence. A. To apply, fill the form bellow and  email your CV and Portfolio to <a href="mailto:careers@alethea.ai">careers@Mineres.com</a>. We will get back to you!</p>
            {/*
              <div class="title-image">
                  <img src="./assets/img/title-divider.svg" alt="">
              </div>
  */}
          </div>
        </div>
      </section>
      <section className="api-form-section">
        <div className="container">
          <div className="api-form-inner">
            <form id="api-form">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor>First Name*</label>
                    <input type="text" className="form-control" name="first_name" placeholder="Enter your First Name" required />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor>Last Name*</label>
                    <input type="text" className="form-control" name="last_name" placeholder="Enter your Last Name" required />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor>Email Address*</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter your Email Address" required />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor>Company*</label>
                    <input type="text" className="form-control" name="company" placeholder="Enter your Company Name" required />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor>Title*</label>
                    <select id className="form-control" name="title" required>
                      <option disabled selected>Select your title</option>
                      <option value="Executive">Executive</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Developer">Developer</option>
                      <option value="Researcher">Researcher</option>
                      <option value="Hobbyist">Hobbyist</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor>Industry*</label>
                    <select id className="form-control" name="industry" required>
                      <option disabled selected>Select your industry</option>
                    
                      <option value="Blockchain">Blockchain</option>
                      <option value="Education">Education</option>
                      <option value="Art">IOT</option>
                      <option value="Fashion">AI</option>
                      <option value="Technology">Technology</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Marketing">Marketing</option>
                    
                    
                      <option value="Fitness">Fitness</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                {/*
                      <div class="col-md-6 col-sm-6 col-12">
                          <div class="form-group">
                              <label for="">Interested In*</label>
                              <select name="interested_in" id="" class="form-control" required>
                                  <option disabled selected>Select your interest</option>
                                  <option value="CharacterGPT">CharacterGPT</option>
                                  <option value="Developer Grants (AI Protocol)">Developer Grants (AI Protocol)</option>
                                  <option value="Other">Other</option>
  
                              </select>
                          </div>
                      </div>
  */}
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor>Provide a brief outline of your dApp below:</label>
                    <textarea type="text" name="message" className="form-control" placeholder="Provide us with any information you want us to know about yourself and/or your dApp." defaultValue={""} />
                  </div>
                </div>
                <div className="col-12 mb-2">
                  <button className="btn btn-form-submit w-100 mt-2" id="submit-button">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="divider" />
      <Footer />
    </div>
  )
}

export default Careers