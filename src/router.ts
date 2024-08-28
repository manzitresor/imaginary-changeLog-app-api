import { Router } from "express";

const router = Router();

// Product routers
router.get('/product',(req,res)=>{
    res.json({message:"Hello there"})
})
router.get('/product/:id',()=>{})
router.put('/product/:id',()=>{})
router.post('/product',()=>{})
router.delete('/product/:id',()=>{})

// Update Routes
router.get('/update',()=>{})
router.get('/update/:id',()=>{})
router.put('/update/:id',()=>{})
router.post('/update',()=>{})
router.delete('/update/:id',()=>{})

// Update Point Routes
router.get('/updatepoint',()=>{})
router.get('/updatepoint/:id',()=>{})
router.put('/updatepoint/:id',()=>{})
router.post('/updatepoint',()=>{})
router.delete('/updatepoint/:id',()=>{})

export default router;