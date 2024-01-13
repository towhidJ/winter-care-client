import { Alert, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
    const [rating, setRating] = useState(1);
    const [success, setSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        data.rating = rating;
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    console.log(result);
                    setSuccess(true);
                }
            });

        reset();
    };
    return (
        <div>
            <div>
                <Box
                    sx={{
                        "& > :not(style)": { m: 1 },
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={4} justifyContent="center">
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ width: "80%" }}
                                    id="name"
                                    label="Name"
                                    defaultValue={user.displayName}
                                    {...register("userName")}
                                />
                                <TextField
                                    sx={{ width: "80%" }}
                                    hidden
                                    defaultValue={user.photoURL}
                                    {...register("img")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ width: "80%" }}
                                    id="email"
                                    label="User Email"
                                    defaultValue={user.email}
                                    {...register("email")}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    sx={{ width: "80%" }}
                                    multiline
                                    rows={4}
                                    rowsMax={4}
                                    label="Feedback"
                                    placeholder="Enter Your Feedback"
                                    defaultValue=""
                                    {...register("feedback", {
                                        required: true,
                                    })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="legend">
                                    Rating
                                </Typography>
                                <Rating
                                    defaultValue={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained">
                                    Submit Your Feedback
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    {success && (
                        <Alert severity="success">
                            Your Feedback submission successfully!
                        </Alert>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default Review;
