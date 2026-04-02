import React, { useState } from "react";

export default function Contact(){
  const [form,setForm]=useState({name:"",event:"",date:""});

  const onChange=e=>setForm({...form,[e.target.name]:e.target.value});

  const onSubmit=e=>{
    e.preventDefault();

    const msg=`Hello AB Clicks, I want to book a ${form.event} shoot on ${form.date}. My name is ${form.name}`;
    window.open(`https://wa.me/91891985233?text=${encodeURIComponent(msg)}`);
  };

  return (
    <section style={{
      minHeight:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <div style={{textAlign:"center",width:"320px"}}>
        <h1 style={{fontSize:"3rem",marginBottom:"40px"}}>
          Let’s Create
        </h1>

        <form onSubmit={onSubmit} style={{
          display:"flex",flexDirection:"column",gap:"22px"
        }}>
          <input name="name" placeholder="Your Name" onChange={onChange} required style={input}/>
          <input name="event" placeholder="Event Type" onChange={onChange} required style={input}/>
          <input type="date" name="date" onChange={onChange} required style={input}/>

          <button className="btn" type="submit">Book Now</button>
        </form>

        <p style={{marginTop:"30px",fontSize:"12px",color:"#777"}}>
          WhatsApp: 891985233
        </p>
      </div>
    </section>
  );
}

const input={
  background:"transparent",
  border:"none",
  borderBottom:"1px solid #444",
  padding:"10px 0",
  color:"#fff",
  outline:"none"
};
