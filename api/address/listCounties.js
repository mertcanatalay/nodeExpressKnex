import response from "../../response.js";

const listCounties = async (req, res) => {
    try {

        var cityId = req.body.cityId
        let counties = await req.db("Counties").where("CityNo", cityId).select().catch(console.error);

        response.data = counties;
        response.message = "SUCCESS";
        response.success = true;
        res.json(response)


    } catch (error) {
        console.log(error)
    }

}

export default listCounties;