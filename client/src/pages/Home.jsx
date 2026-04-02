import React, { useEffect } from "react";

export default function Home(){

  useEffect(()=>{
    const els=document.querySelectorAll(".fade");
    const ob=new IntersectionObserver(e=>{
      e.forEach(i=>i.isIntersecting && i.target.classList.add("show"));
    },{threshold:.2});
    els.forEach(el=>ob.observe(el));
  },[]);

  return (
    <>
      {/* HERO */}
      <section style={{height:"100vh",position:"relative"}}>
        <video autoPlay muted loop playsInline style={{
          width:"100%",height:"100%",objectFit:"cover"
        }}>
          <source src="/Videos/VID_20260402_112748_502.mp4"/>
        </video>

        <div style={{
          position:"absolute",inset:0,
          background:"linear-gradient(to bottom, rgba(0,0,0,.3), rgba(0,0,0,.85))"
        }}/>

        <div className="fade" style={{
          position:"absolute",inset:0,
          display:"flex",flexDirection:"column",
          alignItems:"center",justifyContent:"center",
          textAlign:"center",padding:"20px"
        }}>
          <h1 style={{fontSize:"clamp(2.5rem,6vw,5rem)"}}>
            Capture Moments
          </h1>
          <p style={{marginTop:"12px",color:"#ccc",letterSpacing:"2px"}}>
            Create Memories
          </p>

          <a href="/contact">
            <button className="btn" style={{marginTop:"28px"}}>
              Book Now
            </button>
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section fade">
        <div className="container" style={{textAlign:"center"}}>
          <h2 style={{maxWidth:"720px",margin:"auto"}}>
            We craft cinematic wedding stories through photography and film.
          </h2>
        </div>
      </section>
    </>
  );
}
