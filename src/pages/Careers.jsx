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

      



      <div className="divider" />
      <Footer />
    </div>
  )
}

export default Careers