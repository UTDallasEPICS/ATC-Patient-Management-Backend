import BehaviorRoutes from "./behavior_routes";
import PatientRoutes from "./patient_routes";
import ProgramRoutes from "./program_routes";
import ReportRoutes from "./session_routes";
import TherapistRoutes from "./therapist_routes";
import {Router } from "express"

export default Router()
.use("/behaviour", BehaviorRoutes)
.use("/patient", PatientRoutes)
.use("/program", ProgramRoutes)
.use("/session", ReportRoutes)
.use("/therapist", TherapistRoutes)

