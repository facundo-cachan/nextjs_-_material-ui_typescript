import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MaterialUI } from "components";
export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <MaterialUI.Buttons.Linked
          href="/signIn"
          text="Go to the signIn page"
        />
        <br />
        <MaterialUI.Buttons.Linked
          href="/signUp"
          text="Go to the signUp page"
        />
        <br />
        <MaterialUI.Buttons.Linked
          href="/signInSide"
          text="Go to the signInSide page"
        />
      </Box>
    </Container>
  );
}
