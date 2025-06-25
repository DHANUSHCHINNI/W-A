/* import React, { useState } from "react";
import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
    {
        name: "Ben Chaffee",
        subheading: "Engineer | Fitness",
        review: "We were happy and impressed by the website! We love how it looks and how it's worked for the business! The team made sure to understand our needs and then execute what we needed.",
        color: "#b19a8b"
    },
    {
        name: "Jordan Rosenfeld",
        subheading: "Renaissance Creations",
        review: "I couldn't believe how fast the requested changes were made. The new site is beautiful and exciting! Just like you first envisioned.",
        color: "#b7e5dd"
    },
    {
        name: "Matt Biondi",
        subheading: "Freelancer",
        review: "The new site looks amazing! I really appreciate the on-going support and advice. The team continues to offer it each month.",
        color: "#ffe0b2"
    },
    {
        name: "Priya Sharma",
        subheading: "Community Member",
        review: "A wonderful space for healing and creativity. I felt truly seen and heard!",
        color: "#d1c1b2"
    },
    {
        name: "Arjun Mehta",
        subheading: "Workshop Participant",
        review: "The workshops are engaging and transformative. Highly recommend to anyone looking for growth!",
        color: "#b19a8b"
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const visibleCards = 3;
    const maxIndex = testimonials.length - visibleCards;

    const handlePrev = () => setIndex((prev) => Math.max(0, prev - 1));
    const handleNext = () => setIndex((prev) => Math.min(maxIndex, prev + 1));

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                bgcolor: '#f5ede6',
                color: '#2e1a13',
                fontFamily: 'Erstoria',
                py: 6,
                px: 2,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1400,
                    mx: 'auto',
                    bgcolor: '#fff',
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(44, 28, 19, 0.10)',
                    p: { xs: 2, sm: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2" sx={{ fontSize: 40, fontWeight: 600, mb: 1, color: '#b19a8b', textAlign: 'center' }}>
                    Testimonials
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#7a5c3e', mb: 5, textAlign: 'center', fontSize: 20 }}>
                    Don't just take our word for it, hear what people have to say about us.
                </Typography>
                <Grid container spacing={3} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 1400 }}>
                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={handlePrev} disabled={index === 0} sx={{ height: 56, width: 56 }}>
                            <ArrowBackIosNewIcon sx={{ color: index === 0 ? '#b19a8b' : '#2e1a13', fontSize: 32 }} />
                        </IconButton>
                    </Grid>
                    {testimonials.slice(index, index + visibleCards).map((t, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Card sx={{ background: t.color, borderRadius: 3, boxShadow: 3, width: 340, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#83351b', mb: 0.5 }}>
                                        {t.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ color: '#7a5c3e', mb: 2, fontSize: 16 }}>
                                        {t.subheading}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#2e1a13', fontSize: 18, fontStyle: 'italic' }}>
                                        " {t.review} "
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={handleNext} disabled={index === maxIndex} sx={{ height: 56, width: 56 }}>
                            <ArrowForwardIosIcon sx={{ color: index === maxIndex ? '#b19a8b' : '#2e1a13', fontSize: 32 }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
} */