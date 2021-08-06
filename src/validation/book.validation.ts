import Joi from 'joi';

const validateSchema = {
    update: Joi.object().keys ({
        id: Joi.number().required(),
        bookName: Joi.string().min(1).max(100).required(),
        bookAuthor: Joi.string().min(1).max(100).required(),
        bookGenre: Joi.string().min(1).max(100).required(),
        bookPage: Joi.number().required(),
    }),

    add: Joi.object().keys ({
        bookName: Joi.string().min(1).max(100).required(),
        bookAuthor: Joi.string().min(1).max(100).required(),
        bookGenre: Joi.string().min(1).max(100).required(),
        bookPage: Joi.number().required(),
    }),

    idValidation: Joi.object().keys ({
        id: Joi.number().min(1),
    })

}

export default validateSchema;