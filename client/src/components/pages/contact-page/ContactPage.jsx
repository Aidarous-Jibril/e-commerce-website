import React from 'react'

import './contactPage.styles.css'
const ContactPage = () => {
    return (
        <div className="container">
            <h2 style={{textAlign: 'center', color:'red'}}>Contact Us</h2>
            <form >
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                    <option value="australia">Sweden</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="usa">UK</option>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px' }} />

                <input type="submit" value="Submit" />

        </form>
    </div>
    )
}

export default ContactPage
