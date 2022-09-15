import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact =() => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_x01m39i', 'template_siui5fe', form.current, 'ZdeDqyR_4DOwFqc3k')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () =>{
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    strArray={['C', 'o', 'n' ,'t', 'a', 'c', 't', ' ', 'U', 's']}
                    idx={15}
                    />
                </h1>
                <p>
                    We deal in all types of iron and steel structure products,
                    For any Query related to materials or projects , you can 
                    contact us using the form or you can directly whatsApp us.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required 
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="map-wrap">
                <MapContainer center={[26.767250, 82.176222]} zoom={13} scrollWheelZoom={true}>
                <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                     <Marker position={[26.767250, 82.176222]}>
                     <Popup> A pretty CSS3 popup. <br /> Easily customizable. </Popup>
                     </Marker>
                    </MapContainer>
            </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact