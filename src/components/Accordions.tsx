import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, Link } from "@mui/material";
import TransactionsTable from "./TransactionsTable";
import { useAppSelector } from "../redux/app/hooks";

export default function Accordions() {
  const { data } = useAppSelector((state) => state.googleQuery);

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid sx={{ width: "100%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ width: "20%", flexShrink: 0, color: "text.secondary" }}
          >
            Question 1
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            How often does the Bitcoin network see two consecutive blocks mined
            more than 2 hours apart from each other? We'd like to know your
            answer (it doesn't have to be precise) and your approach towards
            this solution using probability and statistics.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.primary" }}>
            - Average time for a block: 10 min therefore 12 block for 120 min
          </Typography>
          <Typography sx={{ color: "text.primary" }}>
            - Using Poisson Distribution Probabilities -
            <Link
              href="https://en.wikipedia.org/wiki/Poisson_distribution"
              sx={{ color: "text.primary" }}
            >
              link
            </Link>
          </Typography>
          <Typography sx={{ color: "text.primary" }}>
            - 𝝀 the mean/average = 12 - 𝑲 number of events = 0
          </Typography>
          <Typography sx={{ color: "text.primary" }}>
            - Answer = Every 1130 days and 6 hours
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{ width: "20%", flexShrink: 0, color: "text.secondary" }}
          >
            Question 2
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            How many times has the above happened so far in the history of
            Bitcoin?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.primary" }}>
            The number of rows Reference table: {data.length}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: "gray", margin: "auto" }}>
            Resources
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid item>
            <TransactionsTable />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
