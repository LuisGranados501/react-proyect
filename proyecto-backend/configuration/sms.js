const columns = 'id, name, last, phone, email, isActive, timestamp';
const selectAllContacts = `SELECT ${columns} FROM contacts`;
const selectContact = `SELECT ${columns} FROM contacts WHERE ID=?`;
const insertContact = 'INSERT INTO contacts (name, last, phone, email, isActive, timestamp) VALUES(?,?,?,?,?,?)';
const updateContact = 'UPDATE contacts SET name=?, last=?, phone=?, email=?, isActive=?, timestamp=? WHERE id=?';
const deleteContact = 'DELETE FROM contacts WHERE id=?';

module.exports = {
    selectAllContacts,
    selectContact,
    insertContact,
    updateContact,
    deleteContact
}