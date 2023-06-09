import React from 'react'

const ContactUs = () => {
  return (
<>


<div className='bg-[#F0F0F0] pt-6 pb-6'> 

<div  className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'   style={{borderRadius:'50px',
background: '#fafafa',
boxShadow:' 29px 29px 59px #646464 -29px -29px 59px #ffffff' , width:'65%'  , margin:'auto' }}>
  
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
        <p className="uppercase text-[#8DC640] ">Contact Us</p>
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900">
          Get In Touch With Us
          </h1>


          <p className="lg:w-2/3 mx-auto leading-relaxed ">
          Please contact us for creative solutions based on your unique situation. Our focus is on establishing long-term supports and resources for high-conflict cases involving abuse and post-separation abuse in family court. 
          </p>
        </div>


        <div className="pr-8 pl-8 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
             
                <input style={{borderRadius: '80px'}}
                  type="text"
                  id="name"
                  name="name"
                  placeholder='First Name'
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
          

                <input style={{borderRadius: '80px'}}
                  type="text"
                  id="name"
                  name="name"
                  placeholder='Last Name'
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative">
             
                <input style={{borderRadius: '80px'}}
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Last Name'
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
               
                <input style={{borderRadius: '80px'}}
                  type="number"
                  id="email"
                  name="email"
                  placeholder='ZIP Code'
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>


            <div className="p-2 w-full">
              <div className="relative">
               
                <textarea style={{borderRadius: '20px'}}
                  id="message"
                  name="message"
                  placeholder='Message'
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full" >
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{borderRadius: '30px'}}>
                Submit
              </button>
            </div>



            

          </div>
        </div>
      </div>
    </section>

    </div>
    </div>

</>
   
  )
}

export default ContactUs