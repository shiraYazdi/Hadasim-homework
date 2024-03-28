import { addMember, getAllMembers, deleteMemberById, updateMember, getMemberById } from "../controllers/member.js";
import express from "express";
const router=express.Router();
router.get("/",getAllMembers)  
router.get("/:id", getMemberById)  
router.post("/",addMember) 
router.delete("/:id",deleteMemberById)  
router.put("/:id",updateMember) 


export default router;