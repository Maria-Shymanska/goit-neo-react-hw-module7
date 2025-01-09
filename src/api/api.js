import axios from "axios";

const api = axios.create({
  baseURL: "https://675d6e4663b05ed07977d871.mockapi.io",
});

export const getContacts = async () => {
  const { data } = await api.get("/contacts");
  return data;
};

export const addNewContact = async (contact) => {
  const { data } = await api.post("/contacts", contact);
  return data;
};

export const deleteContactById = async (id) => {
  await api.delete(`/contacts/${id}`);
};
