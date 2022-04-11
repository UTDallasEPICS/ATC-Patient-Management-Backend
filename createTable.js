conn = new Mongo();
db = conn.getDB("ATC-Database"); 
db.test.insert({
    username: "username",
    password: "password"
});