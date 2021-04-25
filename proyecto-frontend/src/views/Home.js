import '../App.css';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import React from 'react';
import * as API from '../api';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const styles = {
    contactTitle: { maxWidth: 940, padding: 10, marginLeft: 10, textAlign: "center" },
    contactList: { maxWidth: 900, margin: 2, textAlign: "left" }
};

const labels = {
    title: "Contacts",
    name: "Name: ",
    phone: "Phone: ",
    email: "Email: ",
    active: "Active",
    inactive: "Inactive"
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
                <Card style={styles.contactTitle}><span className="title-contacts">{labels.title}</span></Card>
                <ul>
                    {this.state.contacts.map((contact) => (
                        <Card style={styles.contactList}>
                            <li key={contact.id}>
                                <div className="cnt-container">
                                <div className={useStyles.root}>
                                    <div className="cnt-wrapper">
                                        <div className="inline">
                                            <IconButton aria-label="delete" color="secondary" onClick={() => 
                                                    this.deleteContact(contact.id)
                                                }>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton aria-label="edit" color="primary" onClick={() => 
                                                    this.editContact(contact.id)
                                                }>
                                                <EditIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div className="cnt-wrapper">
                                        <span className="cnt-name"><span>{labels.name}</span><span>{contact.name}</span>&nbsp;
                                        <span>{contact.last}</span></span>
                                        <span className="cnt-phone"><span>{labels.phone}</span><span>{contact.phone}</span></span>
                                        <span className="cnt-email"><span>{labels.email}</span><span>{contact.email}</span></span>
                                        <span className="cnt-active"><span>{contact.isActive===1?labels.active:labels.inactive}</span></span>
                                    </div>
                                </div>
                                </div>
                            </li>
                        </Card>
                    ))} {" "}
                </ul>
            </div>
        );
    }
}

export default withRouter(Home);