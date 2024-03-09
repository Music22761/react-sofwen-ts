import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid,
  Button,
  CircularProgress,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Service } from "../api/server";
import { useEffect, useState } from "react";
import { UsersGetRespose } from "../model/UserModel";

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
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState<UsersGetRespose[]>();

  const services = new Service();

  const [searchValue, setSearchValue] = useState("");
  // const [idValue, setIdValue] = useState(0);
  const [page, setPage] = useState(0);


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchValue.length > 0) {
      // เรียกใช้ฟังก์ชั่นค้นหา
      console.log("ค้นหา:", searchValue);
      console.log("page handle key press " + page);
      setPage(1);
    }else if (e.key === "Enter" && searchValue.length <= 0) {
      alert("กรุณาใส่ข้อมูลก่อนค้นหา !!!");
    }
  };

  function navigateToAdd() {
    navigateadd("/adduser");
  }
  function navigateTo(id:number) {
    navigate(`/edit?id=${id}`);
  }

  useEffect(() => {
    autoLoad();
  }, []);

  const autoLoad = async () => {
    setLoading(true);
    try {
      const res = await services.getAllUser();

      setUsers(res);
      console.log(users?.[0]?.nickname);
    } catch (error) {
      console.error("Failed to load data:", error);
    } finally {
      setLoading(false);
    }
  };

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
              <Button variant="contained" onClick={navigateToAdd}>
                Add User
              </Button>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => {
                    // setIdValue(0);
                    setSearchValue(e.target.value);
                    
                  }}
                  onKeyPress={handleKeyPress}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div>
        {loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                alignContent: "center",
                marginTop: "10vh",
              }}
            >
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {users?.map((e) => (
                  <Grid item xs={2} sm={4} md={4} key={e.id}>

                    <Card sx={{ maxWidth: 345 , boxShadow:'3px 3px 3px 3px'}}>
                      <CardActionArea onClick={()=>{
                        navigateTo(e.id);
                      }}>
                        <CardContent>
                          <Typography variant="h5">รหัส : {e.code}</Typography>
                          <Typography variant="h5">
                            ชื่อ : {e.type}
                            {e.fname} {e.lname}
                          </Typography>
                          <Typography variant="h5">
                            ชื่อเล่น : {e.nickname}
                          </Typography>
                          <Typography variant="h5">
                            วันเกิด : {e.bitrhday}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        )}
      </div>
    </>
  );
}
export default HomePage;
