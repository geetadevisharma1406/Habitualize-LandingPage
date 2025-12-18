"use client";

import * as React from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    defaultExpanded?: boolean;
}

function FAQItem({
    question,
    answer,
    defaultExpanded = false,
}: FAQItemProps) {
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
                "&.Mui-expanded": { margin: 0 },
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
                        margin: 0,
                    },
                }}
            >
                <Typography variant="subtitle1" fontWeight={600}>
                    {question}
                </Typography>
            </AccordionSummary>

            <AccordionDetails
                sx={{
                    px: 3,
                    pb: 3,
                    color: "rgba(255,255,255,0.85)",
                }}
            >
                {answer}
            </AccordionDetails>
        </Accordion>
    );
}

export default function FAQs() {
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
                    <HelpOutlineIcon sx={{ fontSize: 32, color: "#60a5fa" }} />
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
                    Frequently Asked Questions
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ maxWidth: 720, mx: "auto", opacity: 0.75 }}
                >
                    Find answers to common questions about Habitualize.
                </Typography>
            </Container>

            {/* Content */}
            <Container maxWidth="md" sx={{ pb: 10 }}>


                {/* FAQs stay exactly same – only list styling improved */}
                {/* Example list styling below */}
                <FAQItem
                    question="What is Habitualize?"
                    defaultExpanded
                    answer={
                        <Typography variant="body2">
                            Habitualize is an AI-powered habit tracker that understands the
                            context behind your habits and provides personalized insights to
                            help you stay consistent.
                        </Typography>
                    }
                />

                <FAQItem
                    question="How is Habitualize different?"
                    answer={
                        <>
                            <Typography variant="body2" gutterBottom>
                                Habitualize captures more than completion:
                            </Typography>

                            <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                                {[
                                    "Context tracking (mood, energy, location)",
                                    "AI-powered insights",
                                    "Personalized recommendations",
                                    "Conversational AI coach",
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
                        </>
                    }
                />

                {/* Still Have Questions */}
                <Paper
                    sx={{
                        mt: 6,
                        p: 4,
                        textAlign: "center",
                        background:
                            "linear-gradient(135deg, rgba(30,58,138,.35), rgba(88,28,135,.35))",
                        border: "1px solid rgba(96,165,250,.4)",
                        borderRadius: 3,
                    }}
                >
                    <Typography color={"white"} variant="h5" fontWeight={700} gutterBottom>
                        Still have questions?
                    </Typography>

                    <Typography color={"white"} variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                        Reach out and we’ll help you as soon as possible.
                    </Typography>

                    <Typography color={"white"} variant="body2">
                        Email: <strong>habitualizeai@gmail.com</strong>
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
}
