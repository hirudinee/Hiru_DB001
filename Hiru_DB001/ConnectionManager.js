module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["hirudinee"] = {
        host: process.env.EndPoint_hirudinee,
        port: 3306,
        user: "test",
        password: "12345678",
        database: "sample",
    };
    
    };