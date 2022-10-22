import {Employee, employeeModel} from "./employee";
import {Behavior, behaviorModel} from "./behavior";
import {Patient, patientModel} from "./patient";
import {Administrator, administratorModel} from "./administrator";
import {Program, programModel} from "./program";
import {Report, reportModel} from "./report";

const {signup, signin} = require("../controllers/auth")

export {
    Employee, employeeModel,
    Behavior, behaviorModel,
    Patient, patientModel,
    Administrator, administratorModel,
    Program, programModel,
    Report, reportModel
}