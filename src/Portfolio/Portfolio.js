import React,{useState,useEffect}from 'react'
import './Portfolio.css'
import axios from 'axios'
export default function Portfolio() {

    const [data, setdata] = useState([])
    const handleClick = () => {
        axios.get('https://fakestoreapi.com/products?limit=9').then((Response) => {
            setdata(Response.data)
        })
    }
    useEffect(() => {
        handleClick()
    }, [])
    return (
        <div className='portfolio'>
            <div className='section-title'>
                <h2>Portfolio</h2>
                <p>Check out our beautifull portfolio</p>
            </div>
            <div className='lists'>
                <ul>All</ul>
                <ul>App</ul>
                <ul>Card</ul>
                <ul>Web</ul>
            </div>
            <div className='child'>
                {
                    data.map((i) => {
                        return (
                            <div className='product1'>
                                <img className='prod' src={i.image} />
                             
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
