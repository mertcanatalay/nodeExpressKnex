import sql from "mssql";
const config = {
    server: "localhost",
    user: "sa",
    password: "123",
    database: "E-Health",
    options:{
        // trustedconnection:true,
        // enableArithAort:true,
        // instancename:'SQLEXPRESS',
        trustServerCertificate: true
    }
}

// const conn = () =>{
//     sql.connect(config).then(()=>{
//         console.log("connected to db succesfully")
//     }).catch((err)=>{
//         console.log(`db connection err:,${err}`)
//     })

// }
// export default conn;

// var deneme = async () => {
//     try {
//         let pool = await sql.connect(config);
//         let users = await pool.request().query("select * from Member");
//         return console.log(users)


//     } catch (error) {
//         console.log(error)
//     }

// }