import User from "../models/userModel.js"

const addUser = async (req,res) =>{
    const {fName, Mail, pNumber,pWord} = req.body;
    if (!fName || !fName || !Mail || !pNumber || !pWord){
        return res.status(400).json({message:"Please fill in your details."})
    }
    try {
        const user = await User.findOne ({email})
        if (user) {
            return res.status(400).json({message:"User already exists."})
        }

    User.create({
        fName: "Minengolar",
        Mail: "winter@gmail.com",
        pNumber: "0712345678",
        pWord: "<PASSWORD>"
    })

    res.send ('i was successfully created')

    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    
};
}
export { addUser }