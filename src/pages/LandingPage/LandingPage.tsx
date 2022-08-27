import React from 'react'
import { Logo } from '../../components/Logo'
import "./LandingPage.css"


export const LandingPage = () => {
  return (
      <div>
          <div className="landnavbar">
              <div className="landlogo">
                  <Logo/>
              </div>
              <div className="navlist">
                  <p>Home</p>
                  <p>About</p>
                  <p>Learnings</p>
                  <p>Contact</p>
                  <button>Login</button>
              </div>
          </div>
          <div className="describeimg"></div>
          <div className="trackweeklyassimg"></div>
          <div className="trust"></div>
          <div className="patners"></div>
          <div className="footer"></div>
    </div>
  )
}
