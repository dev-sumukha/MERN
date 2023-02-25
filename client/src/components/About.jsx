import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import profile from '../profile.jpeg'

const About = () => {
  const navigate = useNavigate();

  const callAboutPage = async ()=>{
    try{
      const res = await fetch('/about',{
        method:'GET',
        headers:{
          Accept:'application/json',
          "Content-Type":"application/json"
        },
        credentials:"include"// it includes the cookies
      });
      const data = await res.json();
      console.log(data)

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      } 
    } catch(err){
      console.log(err);
      navigate('/login',{replace:true})
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[]);

  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
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