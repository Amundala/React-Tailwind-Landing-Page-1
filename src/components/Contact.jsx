import React from "react";

function Contact() {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by</p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-lg"
        />
        <form>
          <div className="grid grid-cols-2">
            <input type="text" className="border m-2 p-2" placeholder="First" />
            <input type="text" className="border m-2 p-2" placeholder="Last" />
            <input type="text" className="border m-2 p-2" placeholder="Email" />
            <input type="text" className="border m-2 p-2" placeholder="Phone" />
            <input
              type="text"
              className="border col-span-2 m-2 p-2"
              placeholder="Address"
            />
            <textarea
              name=""
              className="border col-span-2 p-2 m-2"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
