import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Team.css'
export default function Team() {
    const [data, setdata] = useState([])
    const handleClick = () => {
        axios.get('https://fakestoreapi.com/products?limit=4').then((Response) => {
            setdata(Response.data)
        })
    }
    useEffect(() => {
        handleClick()
    }, [])
    return (
        <div className='team'>
            <div className='section-title'>
                <h2>Team</h2>
                <p>Our team is always here to help</p>
            </div>
            <div className='childs'>
                {
                    data.map((i) => {
                        return (
                            <div className='product'>
                                <img className='prod' src={i.image} />

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
