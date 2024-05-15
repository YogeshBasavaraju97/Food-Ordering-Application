import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col justify-around m-auto ">
      <h1 className="text-blue-400 font-medium ml-9 mt-3">Contact Us</h1>
      <form className="grid w-6 m-9">
        <div className="flex">
          <input className="border black m-2" placeholder="Name" />
        </div>
        <div className="flex justify-between">
          <input className="border black m-2" placeholder="examle@gmail.com" />
        </div>
        <button className=" bg-slate-400 p"> Submit</button>
      </form>
    </div>
  );
};

export default Contact;
