import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            "service_6s2v7ge",
            "template_hqedogd",
            refForm.current,
            "r3QZRaaRCzR4CIg0a"

        )
        .then(
            () => {
                alert('message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
     }

    return (
        <>

        <div className='container contact-page'>
            <div className='text-zone'>
                
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o',
                'n', 't', 'a', 'c', 't', ' ','m', 'e']}
                idx={15}
                />
                </h1>
                <p>
                    I am interested in any and all oppurtunities. 
                    I am looking to gain as much experience as possible. 
                    Please reach out if you have any questions or requests. 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="Name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                            <input type="Email" name="Email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='Message' required></textarea>
                            </li>
                            <li>
                                <input type='Submit' className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                    John Duncan,
                    <br />
                    United States,
                    <br />
                    Sacramento, California
                    <span>jduncan7927@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[38.575764, -121.478851]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[38.575764, -121.478851]}>
                            <Popup>Come over for a cup of tea :D</Popup>

                        </Marker>
                    </MapContainer>
                </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact