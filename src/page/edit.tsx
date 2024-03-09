import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EditPage() {
  const navigate = useNavigate();

  function navigateTo() {
    navigate(-1);
  }
  return (
    <>
      <div
        style={{ display: "grid", placeItems: "center", marginTop: "100px" }}
      >
        <div>
          <Button onClick={navigateTo} variant="contained">back</Button>
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
          </div>
        </Box>
      </div>
    </>
  );
}
export default EditPage;
