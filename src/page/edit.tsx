import { Button, Card, CircularProgress, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UsersGetRespose } from "../model/UserModel";
import { Service } from "../api/server";

function EditPage() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState<UsersGetRespose[]>();
  const id = Number(searchParam.get("id"));

  const services = new Service();

  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    autoLoad();
  }, []);

  const autoLoad = async () => {
    setLoading(true);
    try {
      const res = await services.getUserById(id);

      setUsers(res);
      console.log(users);

      console.log(users?.[0]?.nickname);
    } catch (error) {
      console.error("Failed to load data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Card
            style={{
              width: "50%",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderRadius: "30px",
              boxShadow: "3px 3px 3px 3px",
            }}
          >
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h5">รหัสนิสิต</Typography>
                <TextField
                  placeholder={users?.[0]?.code}
                  type="text"
                  name="fname"
                  onChange={() => {}}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h5">ชื่อ</Typography>
                <TextField
                  placeholder={users?.[0]?.fname}
                  type="text"
                  name="fname"
                  onChange={() => {}}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h5">นามสกุล</Typography>
                <TextField
                  placeholder={users?.[0]?.lname}
                  type="text"
                  name="fname"
                  onChange={() => {}}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h5">ชื่อเล่น</Typography>
                <TextField
                  placeholder={users?.[0]?.nickname}
                  type="text"
                  name="fname"
                  onChange={() => {}}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="h5">วันเกิด</Typography>
                <TextField
                  placeholder={users?.[0]?.bitrhday}
                  type="text"
                  name="fname"
                  onChange={() => {}}
                />
              </div>
            </div>
            <Button variant="contained" onClick={()=>goBack()}>
              Back
            </Button>
          </Card>
        </div>
      )}
    </>
  );
}
export default EditPage;
