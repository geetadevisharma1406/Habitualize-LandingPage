"use client";

import * as React from "react";
import {
    Box,
    Button,
    Container,
    Typography,
    Paper,
    Stack,
} from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import EmailIcon from "@mui/icons-material/Email";

export default function ReportBug() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "radial-gradient(1200px 600px at 50% -10%, #1f3b4d 0%, #05070a 60%)",
                color: "#fff",
            }}
        >
            {/* Hero Section */}
            <Container maxWidth="md" sx={{ pt: 8, pb: 6, textAlign: "center" }}>
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 64,
                        height: 64,
                        background: "rgba(37, 99, 235, 0.2)",
                        borderRadius: "50%",
                        mb: 3,
                    }}
                >
                    <BugReportIcon sx={{ fontSize: 32, color: "#60a5fa" }} />
                </Box>
                <Typography
                    variant="h2"
                    fontWeight={800}
                    sx={{
                        mb: 2,
                        background: "linear-gradient(180deg, #ffffff, #b5c7d6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Help Us Improve
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 720, mx: "auto", opacity: 0.7 }}>
                    Found a bug or have an idea? We'd love to hear from you!
                </Typography>
            </Container>

            {/* Content */}
            <Container maxWidth="md" sx={{ pb: 10 }}>
                <Typography variant="body1" paragraph sx={{ opacity: 0.9, textAlign: "center", mb: 6 }}>
                    Your feedback helps us make Habitualize better for everyone. Whether you've encountered a bug,
                    have a suggestion for a new feature, or just want to share your thoughts, we're listening.
                </Typography>

                {/* Action Cards */}
                <Stack spacing={3} sx={{ mb: 6 }}>
                    {/* Report a Bug Card */}
                    <Paper
                        sx={{
                            p: 4,
                            background: "rgba(17, 24, 39, 0.5)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 3,
                            color: "#fff",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                border: "1px solid rgba(239, 68, 68, 0.3)",
                                background: "rgba(17, 24, 39, 0.7)",
                            },
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <BugReportIcon sx={{ fontSize: 40, color: "#ef4444", mr: 2 }} />
                            <Typography variant="h5" fontWeight={700}>
                                Report a Bug
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                            Encountered an issue or something not working as expected? Let us know so we can fix it
                            quickly. Please include:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                What you were trying to do
                            </Typography>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                What happened instead
                            </Typography>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                Your device and app version (if applicable)
                            </Typography>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                Screenshots or screen recordings (if possible)
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: 6,
                                color: "#fff",
                                px: 4,
                                bgcolor: "#ef4444",
                                "&:hover": { bgcolor: "#dc2626" },
                            }}
                            startIcon={<EmailIcon />}
                            href="https://habituailize.userjot.com/board/bugs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Report a Bug
                        </Button>
                    </Paper>

                    {/* Request a Feature Card */}
                    <Paper
                        sx={{
                            p: 4,
                            background: "rgba(17, 24, 39, 0.5)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 3,
                            color: "#fff",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                border: "1px solid rgba(250, 204, 21, 0.3)",
                                background: "rgba(17, 24, 39, 0.7)",
                            },
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <LightbulbIcon sx={{ fontSize: 40, color: "#facc15", mr: 2 }} />
                            <Typography variant="h5" fontWeight={700}>
                                Request a Feature
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                            Have an idea that would make Habitualize even better? We're always looking for ways to
                            improve. Share your suggestions for:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                New features you'd like to see
                            </Typography>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                Improvements to existing features
                            </Typography>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                Integrations with other apps
                            </Typography>
                            <Typography component="li" variant="body2" sx={{ opacity: 0.9, mb: 0.5 }}>
                                Design or user experience enhancements
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                borderRadius: 6,
                                px: 4,
                                bgcolor: "#facc15",
                                color: "#000",
                                "&:hover": { bgcolor: "#eab308" },
                            }}
                            startIcon={<EmailIcon />}
                            href="https://habituailize.userjot.com/board/features"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Request a Feature
                        </Button>
                    </Paper>
                </Stack>

                {/* Additional Info */}
                <Paper
                    sx={{
                        p: 4,
                        background: "linear-gradient(135deg, rgba(30, 58, 138, 0.3), rgba(88, 28, 135, 0.3))",
                        border: "1px solid rgba(96, 165, 250, 0.5)",
                        borderRadius: 3,
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                        We Value Your Feedback
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                        Every piece of feedback helps us build a better product. We read and consider every
                        submission, and we'll do our best to respond within 48 hours.
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        You can also reach us directly at: <strong>habitualizeai@gmail.com</strong>
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
}