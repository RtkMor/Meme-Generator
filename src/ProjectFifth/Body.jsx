import React from 'react';
import memesData from './memesData'

function Body(props) {

    const [memesData, setMemesData] = React.useState({});

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesData(data))
    }, [])

    const [imageUrl, setImageUrl] = React.useState(undefined);
    const [text, setText] = React.useState(
                                    {
                                        topText: "",
                                        bottomText: ""

                                    });

    // Changing The Top Text and Bottom Text
    function handleChange(event){
        const {name, value, type, checked} = event.target;
        setText((prev) => {
            return {
                ...prev,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function generateMeme(){
        
        // generating random meme and displaying it
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const newImageUrl = memesArray[randomIndex].url;
        setImageUrl(() => newImageUrl);

    }

    return (
        <div className="container-md text-center position-relative z-0">
            <div class="row mt-5">
                <div class="col">
                    <div className="form-floating">
                        <input type="text" class="form-control border border-black rounded" placeholder="" onChange={handleChange} name="topText" />
                        <label for="floatingInput">Top Section</label>
                    </div>
                </div>
                <div class="col">
                <div className="form-floating">
                        <input type="text" class="form-control border border-black rounded" placeholder="" onChange={handleChange} name="bottomText" />
                        <label for="floatingInput">Bottom Section</label>
                    </div>
                </div>
            </div>
            <button onClick={generateMeme} type="button" className={"btn mt-5 col-12 " + (props.darkMode ? "btn-light" : "btn-dark")}>
            <p className="d-inline mb-0 me-2">Get a new meme image</p>
            <img src="https://images-na.ssl-images-amazon.com/images/I/61PACBk46hL.png" height="30" width="30" className="mb-1"/>
            </button>
            <div className='container-md text-center position-relative'>
                <img src={imageUrl} className='mx-auto mt-5 mb-5 border border-none' id='memeBox'/>
                {imageUrl && <h2 className='topText'>{text.topText}</h2>}
                {imageUrl && <h2 className='bottomText'>{text.bottomText}</h2>}
            </div>
        </div>
    )
}

export default Body;

/*

const [darkMode, setDarktMode] = React.useState(false);

  function toggleDarkMode(){
    setDarktMode(prev => !prev);
  }
  
    return (
      <div className={'p-2 position-relative z-0 ' + (darkMode ? "bg-dark" : "")} data-bs-theme={darkMode ? "light" : ""}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Body darkMode={darkMode}/>
      </div>
    )

*/


/*

Check Box -> 
<input
    type="checkbox"
    id="friendly"
    name="friendly"
    checked={formData.friendly}
    onChange={handleChange}
/>
<label htmFor="friendly">Are you friendly</label>
<br />
    


Radio Button ->
<fieldset> Current employment status

    <input
        type="radio"   
        id="unemployed"
        name="employment"
        value="unemployed"
        checked={formData.employment === "unemployed"}
        onChange={handleChange}
    />
    <label htmlFor="unemployed">Unemployed</label>
    <br />

    <input
        type="radio"   
        id="part-time"
        name="employment"
        value="part-time"
        checked={formData.employment === "part-time"}
        onChange={handleChange}
    />
    <label htmlFor="part-time">Part-Time</label>
    <br />

    <input
        type="radio"   
        id="full-time"
        name="employment"
        value="full-time"
        checked={formData.employment === "full-time"}
        onChange={handleChange}
    />
    <label htmlFor="full-time">Full-Time</label>
    <br />

</fieldset>

*/
