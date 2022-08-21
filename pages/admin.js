import React, {useState} from 'react'

const admin = () => {
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const [location, setlocation] = useState('')
    const [link, setlink] = useState('')
    // const [cover, setcover] = useState('')

    const verifyFields = () => {
        if (title == '' || date == '' || location == '' || link == '') {
          alert("Empty Fields");
          return false;
        }
       }

    const addCatalougeHandler = () => {
        const formData = new FormData;
        verifyFields()

        formData.append('title', title);
        
        formData.append('date', date)
        formData.append('location', location)
        formData.append('port_link', link)

        var cover1 = document.getElementById("cover").files;

        if (cover1[0] != null) {
            formData.append('cover', cover1[0]);
        }

        const url = 'https://levishotit.com/Backend/portfolio.php';

        fetch(url, {
            method: "POST",
            // mode: 'no-cors',
            body: formData
        }).then((res) => res.json()).then((data) => {
            console.log(data);
        })


    }
  return (
    <div className='admin_container'>
        {/* <h1>Welcome</h1> */}

        <div className="formdiv">
            <h3>Add Catalouge</h3>

            <div className="field">
                <input onChange={(e) => settitle(e.target.value)} type="text" name="" placeholder='Title' id="" />
            </div>

            <div className="field">
                <input onChange={(e) => setdate(e.target.value)} type="text" name="" placeholder='Date' id="" />
            </div>

            <div className="field">
                <input onChange={(e) => setlocation(e.target.value)} type="text" name="" placeholder='Location' id="" />
            </div>

            <div className="field">
                <input onChange={(e) => setlink(e.target.value)} type="text" name="" placeholder='Link' id="" />
            </div>

            <div className="field">
                <input id='cover' type="file" name="" placeholder='Cover'/>
            </div>

            <button onClick={() => addCatalougeHandler()}>Add Catlouge</button>

            <h3>All Catalouge</h3>
        </div>
    </div>
  )
}

export default admin