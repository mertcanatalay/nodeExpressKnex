const logout = async (req, res) => {
    try {
        let users = await req.db("Member").select().catch(console.error);
        res.json(users);
    } catch (error) {
        console.log(error)
    }
}

export default logout;