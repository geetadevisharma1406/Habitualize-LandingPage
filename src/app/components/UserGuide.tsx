"use client";

import * as React from "react";
import {
    Box,
    Button,
    Container,
    Typography,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BookOpenIcon from "@mui/icons-material/MenuBook";
import TargetIcon from "@mui/icons-material/TrackChanges";
import BrainIcon from "@mui/icons-material/Psychology";
import BarChartIcon from "@mui/icons-material/BarChart";
import MessageIcon from "@mui/icons-material/Chat";

interface GuideSectionProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
    defaultExpanded?: boolean;
}

function GuideSection({
    icon: Icon,
    title,
    children,
    defaultExpanded = false,
}: GuideSectionProps) {
    return (
        <Accordion
            defaultExpanded={defaultExpanded}
            disableGutters
            sx={{
                mb: 2,
                background: "rgba(17, 24, 39, 0.55)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "14px !important",
                color: "#fff",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                    margin: 0,
                },
            }}
        >
            <AccordionSummary
                expandIcon={
                    <ExpandMoreIcon sx={{ color: "rgba(255,255,255,0.6)" }} />
                }
                sx={{
                    px: 3,
                    py: 2,
                    "& .MuiAccordionSummary-content": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                    },
                }}
            >
                <Icon sx={{ color: "#60a5fa", fontSize: 26 }} />
                <Typography variant="h6" fontWeight={700}>
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails
                sx={{
                    px: 3,
                    pb: 3,
                    color: "rgba(255,255,255,0.85)",
                }}
            >
                {children}
            </AccordionDetails>
        </Accordion>
    );
}

export default function UserGuide() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "radial-gradient(1200px 600px at 50% -10%, #1f3b4d 0%, #05070a 60%)",
                color: "#fff",
            }}
        >
            {/* Hero */}
            <Container maxWidth="md" sx={{ pt: 8, pb: 6, textAlign: "center" }}>
                <Box
                    sx={{
                        width: 64,
                        height: 64,
                        mx: "auto",
                        mb: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        background: "rgba(37, 99, 235, 0.2)",
                    }}
                >
                    <BookOpenIcon sx={{ fontSize: 32, color: "#60a5fa" }} />
                </Box>

                <Typography
                    variant="h2"
                    fontWeight={800}
                    sx={{
                        mb: 2,
                        background: "linear-gradient(180deg, #fff, #b5c7d6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    User Guide
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ maxWidth: 720, mx: "auto", opacity: 0.75 }}
                >
                    Everything you need to know to master Habitualize and build lasting
                    habits.
                </Typography>
            </Container>

            {/* Content */}
            <Container maxWidth="md" sx={{ pb: 10 }}>
                <GuideSection
                    icon={TargetIcon}
                    title="Getting Started"
                    defaultExpanded
                >
                    <Stack spacing={2}>
                        <Typography fontWeight={600}>
                            1. Create Your First Habit
                        </Typography>
                        <Typography variant="body2">
                            Tap the “+” button and name your habit clearly — for example
                            “Morning Meditation”.
                        </Typography>

                        <Typography fontWeight={600}>
                            2. Set Your Schedule
                        </Typography>
                        <Typography variant="body2">
                            Choose specific days or a custom frequency that fits your life.
                        </Typography>

                        <Typography fontWeight={600}>
                            3. Add Context
                        </Typography>
                        <Typography variant="body2">
                            Track mood, energy, or location to uncover what truly affects
                            consistency.
                        </Typography>
                    </Stack>
                </GuideSection>

                <GuideSection icon={BarChartIcon} title="Tracking Your Habits">
                    <Typography fontWeight={600} gutterBottom>
                        Daily Check-ins
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Log completion along with short notes — what helped or blocked you.
                    </Typography>

                    <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                        {[
                            "Time of day",
                            "Energy level",
                            "Mood",
                            "Location",
                            "People around",
                        ].map((item) => (
                            <Typography
                                key={item}
                                component="li"
                                variant="body2"
                                sx={{ mb: 0.5 }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </GuideSection>

                <GuideSection icon={BrainIcon} title="Understanding AI Insights">
                    <Typography fontWeight={600} gutterBottom>
                        Weekly Analysis
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        AI finds patterns — sleep, weekdays, environments — and explains
                        what works best for you.
                    </Typography>
                </GuideSection>

                <GuideSection icon={MessageIcon} title="Using the AI Coach">
                    <Typography fontWeight={600} gutterBottom>
                        Ask Anything
                    </Typography>

                    <Box component="ul" sx={{ pl: 3 }}>
                        {[
                            "Why am I missing mornings?",
                            "Best workout time?",
                            "How to stay consistent on weekends?",
                        ].map((q) => (
                            <Typography
                                key={q}
                                component="li"
                                variant="body2"
                                sx={{ mb: 0.5 }}
                            >
                                {q}
                            </Typography>
                        ))}
                    </Box>
                </GuideSection>

                {/* Pro Tips */}
                <Paper
                    sx={{
                        mt: 6,
                        p: 4,
                        background:
                            "linear-gradient(135deg, rgba(30,58,138,.35), rgba(88,28,135,.35))",
                        border: "1px solid rgba(96,165,250,.4)",
                        borderRadius: 3,
                        color: "#fff",
                    }}
                >
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Pro Tips
                    </Typography>

                    <Stack spacing={1.5}>
                        <Typography variant="body2">
                            ✨ <strong>Start small</strong> — 2–3 habits beat 10 abandoned ones.
                        </Typography>
                        <Typography variant="body2">
                            📝 <strong>Be honest</strong> — missed days are insights, not
                            failures.
                        </Typography>
                        <Typography variant="body2">
                            🎯 <strong>Be specific</strong> — clarity drives consistency.
                        </Typography>
                    </Stack>
                </Paper>

                {/* CTA */}
                <Box sx={{ mt: 6, textAlign: "center" }}>
                    <Typography sx={{ mb: 2, opacity: 0.75 }}>
                        Ready to build better habits?
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: 5,
                            borderRadius: 6,
                            boxShadow: "0 10px 30px rgba(37,99,235,.35)",
                        }}
                    >
                        Join the Waitlist
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
