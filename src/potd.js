import React, {useState, useEffect} from 'react'
import axios from 'axios'



export function Potd(){

    const [imageObj, setImageObj] = useState('')

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(response => {
                setImageObj(response.data)
            })
            .catch(error => console.log(error))
    },[])
    return (
        <section className='container'>
            <div className='schpeal'>
                <p>
                One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video. This endpoint structures the APOD imagery and associated metadata so that it can be repurposed for other applications. In addition, if the concept_tags parameter is set to True, then keywords derived from the image explanation are returned. These keywords could be used as auto-generated hashtags for twitter or instagram feeds; but generally help with discoverability of relevant imagery.
                </p>
            </div>
            <div className='pic'>
                <img src={imageObj.hdurl} alt='nasa pic of the day'></img>
                <div className='pic-info'>
                    <h3>{imageObj.copyright}</h3>
                    <p>{imageObj.date}</p>
                    <p>{imageObj.title}</p>
                    <p>{imageObj.explanation}</p>
                </div>
            </div>
        </section>
    )
}