const contact_infrastruture = require('../infrastructure/contact_infrastructure')

function getAllContacts() {
    return contact_infrastruture.getAllContacts();
}

function selectContact(id) {
    if (id !== null) {
        return contact_infrastruture.selectContact(id);
    } else {
        return { error: 'Invalid Id' }
    }
}

function insertContact(contact) {
    if(contact !== null){
        return contact_infrastruture.insertContact(contact);
    } else{
        return { error: 'Invalid data'}
    }
}

function updateContact(contact) {
    if(contact !== null){
        return contact_infrastruture.updateContact(contact);
    } else{
        return { error: 'Invalid data'}
    }
}

function deleteContact(id) {
    if (id !== null && typeof id !== 'undefined') {
        return contact_infrastruture.deleteContact(id);
    } else {
        return { error: 'Invalid Id' }
    }
}

module.exports = {
    getAllContacts,
    selectContact,
    insertContact,
    updateContact,
    deleteContact
}
