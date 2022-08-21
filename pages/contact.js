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

          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa obcaecati enim aspernatur quia praesentium reiciendis minus quas facilis, veniam et earum. Sint, culpa, quia reprehenderit repellat repudiandae consequuntur mollitia facilis sequi adipisci unde numquam minima velit error similique ipsa quod nisi quibusdam. Necessitatibus voluptatum vel earum ex magnam impedit, velit vero iusto commodi maxime? Nesciunt excepturi nulla esse quibusdam dolorem, a obcaecati vero nemo, saepe eos ut quam, accusantium voluptas iste optio corrupti aut quisquam? Laboriosam alias illum odit dolorum cupiditate in assumenda totam? Officiis quasi magni reprehenderit a quo? Doloribus dolorum quisquam quo cum earum velit illo non? consectetur adipisicing elit. Tempora ut ad vitae odio facere commodi itaque harum laborum dolorem. Commodi, vel eius quibusdam ipsum quasi dolorum, qui, id ducimus aliquid earum cupiditate. Vel aut quam dolore, laborum veritatis accusantium commodi. Dolores explicabo nihil aliquid esse molestiae quasi pariatur autem quidem!</p>

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