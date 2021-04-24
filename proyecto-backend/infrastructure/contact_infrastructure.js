var mysql = require("mysql");
const db = require("mysql-async-simple").makeDb();
const config = require('../configuration/db');
const sms = require("../configuration/sms");

async function getAllContacts() {
  let result;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);

  try {
      result = await db.query(connection, sms.selectAllContacts);
  } catch (err) {
    result = getError(err);
    console.log(JSON.stringify(result));
  } finally {
    await db.close(connection);
    return JSON.stringify(result);
  }
}

async function selectContact(id) {
  let result;
  let connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);

  try {
    let sql = sms.selectContact;
    let params = [id];
    result = await db.query(connection, sql, params);

  } catch (err) {
    result = getError(err);
    console.log(JSON.stringify(result));
  } finally {
    await db.close(connection);
    return JSON.stringify(result);
  }
}

async function insertContact(contact) {
  let result;
  let connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);

  try {
    let date = new Date().toISOString().substring(0,19).replace("T"," ");
    let sql = sms.insertContact;
    let params;

    if(typeof contact.name === 'undefined'){
      params = [contact.contact.name, contact.contact.last, contact.contact.phone, contact.contact.email, contact.contact.isActive, date];
    } else{
      params = [contact.name, contact.last, contact.phone, contact.email, contact.isActive, date];
    }
    console.log(params);
    result = await db.query(connection, sql, params);
  
  } catch (err) {
    result = getError(err);
    console.log(JSON.stringify(result));
  } finally {
    await db.close(connection);
    return JSON.stringify(result);
  }
}

async function updateContact(contact) {
  let result;
  let connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);

  try {
    let date = new Date().toISOString().substring(0,19).replace("T"," ");
    let sql = sms.updateContact;
    let params;

    if(typeof contact.name === 'undefined'){
      params = [contact.contact.name, contact.contact.last, contact.contact.phone, contact.contact.email, contact.contact.isActive, date, contact.contact.id];
    } else{
      params = [contact.name, contact.last, contact.phone, contact.email, contact.isActive, date, contact.id];
    }
    //let params = [contact.name, contact.last, contact.phone, contact.email, contact.isActive, date, contact.id];
    result = await db.query(connection, sql, params);
    
  } catch (err) {
    result = getError(err);
    console.log(JSON.stringify(result));
  } finally {
    await db.close(connection);
    return JSON.stringify(result);
  }
}

async function deleteContact(id) {
  let result;
  let connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);

  try {
    let sql =  sms.deleteContact;
    let params = [id];
    result = await db.query(connection, sql, params);

  } catch (err) {
    result = getError(err);
    console.log(JSON.stringify(result));
  } finally {
    await db.close(connection);
    return JSON.stringify(result);
  }
}

function getError(err) {
  return {
    "errorCode": err.errno.toLocaleString(),
    "errorMessage": err.sqlMessage
  };
}

module.exports = {
  getAllContacts,
  selectContact,
  insertContact,
  updateContact,
  deleteContact
};