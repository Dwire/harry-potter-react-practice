
// endpoint for getting all characters from Gryffindor
export const getGryffindor = 'https://www.potterapi.com/v1/houses/5a05e2b252f721a3cf2ea33f?key=$2a$10$PzNhF6Vo79I8PyEjkd/TT.VlHrn1B.kcmXv5a.wjtuISj8pTGXSoy'

// endpoint for getting info on ONE character
// this gives you access to the patronus and role info
export const getStudent = (id) => `https://www.potterapi.com/v1/characters/${id}?key=$2a$10$PzNhF6Vo79I8PyEjkd/TT.VlHrn1B.kcmXv5a.wjtuISj8pTGXSoy`
