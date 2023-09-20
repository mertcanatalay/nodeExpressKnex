const me = async (req, res) => {
    try {
        let users = await req.db("Users").select().catch(console.error);
        res.json(users);
    } catch (error) {
        console.log(error)
    }
}

export default me;