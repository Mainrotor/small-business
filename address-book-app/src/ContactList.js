import {Component} from 'react';
import Contact from './Contact';

class ContactList extends Component {
    constructor (props) {
        super(props)

        this.state = {
            users : []
        }
    }

    componentDidMount() {
        const APIUrl = 'https://randomuser.me/api?results=25';

        fetch(APIUrl)
        .then((res) => res.json())
        .then((data) => {
            this.setState({users : data.results})
        })
        
    }

    render() {
        
        if (this.state.users) {

            return (
                <ul>
                    {this.state.users.map((contact, index) => {
                        return (
                            <Contact key={index} index={index} email={contact.email} thumbnail={contact.picture.thumbnail} title={contact.name.title} firstName={contact.name.first} lastName={contact.name.last} cell={contact.cell} medImg={contact.picture.medium} largeImg={contact.picture.large} state={contact.location.state} country={contact.location.country} home={contact.phone} number={contact.location.street.number} name={contact.location.street.name} city={contact.location.city} zip={contact.location.postcode} email={contact.email}/>
                        )
                    })}
                </ul>
    
            )
        }
        
    }

}

export default ContactList;