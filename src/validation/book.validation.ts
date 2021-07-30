import Joi from 'joi';

const validateSchema = Joi.object({
    id: Joi.number().required(),
    bookName: Joi.string().min(1).max(100).required(),
    bookAuthor: Joi.string().min(1).max(100).required(),
    bookGenre: Joi.string().min(1).max(100).required(),
    bookPage: Joi.number().required(),


})

export default validateSchema;