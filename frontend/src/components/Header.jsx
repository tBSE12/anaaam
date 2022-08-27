import React from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import { Box, Typography, Button, ButtonGroup } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        // backgroundColor:"White",
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        component="h1"
        fontFamily={'Rubik Iso'}
        variant="h2"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        ANAAAM🤫
      </Typography>

      {user ? (
        <ButtonGroup variant="text">
          <Button
            color="primary"
            onClick={() => {
              navigate("/me");
            }}
          >
            Me
          </Button>

          <Button
            color="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Messages
          </Button>
          <Button
            color="error"
            onClick={() => {
              dispatch(logout());
              dispatch(reset());
            }}
          >
            Logout
          </Button>
        </ButtonGroup>
      ) : (
        ""
      )}
    </Box>
  );
}
