import React from 'react'
import profile from '../profile.jpeg'

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="POST">
          <div className="row">
            <div className="col-md-4">
              <img src={profile} alt="" height='200'/>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>sumukha sureban</h5>
                <h6>web developer</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS <span>1/10</span> </p>

                <ul className="nav nav-tabs" role='tablist'>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> 
        </form>
      </div>
    </>
  )
}

export default About