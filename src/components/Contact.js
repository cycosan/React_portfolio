
import React from "react";
import emailjs from "emailjs-com";
import "../App.css";
import Success from "./Notification";
import { useForm } from "react-hook-form";
export default function Contact() {

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      trigger,
    } = useForm();
function sendEmail(e){
  // e.preventDefault(); 
  console.log("Nepal")

  emailjs.send('service_yt4yum9',"template_4xf0ucc",e,"user_80YmKOEhNlmGjG56bMYCV").then(res=>{
    
    reset();
    Success();
  }) 
    
      .catch(err=>{alert("Message sent!",err);});

 

}
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Sunakothi&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            {/* <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Sunakothi <br />
                lalipur,Nepal,  44700
              </p>
            </div> */}
            <div className="lg:w-1/8 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                sanjaymaharjan683@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">9860036047</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(sendEmail)}
          
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
      
              type="text"
              id="name"
              name="name"
              className={`w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.name && "invalid"}`}
              {...register("name", { required: "Name is Required" })}      
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name && (
                <small className="text-red-400">{errors.name.message}</small>
              )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
                        
              type="email"
              id="email"
              name="email"
              className={` w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.email && "invalid"} `}
              {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-red-400">{errors.email.message}</small>
              )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={` w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${errors.message && "invalid"} `}
              {...register("message", { required: "Message is Required",
              minLength: {
                value: 10,
                message: "Minimum Required length is 10",
              },
              maxLength: {
                value: 50,
                message: "Maximum allowed length is 50 ",
              } })}
              onKeyUp={() => {
                trigger("message");
              }}
            />
               {errors.message && (
                <small className="text-red-400">{errors.message.message}</small>
              )}
          </div>
       
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}