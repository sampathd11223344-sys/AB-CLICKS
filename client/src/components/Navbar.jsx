import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
  const { pathname } = useLocation();

  const Item = ({to,children}) => (
    <Link to={to} style={{
      opacity: pathname===to ? 1 : .7,
      transition:".2s"
    }}>
      {children}
    </Link>
  );

  return (
    <div style={{
      position:"fixed",
      top:0,left:0,right:0,
      padding:"20px 40px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      background:"rgba(0,0,0,.4)",
      backdropFilter:"blur(12px)",
      zIndex:1000
    }}>
      <div style={{fontFamily:"Playfair Display, serif"}}>AB Clicks</div>

      <div style={{display:"flex",gap:"28px"}}>
        <Item to="/">Home</Item>
        <Item to="/journey">Journey</Item>
        <Item to="/work">Work</Item>
        <Item to="/contact">Contact</Item>
      </div>
    </div>
  );
}
