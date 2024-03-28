import mongoose from "mongoose";
import Joi from "joi";

const addressSchema = mongoose.Schema({
    city: String,
    street: String,
    houseNumber: String,
})

const vaccinationSchema = mongoose.Schema({
    date: Date,
    producer: String
})


const memberSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    id: String,
    address: addressSchema,
    dateOfBirth: { type: Date, default: Date.now() },
    phone: String,
    cellphone: String,
    vaccinations: [vaccinationSchema],
    dateOfPositiveReply: Date,
    recoveryDate: Date
})


export const memberModel = mongoose.model("members", memberSchema);

export const memberValidatorForUpdate = (data) => {
    console.log(data)
    return memberSchema.memberValidator(data, { allowUnknown: true });
}

export const memberValidator = (_member) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        id: Joi.string().min(9).max(9).pattern(new RegExp('^[0-9]{9}')),
        address: Joi.object({
            city: Joi.string().required(),
            street: Joi.string().required(),
            houseNumber: Joi.string().required()
        }),
        dateOfBirth: Joi.date().required(),
        phone: Joi.string().pattern(new RegExp('^[0-9]{9}')),
        cellphone: Joi.string().pattern(new RegExp('^[0-9]{10}$')),
        vaccinations: Joi.array().items({
            date: Joi.date().allow(''),
            producer: Joi.string().allow('')
        }).max(4),
        dateOfPositiveReply: Joi.date().optional().allow('', null),
        recoveryDate: Joi.date().optional().allow('', null)
    });
    return schema.validate(_member);
}



