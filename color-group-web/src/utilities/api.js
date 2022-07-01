const API_URL = process.env.REACT_APP_API_URL;
const JSON_HEADER = { "Content-Type": "application/json; charset=UTF-8" };

module.exports.retrieveAllPersons = (apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/person/`).then(res => res.json())
            .then(({ persons }) => {
                return resolve(persons);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.retrieveAllPersonsInGroup = (group, apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/person/group/${group}`).then(res => res.json())
            .then(({ persons }) => {
                return resolve(persons);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.retrieveAllPersonsWithColor = (color, apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/person/color/${color}`).then(res => res.json())
            .then(({ persons }) => {
                return resolve(persons);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.isNameTaken = (name, apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/data/name-taken/${name}`).then(res => res.json())
            .then(({ taken }) => {
                return resolve(taken);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.getAllNames = (apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/data/names`).then(res => res.json())
            .then(({ names }) => {
                return resolve(names);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.getAllGroups = (apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/data/groups`).then(res => res.json())
            .then(({ groups }) => {
                return resolve(groups);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.getAllColors = (apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/data/colors`).then(res => res.json())
            .then(({ colors }) => {
                return resolve(colors);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.updatePerson = (person, apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/person/update`, { method: "POST", headers: JSON_HEADER, body: JSON.stringify({ person }) }).then(res => res.json())
            .then(response => {
                return resolve(response);
            }).catch((err) => {
                return reject(err);
            });
    });
};

module.exports.createPerson = (person, apiUrl = API_URL) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}/person/create`, { method: "POST", headers: JSON_HEADER, body: JSON.stringify({ person }) }).then(res => res.json())
            .then(response => {
                return resolve(response);
            }).catch((err) => {
                return reject(err);
            });
    });
};
