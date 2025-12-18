"use client";

import * as React from "react";
import {
    Box,
    Button,
    Container,
    Typography,
    AppBar,
    Toolbar,
    Stack,
    Paper,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRouter } from "next/navigation";

function InsightCard({
    title,
    value,
    subtitle,
}: {
    title: string;
    value: string;
    subtitle?: string;
}) {
    return (
        <Paper
            sx={{
                flex: 1,
                p: 2.5,
                borderRadius: 3,
                background: "#0b1220",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {title}
            </Typography>
            <Typography variant="h5" fontWeight={700} sx={{ my: 1 }}>
                {value}
            </Typography>
            {subtitle && (
                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                    {subtitle}
                </Typography>
            )}
        </Paper>
    );
}

export default function HomePage() {
    const router = useRouter();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "radial-gradient(1200px 600px at 50% -10%, #1f3b4d 0%, #05070a 60%)",
                color: "#fff",
            }}
        >
            {/* ================= Top Navigation ================= */}
            <AppBar position="fixed" elevation={0} sx={{
                backgroundColor: "#050709", // dark translucent
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo + Name */}
                    <Stack direction="row" alignItems="center" spacing={1.2}>
                        <Box
                            component="img"
                            src="/logo.png"
                            alt="Habitualize logo"
                            sx={{
                                width: 28,
                                height: 28,
                                borderRadius: 1,
                            }}
                        />
                        <Typography variant="h6" fontWeight={700}>
                            Habitualize
                        </Typography>
                    </Stack>

                    {/* Desktop Nav */}
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <Button color="inherit" onClick={() => scrollToSection("home")}>
                            Home
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection("user-guide")}>
                            User Guide
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection("faqs")}>
                            FAQs
                        </Button>
                        <Button color="inherit" onClick={() => scrollToSection("report-bug")}>
                            Report Bug
                        </Button>
                        <Button color="inherit" onClick={() => router.push("/privacy")}>
                            Privacy Policy
                        </Button>
                        <Button variant="contained" color="primary" sx={{ borderRadius: 6 }}>
                            Join the waitlist
                        </Button>
                    </Stack>

                    {/* Mobile CTA */}
                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{ display: { xs: "flex", md: "none" } }}
                    >
                        <Button variant="contained" color="primary" sx={{ borderRadius: 6 }}>
                            Join waitlist
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* ================= Hero Section ================= */}
            <Container
                id="home"
                maxWidth="md"
                sx={{ pt: { xs: 8, md: 14 }, pb: 10, textAlign: "center" }}
            >
                <Typography
                    variant="h2"
                    fontWeight={800}
                    sx={{
                        mb: 3,
                        background: "linear-gradient(180deg, #ffffff, #b5c7d6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Build better habits with
                    <br />
                    intelligent context
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ maxWidth: 720, mx: "auto", opacity: 0.8, mb: 5 }}
                >
                    Habitualize goes beyond yes/no tracking. It understands why habits
                    succeed or fail, connects patterns across your life, and gives you
                    AI-powered insights to improve — consistently and sustainably.
                </Typography>

                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button size="large" variant="contained" sx={{ borderRadius: 6 }}>
                        Join the waitlist
                    </Button>
                    <Button
                        size="large"
                        variant="outlined"
                        sx={{
                            borderRadius: 6,
                            color: "#fff",
                            borderColor: "rgba(255,255,255,0.3)",
                        }}
                        onClick={() => scrollToSection("dashboard-preview")}
                    >
                        Learn more
                    </Button>
                </Stack>

                <Box sx={{ mt: 6, opacity: 0.6 }}>
                    <ArrowDownwardIcon />
                </Box>
            </Container>

            {/* ================= Dashboard Preview ================= */}
            <Container id="dashboard-preview" maxWidth="lg" sx={{ pb: 14 }}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    textAlign="center"
                    sx={{ mb: 6 }}
                >
                    See Habitualize in action
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        px: { xs: 2, md: 0 },
                    }}
                >
                    {["screenshot4.png", "screenshot2.png", "screenshot3.png"].map(
                        (img) => (
                            <Box
                                key={img}
                                component="img"
                                src={`/screenshots/${img}`}
                                alt="Habitualize screenshot"
                                sx={{
                                    width: { xs: 280, sm: 300, md: 320 },
                                    borderRadius: 14,
                                    border: "2px solid rgba(255,255,255,0.15)",
                                    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": { transform: "translateY(-8px)" },
                                }}
                            />
                        )
                    )}
                </Box>
            </Container>
        </Box>
    );
}
