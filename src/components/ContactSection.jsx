import React from 'react'

const ContactSection = () => {
  return (
    <>
        <div className='contact-section py-20' data-aos="fade-left" data-aos-duration="1000">
            <p className='text-3xl text-center font-bold uppercase'>Contact Us</p>
            <form className='w-[50%] shadow-lg border border-gray-300 mx-auto p-10'>
                <input type="text" placeholder='Enter your name...' className='w-[100%] p-2 mb-4 border border-gray-300' />
                <input type="email" placeholder='Enter your email...' className='w-[100%] p-2 mb-4 border border-gray-300' />

                <textarea placeholder='Enter your message...' className='w-[100%] p-2 mb-4 border border-gray-300 resize-none'></textarea>

                <button className='w-[100%] bg-black text-white py-2 rounded-full'>React out</button>
            </form>


            <iframe className='mx-auto mt-20' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0170064238864!2d67.07182317583597!3d24.8632687451443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ea3db108f41%3A0x42acc4507358b160!2sAptech%20Learning%2C%20Shahrah%20e%20Faisal%20Center!5e0!3m2!1sen!2s!4v1752906765485!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        </div>




    </>
  )
}

export default ContactSection
