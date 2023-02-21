import React,{useState} from 'react'
import { json, NavLink , useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })

  const handleInput = (e)=>{
    console.log(e);
    let name,value;;

    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }
  
  const PostData = async (e)=>{
    e.preventDefault();

    const {name,email,phone,work,password,cpassword} = user;
    const res = await fetch('/register', {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        // we need to convert the data in string before sending the data
        name,email,phone,work,password,cpassword
      })
    })

    const data = await res.json(); // we get the response data from server

    if(res.status === 422 || !data){
      window.alert("invalid register");
      console.log("invalid register")
    } else {
      window.alert("success register");
      console.log("success register")

      navigate('/signin')// redirect the page to login
    }

  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form className='register-form' id='register-form' method='POST'>

                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input type="text" name='name' id='name' autoComplete='off' placeholder='your name' value={user.name} onChange={handleInput}/>
                </div>

                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input type="email" name='email' id='email' autoComplete='off' placeholder='your email' value={user.email} onChange={handleInput}/>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">phone</label>
                  <input type="number" name='phone' id='phone' autoComplete='off' placeholder='your phone' value={user.phone} onChange={handleInput}/>
                </div>

                <div className="form-group">
                  <label htmlFor="work">work</label>
                  <input type="text" name='work' id='work' autoComplete='off' placeholder='your work' value={user.work} onChange={handleInput}/>
                </div>

                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input type="password" name='password' id='password' autoComplete='off' placeholder='your password' value={user.password} onChange={handleInput}/>
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">cpassword</label>
                  <input type="password" name='cpassword' id='cpassword' autoComplete='off' placeholder='your cpassword' value={user.cpassword} onChange={handleInput}/>
                </div>

                <div className="form-group form-button">
                  <input type="submit" name='signup' id='signup' className='form-submit' value="register" onClick={PostData}/>
                </div>
              </form>

              <div className="signup-image">
                <NavLink to='/login' className='signup-image-link'>I am already registerd</NavLink>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Signup