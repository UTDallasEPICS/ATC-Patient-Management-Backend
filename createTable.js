conn = new Mongo();
db = conn.getDB("ATC-Database"); 
db.user.insert({
    username: "username",
    password: "password"
});