import { useState } from "react";
import axios from "axios";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    message: ""
  });

  const handleSubmit = async () => {
    await axios.post("https://abclicks.onrender.com/api/book", form);
    const msg = `Hello AB Clicks, I want to book a ${form.eventType} on ${form.date}. My name is ${form.name}`;

    window.open(`https://wa.me/91891985233?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} /><br/>
      <input placeholder="Phone" onChange={e => setForm({...form, phone:e.target.value})} /><br/>
      <input placeholder="Event Type" onChange={e => setForm({...form, eventType:e.target.value})} /><br/>
      <input placeholder="Date" onChange={e => setForm({...form, date:e.target.value})} /><br/>
      <input placeholder="Location" onChange={e => setForm({...form, location:e.target.value})} /><br/>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
