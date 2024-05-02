import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div className="container-fluid main p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contact">
            <p>We would love to hear any comments, suggestions, or feedback.</p>
            <p>Please enter your message in the box below:</p>
          </div>
        </div>

        <div className="form">
          <form action="" method="post">
            <textarea
              id="textarea"
              name="ContactForm[contacttext]"
              style={{ backgroundColor: '#eee', width: '400px', height: '200px' }}
              aria-required="true"
              data-gramm="false"
              wt-ignore-input="true"
              data-quillbot-element="wzA5xwv_Rzj0AlZVxh4o8"
              aria-invalid="true"
            ></textarea>
            <br /><br />
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" />
            <br /><br />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
            <br /><br />
            <button className="btn-submit">Submit</button>
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}
