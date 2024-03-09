import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function HomePage() {
  const navigate = useNavigate();
  const navigateadd = useNavigate();

  function navigateToAdd() {
    navigateadd("/adduser");
  }
  function navigateTo() {
    navigate("/edit");
  }
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                ระบบจัดการนักศึกษา
              </Typography>
              <Button variant="contained" onClick={navigateToAdd}>Add User</Button>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div>
        <Box sx={{ flexGrow: 0, marginLeft: "100px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "gray",
                    width: "300px",
                    height: "300px",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{ marginTop: "100px", cursor: "pointer" }}
                    onClick={navigateTo}
                  >
                    <h1>
                      รหัส : <br />
                      ชื่อ : <br />
                      ชื่อเล่น : <br />
                      วันเกิด : <br />
                    </h1>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
export default HomePage;
