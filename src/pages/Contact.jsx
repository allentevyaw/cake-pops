import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_689c3fl', 
        'template_t2pt7x4', 
        form.current, 
        '659BCl6uhx0cwforg'
      )
      .then((result) => {
          console.log(result.text);
          alert('Thank you for reaching out! We will follow-up ASAP! In the meantime, feel free to browser our instagram account for more fun pop creations!');
      }, (error) => {
          console.log(error.text);
          alert('There was an error sending your message. Please try again or DM us on our instagram page!');
      });
  };

  return (
<div>
  <section className="bg-[#FFFBF7] dark:bg-[#2B2B2B]">
    <div className="py-14 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center
        text-[#2B2B2B] dark:text-[#FFFBF7]">Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500
        dark:text-gray-400 sm:text-xl">
          Want to order some cake pops or have questions about our little 
          business? Reach out below!
      </p>


        <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
                <label className="block mb-2 text-sm font-medium 
                text-[#2B2B2B] dark:text-gray-300">
                  Your email
                  </label>
                <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border
                border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-primary-500 focus:border-primary-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-primary-500 dark:focus:border-primary-500 
                dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium
                text-[#2B2B2B] dark:text-gray-300">
                  Subject
              </label>
                <input type="text" name='subject' id="subject" className="block p-3 w-full 
                text-sm text-gray-900 bg-gray-50 rounded-lg border 
                border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 
                dark:shadow-sm-light" 
                placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium 
                text-[#2B2B2B] dark:text-gray-400">Your message</label>
                <textarea id="message" name='message' rows="6" className="block p-2.5 w-full 
                text-sm text-[#2B2B2B] bg-gray-50 rounded-lg shadow-sm border 
                border-gray-300 focus:ring-primary-500 focus:border-primary-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" value='send' className="py-3 px-5 text-sm text-center 
            bg-gradient-to-r from-purple-300 to-[#F40076] font-semibold text-white rounded-lg sm:w-fit focus:ring-4 
            focus:outline-none focus:ring-[#F40076]">Send message</button>
        </form>
    </div>
  </section>
</div>
  )
}

export default Contact