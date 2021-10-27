import BehaviorRoutes from "./behavior_routes";
import PatientRoutes from "./patient_routes";
import ProgramRoutes from "./program_routes";
import ReportRoutes from "./report_routes";
import TherapistRoutes from "./therapist_routes";
import { Router } from "express"

const { signup, signin } = require('../controllers/auth');

export default Router()
.use("/behaviour", BehaviorRoutes)
.use("/patient", PatientRoutes)
.use("/program", ProgramRoutes)
.use("/report", ReportRoutes)
.use("/therapist", TherapistRoutes)
.use("/signup", signup)
.use("/signin", signin)