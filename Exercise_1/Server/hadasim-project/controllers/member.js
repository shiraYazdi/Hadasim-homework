import mongoose from "mongoose";
import { memberModel, memberValidator, memberValidatorForUpdate } from "../models/member.js"

export const addMember = async (req, res) => {
    let validate = memberValidator(req.body);
    if (validate.error)
        return res.status(400).json({ type: "משהו השתבש. הנתונים שהוזנו אינם מתאימים או שחסרים נתונים", message: validate.error.details[0].message });
    let { firstName, lastName, id, address, dateOfBirth, phone, cellphone, vaccinations, dateOfPositiveReply, recoveryDate } = req.body;
    try {
        let sameMember = await memberModel.findOne({ id: id })
        if (sameMember)
            return res.status(409).json({ type: "same member", message: "אדם זה כבר חבר בקופה" })
        let member = await memberModel.create({ firstName, lastName, id, address, dateOfBirth, phone, cellphone, vaccinations, dateOfPositiveReply, recoveryDate });
        res.status(200).json({ member })
    } catch (err) {
        return res.status(400).json({ type: "שגיאה", message: err.message })
    }
}

export const getAllMembers = async (req, res) => {
    let { search } = req.query;
    let ex = new RegExp(search)
    try {
        let filter = {};
        if (search) {
            filter.name = ex;
        }
        let allMembers = await memberModel.find(filter);
        res.json(allMembers);
    }
    catch (err) {
        res.status(400).send("sorry! " + err.messsage)
    }
}

export const getMemberById = async (req, res) => {
    let { id } = req.params;
    try {
        let member = await memberModel.findOne({ id });
        if (!member)
            return res.status(404).send("לא נמצא חבר")
        res.json(member)
    }
    catch (err) {
        res.status(400).send("sorry! " + err.messsage)
    }
}

export const deleteMemberById = async (req, res) => {
    let { id } = req.params;
    try {
        let memberToDelete = await memberModel.findOne({ id })
        let member = await memberModel.findByIdAndDelete(memberToDelete._id)
        if (!member)
            return res.status(404).send("לא נמצא כזה חבר")
        res.json(member)
    }
    catch (err) {
        res.status(400).send("ארעה שגיאה" + err.messsage)
    }
}

export const updateMember = async (req, res) => {
    let { id } = req.params
    try {
        let member = await memberModel.findOne({ id });
        if (!member)
            return res.status(404).send("לא נמצא כזה חבר")       
        let memberForUpdate = req.body
        Object.assign(member, memberForUpdate, { overwrite: true });
        let memberObj = member.toObject();        
        delete memberObj._id;
        delete memberObj.__v;
        delete memberObj.address._id
        memberObj.vaccinations.forEach(element => {
            delete element._id
        });         
        let validate = memberValidator(memberObj)
        if (validate.error)
            return res.status(400).json({ error: validate.error.details[0].message })       
        let memberAfterUpdate = await memberModel.findByIdAndUpdate(member._id, memberObj)
        res.json({memberAfterUpdate})
    }
    catch (err) {
        res.status(400).json({ type: "error", message: err.message })
    }
}







