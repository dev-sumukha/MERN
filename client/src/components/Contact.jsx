import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_info_item d-flex justify-content-start">
                <img src="" alt="Phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">
                    Phone
                  </div>
                  <div className="contact_info_text">
                    33243243
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-5">
                  <div className="contact_form_titlle">
                    <h4>Get in Touch</h4>
                  </div>
                  <form id="contact_form">
                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                      <input type="text" id='contact_form_name' className='contact_form_name input_field' placeholder='name' required='true'/>
                      <input type="email" id='contact_form_name' className='contact_form_name input_field' placeholder='email' required='true'/>
                      <input type="number" id='contact_form_name' className='contact_form_name input_field' placeholder='number' required='true'/>
                    </div>

                    <div className="contact_form_text mt-4">
                      <textarea className="contact_form" id="" cols="126"rows="10" placeholder='message'></textarea>
                    </div>
                    <div className="contact_form_button">
                      <button type='submit' className='button btn btn-primary'>Send message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact