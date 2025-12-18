"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Box,
    Link,
    Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PrivacyPolicyDialog() {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    return (
        <Dialog fullScreen open onClose={handleClose}>
            {/* Simple white AppBar */}
            <AppBar
                elevation={0}
                sx={{
                    position: "relative",
                    bgcolor: "#ffffff",
                    color: "#000000",
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Toolbar>
                    <IconButton edge="start" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                        Privacy Policy
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* White letter-style body */}
            <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh", py: 6 }}>
                <Container maxWidth="md">
                    {/* Header */}
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Privacy Policy for Habitualize
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Last updated: December 18, 2025
                    </Typography>

                    <Divider sx={{ my: 4 }} />

                    {/* Intro */}
                    <Typography variant="body1" paragraph>
                        Habitualize ("we", "our", or "us") respects your privacy and is
                        committed to protecting it. This Privacy Policy explains how
                        information is collected, used, and handled when you use the
                        Habitualize mobile application (the "App").
                    </Typography>
                    <Typography variant="body1" paragraph>
                        By using Habitualize, you agree to the practices described in this
                        Privacy Policy.
                    </Typography>

                    {/* Section 1 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        1. Information We Collect
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
                        1.1 Habit Data
                    </Typography>
                    <Typography variant="body2" paragraph>
                        When you use Habitualize, you may:
                    </Typography>
                    <Box component="ul" sx={{ pl: 3 }}>
                        <li>
                            <Typography variant="body2">Create habits</Typography>
                        </li>
                        <li>
                            <Typography variant="body2">
                                Log habit completions or related notes
                            </Typography>
                        </li>
                    </Box>
                    <Typography variant="body2" paragraph sx={{ mt: 1 }}>
                        This information is referred to as <strong>Habit Data</strong> and is
                        provided directly by you for the purpose of tracking and improving
                        your habits.
                    </Typography>

                    <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
                        1.2 Personal Information
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Habitualize does not require you to provide personal information such
                        as your name, phone number, address, or payment details to use the
                        core features of the App.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We do not intentionally collect, store, or process personally
                        identifiable information.
                    </Typography>

                    {/* Section 2 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        2. How We Use Your Data
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We use your Habit Data solely to:
                    </Typography>
                    <Box component="ul" sx={{ pl: 3 }}>
                        <li>
                            <Typography variant="body2">
                                Enable habit creation and tracking
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2">
                                Generate insights, patterns, and feedback related to your habits
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2">
                                Improve your overall experience within the App
                            </Typography>
                        </li>
                    </Box>

                    <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2 }}>
                        AI‑Powered Analysis
                    </Typography>
                    <Typography variant="body2" paragraph>
                        To provide intelligent insights, your Habit Data (habit names, logs,
                        and related context) may be securely sent to third‑party Large
                        Language Model (LLM) providers such as OpenAI and Google Gemini.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        These providers process the data only to generate analytical
                        responses and do not receive information that directly identifies
                        you.
                    </Typography>

                    {/* Section 3 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        3. Data Storage and Retention
                    </Typography>
                    <Box component="ul" sx={{ pl: 3 }}>
                        <li>
                            <Typography variant="body2">
                                We store only the minimum Habit Data required for the App to
                                function.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2">
                                We do not create user profiles based on personal identity.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body2">
                                Habit Data is retained only as long as necessary to provide the
                                service.
                            </Typography>
                        </li>
                    </Box>
                    <Typography variant="body2" paragraph sx={{ mt: 1 }}>
                        If you delete your habits or uninstall the App, associated Habit Data
                        may be removed or anonymized according to our data retention
                        practices.
                    </Typography>

                    {/* Section 4 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        4. Data Sharing
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We do not sell, rent, trade, or share your data with advertisers or
                        data brokers. Data is shared only with trusted AI service providers
                        strictly for generating habit analysis and insights.
                    </Typography>

                    {/* Section 5 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        5. Data Security
                    </Typography>
                    <Typography variant="body2" paragraph>
                        We take reasonable technical and organizational measures to protect
                        your data against unauthorized access, loss, misuse, or disclosure.
                    </Typography>
                    <Typography variant="body2" paragraph fontStyle="italic">
                        However, no method of electronic storage or transmission is 100%
                        secure, and we cannot guarantee absolute security.
                    </Typography>

                    {/* Section 6 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        6. Children’s Privacy
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Habitualize is not intended for children under the age of 13. We do
                        not knowingly collect data from children.
                    </Typography>

                    {/* Section 7 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        7. Third‑Party Services
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Third‑party services used by the App process data in accordance with
                        their own privacy policies:
                    </Typography>
                    <Box component="ul" sx={{ pl: 3 }}>
                        <li>
                            <Link href="https://openai.com/privacy" target="_blank">
                                OpenAI Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="https://policies.google.com/privacy" target="_blank">
                                Google Privacy Policy
                            </Link>
                        </li>
                    </Box>

                    {/* Section 8 */}
                    <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                        8. Contact Us
                    </Typography>
                    <Typography variant="body2" paragraph>
                        If you have any questions or concerns about this Privacy Policy, you
                        may contact us at:
                    </Typography>
                    <Typography variant="body2">
                        <strong>Email:</strong> habitualizeai@gmail.com
                    </Typography>

                    <Divider sx={{ my: 6 }} />

                    {/* Footer */}
                    <Typography
                        variant="body2"
                        align="center"
                        color="text.secondary"
                        fontStyle="italic"
                    >
                        Habitualize is built with the philosophy of minimal data, maximum
                        value — your habits belong to you.
                    </Typography>
                </Container>
            </Box>
        </Dialog>
    );
}
