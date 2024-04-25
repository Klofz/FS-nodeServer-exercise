const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = 3901;
const URL1 = "/api/persons";

app.use(cors());
app.use(express.json());

app.use(formatterMatter);
app.use(morgan("tiny"));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :req[body]",
  ),
);
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  }),
);

app.use(requestLogger);

function requestLogger(request, response, next) {
  console.log("---");
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
}

function formatterMatter(request, response, next) {
  console.log("---");
  next();
}

const generateId = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const newId = getRandomInt(9999999999);
  return newId + 1;
};

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

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get(URL1, (request, response) => {
  response.json(persons);
  console.log(request.headers);
});

app.get("/info", (request, response) => {
  const numberOfEntries = persons.length;
  const body = `<p>Phonebook has info for ${numberOfEntries} people</p><p>${new Date().toString()}</p>`;
  response.send(body);
  console.log(request.headers);
});

app.get(`${URL1}/:id`, (request, response) => {
  const id = request.params.id;
  const body = persons.find(
    (person) => person.id.toString() === id,
  );

  if (body) {
    response.json(body);
  } else {
    response.status(404).end();
  }
});

app.delete(`${URL1}/:id`, (request, response) => {
  const id = request.params.id;

  const auxFinder = persons.find(
    (person) => person.id.toString() === id,
  );

  if (auxFinder) {
    response.json(auxFinder);
    persons = persons.filter(
      (person) => person.id.toString() !== id,
    );
  } else {
    response.status(404).end();
  }
});

app.post(URL1, (request, response) => {
  const newValue = {
    id: generateId(),
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

  const nameAlreadyExist = persons.find(
    (person) => person.name === newValue.name,
  );
  if (nameAlreadyExist) {
    return response.status(400).json({
      error: "name is already in Phonebook",
    });
  }

  persons = persons.concat(newValue);
  response.json(newValue);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);
