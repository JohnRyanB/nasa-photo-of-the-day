import React, {useState, useEffect} from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

export default function PictureOfDay() {
    const [picture, setPicture] = useState([])

useEffect(() =>{

    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
.then((data) =>  setPicture(data.data))
.catch((err) => console.log('error getting picture', err))},[])


console.log(picture)
    return (
        <div className='container'>
            <h1>NASA Picture of the Day</h1>
            <img className='image' src={picture.url} alt='Outer Space'/>
            <h2>{picture.date}, {picture.title}</h2>
            <p className='details'> {picture.explanation}
            </p>
        </div>
    )
}
