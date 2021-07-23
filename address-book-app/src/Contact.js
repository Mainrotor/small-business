import React, {useState} from 'react';

function Contact (props) {
    const [isHidden, setHide] = useState(true);

    const fullName = props.title + ' ' + props.firstName + ' ' + props.lastName
    const loc = props.state + ', ' + props.country
    const address = props.number + ' ' + props.name + ' ' + props.city + ' ' + props.state + ' ' + props.country + ' ' + props.zip

    if (isHidden) {
        return (
        <li id="contactPreview" onClick={() => {setHide(false)}}>
            <p id="showContact">Show Contact</p>
            <div class="hoverlayer"></div>
            <img src={props.medImg} alt="Contact thumbnail"></img>
                <header>
                    <h1>{fullName}</h1>
                    <p><span>Cell: </span>{props.cell}</p>
                    <p>{loc}</p>
                </header>
        </li>
        )
        
            
        } 

     else {
        return (
            <li id="fullContact" onClick={() => {setHide(true)}}>
                <img src={props.largeImg} alt="Contact thumbnail"></img>
                <p id="hideContact">Hide Contact</p>
                <header>
                    <h1>{fullName}</h1>
                    <p><span id="greyText">Cell: </span>{props.cell}</p>
                    <p><span id="greyText">Home: </span>{props.home}</p>
                    <span id="break"></span>
                    <p>{props.number} {props.name},</p>
                    <p>{props.city}, {props.state}, {props.country}, {props.zip}</p>
                </header>
            </li>
        )
    }

}

export default Contact;

