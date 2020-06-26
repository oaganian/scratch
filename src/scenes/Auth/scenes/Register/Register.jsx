import React from "react";

/**@DESC mui  */
import {
  Input,
  Button,
  FormControl,
  InputLabel,
  Typography,
  Box,
} from "@material-ui/core";

const Register = () => {
  return (
    <Box component="section">
      <Typography component="h2">Registration</Typography>

      <Typography>
        <Typography>Start from Scratch</Typography>
        <Typography>Create account to continue.</Typography>
      </Typography>

      <form>
        <FormControl>
          <InputLabel htmlFor="name">Full Name</InputLabel>
          <Input type="text" name="name" id="name" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input type="text" name="name" id="email" />
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input type="text" name="password" id="password" />
        </FormControl>

        <Button type="button">Sign Up</Button>
      </form>
    </Box>
  );
};

export default Register;
