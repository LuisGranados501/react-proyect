import '../App.css';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import React from 'react';
import * as API from '../api';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    contactList: { maxWidth: 610, margin: 15, textAlign: "left" }
};

const labels = {
    title: "Contacts",
    name: "Name: ",
    phone: "Phone: ",
    email: "Email: ",
    delete: "Delete",
    edit: "Edit"
};

class Home extends React.Component {
    state = {
        contacts: []
    };

    componentDidMount(){ 
        this.getAllContacts();
    }

    getAllContacts(){
        API.getContacts().then((res) => {
            console.log(res.data);
           this.setState({ contacts: res.data });
       });
    }

    deleteContact(id){
        API.deleteContact(id).then((res) => {
            console.log(`Eliminado: ${id}`);
            this.setState({
                contacts: this.state.contacts.filter((contact) => contact.id !== id)
            });
        });
    }

    editContact(id){
        let editContact = this.state.contacts.filter((contact) => contact.id === id);
        console.log(editContact);
        this.props.history.push("/contact", editContact);
    }

    render(){
        return(
            <div className="App">
                <h2 className="title-contacts">{labels.title}</h2>
                <ul>
                    {this.state.contacts.map((contact) => (
                        <Card style={styles.contactList}>
                            <li key={contact.id}>
                                <p><span>{labels.name}</span><span>{contact.name}</span>&nbsp;<span>{contact.last}</span></p>
                                <p><span>{labels.phone}</span><span>{contact.phone}</span></p>
                                <p><span>{labels.email}</span><span>{contact.email}</span></p>
                                <p>
                                    <Button className="btn-default" variant="contained" color="secondary" startIcon={<DeleteIcon />} 
                                        onClick={() => 
                                            this.deleteContact(contact.id)
                                        }>
                                            <span className="btn-label">{labels.delete}</span>
                                    </Button>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <Button className="btn-default" variant="contained" color="primary" startIcon={<EditIcon />} 
                                        onClick={() => 
                                            this.editContact(contact.id)
                                        }>
                                            <span className="btn-label">{labels.edit}</span>
                                    </Button>
                                </p>
                            </li>
                        </Card>
                    ))} {" "}
                </ul>
            </div>
        );
    }
}

export default withRouter(Home);