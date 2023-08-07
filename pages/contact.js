import React, {useState} from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Socialmedias from '../Components/socialmedias'

const contact = () => {

  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [location, setlocation] = useState("");
  const [service, setservice] = useState("");
  const [details, setdetails] = useState("");
  const [messagediv, setmessagediv] = useState("");

  const verifyFields = () => {
    if (
      name == "" ||
      date == "" ||
      email == "" ||
      number == "" 
    ) {
      alert("Empty Fields");
      return;
    }
  };

  const sendContactHandler = () => {
    verifyFields();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("date", date);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("location", location);
    formData.append("service", service);
    formData.append("details", details);

    fetch("https://levishotit.com/Backend/contact.php", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data == "SUCCESS") {
          setmessagediv(
            "Thanks For Contacting, We will be in touch within 24hrs!"
          );
        } else {
          setmessagediv(
            "There was an error with your request, try again in little bit"
          );
        }
      });
  };
  return (
    <div>
        <div className="contact_show">
          <Nav />
          <title>Contact | Levi</title>
        </div>

        <div className="contact_main">
          <h1>Let's Make This Happen!</h1>

          <p>Let's take the first step towards capturing some amazing moments together! Please take a moment to fill out the form below. By providing your information, we can communicate better, either via phone or Zoom. Remember, the key to a successful photoshoot is excellent communication. When we understand each other's needs and ideas, we can create great photos!</p>
          <ul>
            <li> I respond within 4 hours </li>
            <li> We setup a meeting, in person, phone call or via zoom </li>
            <li> I ask a few question and we come to conclusion. Bam! We all set.</li>
          </ul>

          <div className="contact_form">
            <div style={{display: messagediv ? 'flex' : 'none'}} className="message_div">
              {messagediv}
            </div>
            <div className="fields">
              <div className="field">
                <span className="label"> Your Name *</span>
                <div className="input"><input onChange={(e) => setname(e.target.value)} placeholder="Name here" type='text' /></div>
              </div>
              <div className="field">
                <span className="label"> Your Email *</span>
                <div className="input"><input onChange={(e) => setemail(e.target.value)}  type='email' placeholder="E.g example@mail.com" /></div>
              </div>
            </div>

            <div className="field_solo">
              <span className="label">Phone Number *</span>
              <div className="input"><input onChange={(e) => setnumber(e.target.value)}  type="text" placeholder='E.g 513 000 0000'/></div>
            </div>

            <div className="fields">
              <div className="field">
                <span className="label"> Date *</span>
                <div className="input"><input onChange={(e) => setdate(e.target.value)}  type="date" /></div>
              </div>
              <div className="field">
                <span className="label"> Location *</span>
                <div className="input"><input onChange={(e) => setlocation(e.target.value)}  type='email' placeholder="Venue name and location" /></div>
              </div>
            </div>

            <div className="field_solo">
              <span className="label">Tell Me More!</span>
              <div className="input"><textarea onChange={(e) => setdetails(e.target.value)}  placeholder='Any important details about venue, wedding or anything you will like me to know. Leave it here.'/></div>
            </div>

            <button onClick={() => sendContactHandler()}>Send</button>
          </div>

        </div>
          <Socialmedias />
          <Footer />
    </div>
  )
}

export default contact