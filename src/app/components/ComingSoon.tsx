"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#7C3AED" // premium violet
        },
        background: {
            default: "#0B0B12",
            paper: "rgba(255,255,255,0.04)"
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#B5B5C3"
        }
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h2: {
            fontWeight: 700,
            letterSpacing: "-0.02em"
        },
        h5: {
            fontWeight: 400
        }
    },
    shape: {
        borderRadius: 20
    }
});

const ComingSoon: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: "100vh",
                    background:
                        "radial-gradient(1200px circle at top right, rgba(124,58,237,0.25), transparent 40%), radial-gradient(800px circle at bottom left, rgba(59,130,246,0.15), transparent 40%), #0B0B12",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Container maxWidth="md">
                    <Box
                        sx={{
                            p: { xs: 4, md: 8 },
                            background: "rgba(255,255,255,0.04)",
                            backdropFilter: "blur(18px)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 6,
                            boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
                            textAlign: "center"
                        }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                letterSpacing: "0.3em",
                                color: "primary.main"
                            }}
                        >
                            HABITUALIZE
                        </Typography>

                        <Typography variant="h2" sx={{ mt: 3 }}>
                            Build habits.
                            <br />
                            Build discipline.
                            <br />
                            <Box component="span" sx={{ color: "primary.main" }}>
                                Build your best self.
                            </Box>
                        </Typography>

                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{ mt: 3, maxWidth: 640, mx: "auto" }}
                        >
                            Habitualize is a premium habit & consistency platform designed for
                            people who want real transformation — not motivation, but systems.
                            We’re launching soon.
                        </Typography>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                            justifyContent="center"
                            sx={{ mt: 6 }}
                        >
                            <Button
                                size="large"
                                variant="contained"
                                startIcon={<EmailOutlinedIcon />}
                                sx={{
                                    px: 5,
                                    py: 1.6,
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    boxShadow: "0 10px 40px rgba(124,58,237,0.4)"
                                }}
                            >
                                Notify Me at Launch
                            </Button>

                            <Button
                                size="large"
                                variant="outlined"
                                sx={{
                                    px: 5,
                                    py: 1.6,
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    borderColor: "rgba(255,255,255,0.2)",
                                    color: "text.primary",
                                    "&:hover": {
                                        borderColor: "primary.main"
                                    }
                                }}
                            >
                                View Product Vision
                            </Button>
                        </Stack>

                        <Typography
                            variant="caption"
                            sx={{ display: "block", mt: 6, color: "text.secondary" }}
                        >
                            © {new Date().getFullYear()} Habituizze. Designed for the
                            disciplined.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default ComingSoon;
