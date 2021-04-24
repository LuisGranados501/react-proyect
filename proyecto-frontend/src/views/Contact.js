import '../App.css';
import { Formik, Field, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import * as API from '../api';
import React from 'react';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Photo from '../images/contact.png';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
//import PhoneInput from 'react-phone-input-2';
//import 'react-phone-input-2/lib/style.css';

const styles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const labels = {
  title: "Contact Maintenance",
  name: "Name",
  last: "LastName",
  phone: "Phone",
  email: "Email",
  isActive: "Active",
  save: "Save"
};



class Contact extends React.Component {
  state = {
    contact: { id:"", name:"", last:"", phone:"", email:"", isActive: false, timestamp: new Date().toISOString() },
    isActive: false
  };

  loadSetState(){
    if(typeof this.props.location.state !== 'undefined' &&
      typeof this.props.location.state[0] !== 'undefined'){
        let props = this.props.location.state[0];

        const newContact = {
          id: props.id, 
          name: props.name, 
          last: props.last, 
          phone: props.phone, 
          email: props.email, 
          isActive: 1 === props.isActive,
          timestamp: props.timestamp
        };

        this.setState({ 
          contact: newContact,
          isActive: newContact.isActive
        });
    }
  }

  componentDidMount(){ 
    this.loadSetState();
  }

  handleChange = (event) => {
    event.preventDefault();
    let active = event.target.checked;
    this.setState({ isActive: active });
  }

  saveContact(contact){
    let status = this.state.isActive ? 1 : 0;
    contact.isActive = status;

    if(typeof contact.id === 'undefined' || contact.id === ""){
      API.saveContact(contact).then((res) => {
        console.log(`Creado: ${contact.id}`);
        this.props.history.push("/");
      });
    } else{
      API.updateContact(contact).then((res) => {
        console.log(`Actualizado: ${contact.id}`);
        this.props.history.push("/");
      });
    }
  }

  render(){
    return(  
      <div className="contact-form">
      <Card style={{ maxWidth: 450, height:450, marginTop:15, marhginLeft:5, textAlign: "center", background: "whitesmoke" }}>
        <div className="App">
          <div className="title inline">{labels.title}</div>
          <div className="avatar avatar-wrapper">
              <Avatar src={Photo} className={styles.large}  alt="Contact..." />
          </div>
          
          <Formik enableReinitialize className={styles.form}
              initialValues={ 
                { 
                  id: this.state.contact.id,
                  name: this.state.contact.name, 
                  last: this.state.contact.last, 
                  phone: this.state.contact.phone, 
                  email: this.state.contact.email,
                  checkedG: this.state.contact.isActive
                } 
              }
              onSubmit={(values) => {
                this.saveContact({ 
                  id: values.id,
                  name: values.name, 
                  last: values.last, 
                  phone: values.phone, 
                  email: values.email,
                  isActive: values.checkedG ? 1 : 0,
                  timestamp: new Date().toISOString().substring(0,19).replace("T"," ")
                });
              }}>
              <Form>
                <p>
                  <Field name="id" value="10" type="text" hidden="true" />
                  <div>
                    <PersonIcon className="sm-icon sm-icon-person"/>
                    <Field className="input" name="name" type="text" placeholder={labels.name} required />
                  </div>
                </p>
                <p>
                  <div>
                    <PersonIcon className="sm-icon sm-icon-person"/>
                    <Field className="input" name="last" type="text" placeholder={labels.last} required />
                  </div>
                </p>
                <p>
                  <PhoneIcon className="sm-icon sm-icon-phone"/>
                  <Field className="input" name="phone" type="text" maxLength="8" pattern="[0-9]*"
                    placeholder={labels.phone} required />
                </p>
                <p><EmailIcon className="sm-icon sm-icon-email"/>
                    <Field className="input" name="email" type="email" placeholder={labels.email} required />
                </p>
                <p>
                  <FormControlLabel className="cnt-checkbox"
                    control={<GreenCheckbox checked={this.state.isActive} onChange={ this.handleChange } name="checkedG" />}
                    label={labels.isActive} />
                </p>
                <div className="btn-area">
                  <p>
                    <Button className="btn-prymary" variant="contained" color="primary" size="small" type="submit" startIcon={<SaveIcon />}>
                      <span className="btn-label">{labels.save}</span>
                    </Button>
                  </p>
                </div>
              </Form>
          </Formik>
        </div>
      </Card>
      </div>
    );
  }
      
}
export default withRouter(Contact);

//Formularios:
//          https://developero.medium.com/c%C3%B3mo-manejar-formularios-en-react-desde-cero-994812a13d34
//Navigate using react-router:
//          https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
//Axios:
//          https://www.npmjs.com/package/axios
//Formik: 
//          https://www.npmjs.com/package/formik-material-fields
//Pasar parametros entre rutas:
//          https://www.youtube.com/watch?v=DXwxURZX-DE&t=418s
//Material:
//          https://material-ui.com/
//          https://material-ui.com/es/getting-started/usage/