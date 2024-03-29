import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (name, number) => async (dispatch) => {
  const contact = { name, number };
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

const phonebookOperations = { fetchContacts, addContact, deleteContact };

export default phonebookOperations;

// export default { fetchContacts, addContact, deleteContact };

// const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactsRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch((error) => dispatch(fetchContactsError(error)));
// };

// const addContact = (name, number) => (dispatch) => {
//   const contact = { name, number };

//   dispatch(addContactRequest());

//   axios
//     .post("/contacts", contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };

// const deleteContact = (contactId) => (dispatch) => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };
