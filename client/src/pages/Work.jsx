import React from "react";

export default function Work(){
  return (
    <section className="section">
      <div className="container">
        <h1 style={{textAlign:"center",marginBottom:"60px"}}>
          Our Work
        </h1>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(360px,1fr))",
          gap:"40px"
        }}>
          {[...Array(10)].map((_,i)=>(
            <div key={i} style={{
              height:"280px",
              background:"#111",
              border:"1px solid #222",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              color:"#666",
              transition:".3s"
            }}>
              Video Placeholder
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
