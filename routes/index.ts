import BehaviorRoutes from "./behavior_routes.js";
import PatientRoutes from "./patient_routes.js";
import ProgramRoutes from "./program_routes.js";
import ReportRoutes from "./report_routes.js";
import TherapistRoutes from "./therapist_routes.js";
import {Router } from "express"

export default Router()
.use("/behaviour", BehaviorRoutes)
.use("/patient", PatientRoutes)
.use("/program", ProgramRoutes)
.use("/report", ReportRoutes)
.use("/therapist", TherapistRoutes)

