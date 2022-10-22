import { Request, Response, NextFunction } from "express";
import { employeeModel } from "../models";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { createJWT } from "../utils/auth";
import { validationResult } from "express-validator";

// Therapist Sign Up
export const signup = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array().map((error) => {
                return {
                    [error.param]: error.msg,
                };
            }),
        });
    }
    let { name, email, password } = req.body;

    // Create Therapist Sign In
    employeeModel
        .findOne({ email: email })
        .then((user) => {
            if (user) {
                return res
                    .status(422)
                    .json({ errors: [{ user: "Email already exists" }] });
            } else {
                const user = new employeeModel({
                    name: name,
                    email: email,
                    password: password,
                });
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if (err) throw err;
                        user.password = hash;
                        user.save()
                            .then((response) => {
                                res.status(200).json({
                                    success: true,
                                    result: response,
                                });
                            })
                            .catch((err) => {
                                res.status(500).json({
                                    errors: [{ error: err }],
                                });
                            });
                    });
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                errors: [{ error: "Server error" }],
            });
        });
};

// Therapist Sign In
export const signin = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array().map((error) => {
                return {
                    [error.param]: error.msg,
                };
            }),
        });
    }

    let { email, password } = req.body;

    // Validate Therapist Sign In
    employeeModel
        .findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    errors: [{ user: "User not found" }],
                });
            } else {
                bcrypt
                    .compare(password, user.password)
                    .then((isMatch: boolean) => {
                        if (!isMatch) {
                            return res.status(400).json({
                                errors: [{ password: "Password is incorrect" }],
                            });
                        }
                        let access_token = createJWT(
                            user.email,
                            user._id,
                            3600
                        );
                        jwt.verify(
                            access_token,
                            process.env.TOKEN_SECRET,
                            (err, decoded) => {
                                if (err) {
                                    res.status(500).json({
                                        errors: [
                                            {
                                                error: "Verification Error",
                                                err,
                                            },
                                        ],
                                    });
                                }
                                if (decoded) {
                                    return res.status(200).json({
                                        success: true,
                                        token: access_token,
                                        message: user,
                                    });
                                }
                            }
                        );
                    })
                    .catch((err) => {
                        res.status(500).json({
                            errors: [{ error: "Comparison Error", err }],
                        });
                    });
            }
        })
        .catch((err) => {
            res.status(500).json({
                errors: [{ error: "Server error", err }],
            });
        });
};
