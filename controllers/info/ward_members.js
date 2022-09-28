const Ward_members = require('../../models/ward_members/ward_members')

const getAllMembers = async(req, res) =>  {
    
    try {
        // Get all members from the database
        const result = await Ward_members.find()
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    
 }




module.exports = {getAllMembers}