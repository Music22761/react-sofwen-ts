import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  const navigatehome = useNavigate();

  function navigateToHome() {
    navigatehome("/");
  }
  function navigateTo() {
    navigate(-1);
  }
  return (
    <>
      <div
        style={{ display: "grid", placeItems: "center", marginTop: "100px" }}
      >
        <div>
          <Button variant="contained" onClick={navigateTo}>
            back
          </Button>
        </div>
        <Box
          sx={{
            backgroundColor: "gray",
            width: "500px",
            height: "500px",
            borderRadius: "20px",
          }}
        >
          <div>
            <h1>
              รหัส : <br />
              ชื่อ : <br />
              ชื่อเล่น : <br />
              วันเกิด : <br />
            </h1>
            <Button variant="contained" onClick={navigateToHome}>
              add
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}
export default AddPage;
