import BehaviorRoutes from "./behavior_routes";
import PatientRoutes from "./patient_routes";
import ProgramRoutes from "./program_routes";
import ReportRoutes from "./report_routes";
import TherapistRoutes from "./therapist_routes";
import { Router } from "express";
import { body } from "express-validator";

import { signup, signin } from "../controllers/auth";
export default Router()
    .use("/behaviour", BehaviorRoutes)
    .use("/patient", PatientRoutes)
    .use("/program", ProgramRoutes)
    .use("/report", ReportRoutes)
    .use("/therapist", TherapistRoutes)
    .post(
        "/signup",
        [
            body("name").not().isEmpty().withMessage("Name required"),
            body("email").not().isEmpty().withMessage("Email required"),
            body("email").isEmail().withMessage("Invalid email"),
            body("password").not().isEmpty().withMessage("Password required"),
            body("password_confirmation")
                .not()
                .isEmpty()
                .withMessage("Password required"),
            body("password_confirmation")
                .custom((value, { req }) => {
                    return value === req.body.password;
                })
                .withMessage("Passwords do not match"),
        ],
        signup
    )
    .post(
        "/signin",
        [
            body("email").not().isEmpty().withMessage("Email required"),
            body("email").isEmail().withMessage("Invalid email"),
            body("password").not().isEmpty().withMessage("Password required"),
        ],
        signin
    );
