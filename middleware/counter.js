
let compteurVisite = 0;
const middleware = (request, response, next) => {
    compteurVisite++;
    response.compteur = compteurVisite;
    next();
};
module.exports = middleware
module.exports = compteurVisite