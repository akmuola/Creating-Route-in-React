import React from 'react'

export default function Contact() {
  return (
    <div><h1>Contact Us Page</h1>
    <h3>Send us your feedback here</h3>
    <form>      
  <input name="name" type="text" class="feedback-input" placeholder="Name" />   
  <input name="email" type="text" class="feedback-input" placeholder="Email" />
  <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
  <input type="submit" value="SUBMIT"/>
</form>

    </div>
  )
}
