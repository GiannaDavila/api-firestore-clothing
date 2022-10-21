import dbConnect from "./dbConnect.js";

export function createClothing(req,res){
    const db = dbConnect()
    db.collection('clothing').add(req.body)
    .then(doc => res.status(201).send({success: true, message: 'Created Clothing:' + doc.id}))
}
export function getAllClothing(req,res){
    const db = dbConnect()
    db.collection('clothing').get()
    .then(collection => {
        const clothingList = collection.docs.map(doc => doc.data())
        res.send(clothingList)
    })
    .catch(err => res.status(500).send({success: false, message: err}))
}