import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const FaqPage: React.FC = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq.question1.title"),
      answer: t("faq.question1.answer"),
    },
    {
      question: t("faq.question2.title"),
      answer: t("faq.question2.answer"),
    },
    {
      question: t("faq.question3.title"),
      answer: t("faq.question3.answer"),
    },
    {
      question: t("faq.question4.title"),
      answer: t("faq.question4.answer"),
    },
  ];

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        backgroundColor: "background.paper",
        color: "text.primary",
        borderRadius: 2,
        mt: 4,
        mb: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "primary.main",
          fontWeight: "bold",
          mb: 4,
        }}
      >
        {t("faq.title")}
      </Typography>
      <Box>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "background.default",
              color: "text.primary",
              mb: 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
            >
              <Typography variant="h6" sx={{ fontWeight: "medium" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FaqPage;
