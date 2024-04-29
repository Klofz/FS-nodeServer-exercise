require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("distr"));

const PORT = process.env.PORT;
const URL1 = "/api/persons";

const morgan = require("morgan");
const Contact = require("./models/phonebook");

app.use(LoggersAll);
app.use(formatterMatter);
app.use(morgan("tiny"));
app.use(morgan1());
app.use(morgan2());
app.use(morgan3());

// ----------------------------------------------------------------------------------------
// Middleware definition, morgan and custom made ones
// ----------------------------------------------------------------------------------------
function morgan1() {
  return morgan("tiny");
}

function morgan2() {
  return morgan(
    ":method :url :status :res[content-length] - :response-time ms :req[body]",
  );
}

function morgan3() {
  return morgan(function (tokens, req, res) {
    return [
      "This is morgan 3:",
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  });
}

function LoggersAll(request, response, next) {
  function requestLogger() {
    console.log("---Request Logger");
    console.log("Method:", request.method);
    console.log("Path:  ", request.path);
    console.log("Body:  ", request.body);
    console.log("---End Request Logger");
  }

  requestLogger();
  next();
}
function formatterMatter(request, response, next) {
  console.log("---Formatter");
  next();
}
// app.use(formatterMatter);
// app.use(morgan("tiny"));
// app.use(
//   morgan(
//     ":method :url :status :res[content-length] - :response-time ms :req[body]",
//   ),
// );
// app.use(
//   morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, "content-length"),
//       "-",
//       tokens["response-time"](req, res),
//       "ms",
//       JSON.stringify(req.body),
//     ].join(" ");
//   }),
// );

// app.use(requestLogger);

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

console.log(persons);

// ----------------------------------------------------------------------------------------
// Routing handling
// ----------------------------------------------------------------------------------------
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get(URL1, (request, response) => {
  Contact.find({}).then(
    (contacts) => response.json(contacts),
    // console.log(request.headers);
  );
  // response.json(persons);
});

app.get("/info", (request, response) => {
  Contact.find({}).then((contacts) => {
    const numberOfEntries = contacts.length;
    const body = `<p>Phonebook has info for ${numberOfEntries} people</p><p>${new Date().toString()}</p>`;
    response.send(body);
    // console.log(request.headers);,
  });
});

app.get(`${URL1}/:id`, (request, response) => {
  Contact.findById(request.params.id).then((contact) =>
    response.json(contact),
  );
});

app.post(URL1, (request, response, next) => {
  const newValue = {
    name: request.body.name,
    number: request.body.number,
  };

  if (!newValue.name) {
    return response.status(400).json({
      error: "name missing or invalid",
    });
  }

  if (!newValue.number) {
    return response.status(400).json({
      error: "number missing or invalid",
    });
  }

  Contact.find({}).then((persons) => {
    const nameAlreadyExist = persons.find(
      (person) => person.name === newValue.name,
    );

    if (nameAlreadyExist) {
      return response.status(400).json({
        error: "name is already in Phonebook",
      });
    }

    const contact = new Contact(newValue);

    contact
      .save()
      .then((savedContact) => {
        response.json(savedContact);
      })
      .catch((error) => next(error));
  });
});

app.delete(`${URL1}/:id`, (request, response, next) => {
  Contact.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put(`${URL1}/:id`, (request, response, next) => {
  const { name, number } = request.body;

  Contact.findByIdAndUpdate(
    request.params.id,
    { name, number },
    { new: true, runValidators: true, context: "query" },
  )
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));

  // const body = request.body;
  // const contact = {
  //   name: body.name,
  //   number: body.number,
  // };

  // Contact.findByIdAndUpdate(request.params.id, contact, {
  //   new: true,
  // })
  //   .then((updatedContact) => {
  //     response.json(updatedContact);
  //   })
  //   .catch((error) => next(error));
});
// ----------------------------------------------------------------------------------------
// Port
// ----------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ----------------------------------------------------------------------------------------
// Last Middlewares
// ----------------------------------------------------------------------------------------
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.error(`Error is: ${error.message}`);

  if (error.name === "CastError") {
    return response
      .status(400)
      .send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response
      .status(400)
      .json({ error: error.message });
  }

  next(error);
};

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

// handler of errors
// this has to be the last loaded middleware, also all the routes should be registered before this!
app.use(errorHandler);
//
//
// ----------------------------------------------------------------------------------------
// Helper functions
// ----------------------------------------------------------------------------------------
const generateId = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const newId = getRandomInt(9999999999);
  return newId + 1;
};
