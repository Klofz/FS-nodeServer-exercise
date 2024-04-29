const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const username = "aeunzklof";
const password = process.argv[2];
const usernameEncoded = encodeURIComponent(username);
const passwordEncoded = encodeURIComponent(password);

// const url = `mongodb+srv://${usernameEncoded}:${passwordEncoded}@cluster0.1kffg6z.mongodb.net/`;
const url = `mongodb+srv://${usernameEncoded}:${passwordEncoded}@cluster0.1kffg6z.mongodb.net/phonebookApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Contact = mongoose.model("Contact", contactSchema);

if (process.argv[3] && process.argv[4]) {
  const newContactName = process.argv[3];
  const newContactNumber = process.argv[4];
  addContact(newContactName, newContactNumber);
}

if (!process.argv[3]) {
  getAllContacts();
}

function addContact(newContactName, newContactNumber) {
  const contact = new Contact({
    name: newContactName,
    number: newContactNumber,
  });

  contact.save().then((result) => {
    console.log("contact saved!");
    console.log(
      `added ${result.name} number ${result.number} to phonebook`,
    );
    mongoose.connection.close();
  });
}

function getAllContacts() {
  Contact.find({}).then((result) => {
    result.forEach((contact) => {
      console.log(`${contact.name}, ${contact.number}`);
    });
    mongoose.connection.close();
  });
}
