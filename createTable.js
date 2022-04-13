conn = new Mongo();

db = conn.getDB("ATCBackend");

db.therapist.insert({
    firstName: "John",
    lastName: "Doe",
    email: "email@gmail.com",
    username: "username",
    password: "password",
    phoneNumber: "1234567890",
    isAdmin: true
})

db.administrator.insert({
    firstName: "Johnny",
    lastName: "Doe",
    email: "email@gmail.com",
    phoneNumber: "1234567890",
    isTherapist: true,
    patiens: []
})

testDate = new Date()

db.patient.insert({
    firstName: "Jackson",
    lastName: "Doe",
    parentPhone: "1234567890",
    parentEmail: "email@gmail.com",
    birthday: new Date()
})

db.behavior.insert({
    name: "Test",
    description: "This is a test behavior",
    datatype: "testing"
})