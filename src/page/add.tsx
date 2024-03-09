import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../api/server";

function AddPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  // const [type, setType] = useState();
  const [nickname, setNickname] = useState();
  const [birthday, setBirthday] = useState();

  const services = new Service();

  function goBack() {
    navigate(-1);
  }

  async function btnRegister(
    code: string,
    fname: string,
    lname: string,
    type: number,
    nickname: string,
    // birthday: string
  ) {
    const body = {
      code: code,
      fname: fname,
      lname: lname,
      type: type,
      nickname: nickname,
      // birthday: birthday,
    };

    console.log(body);
    console.log(body.code+" "+typeof(body.code));
    console.log(body.fname+" "+typeof(body.fname));
    console.log(body.lname+" "+typeof(body.lname));
    console.log(body.type+" "+typeof(body.type));
    console.log(body.nickname+" "+typeof(body.nickname));
    // console.log(body.birthday+" "+typeof(body.birthday));

    await services.postUserRegister(body);
  }

  return (
    <>
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
            width: "30%",
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
          <TextField
            label="รหัสนิสิต"
            type="text"
            name="code"
            style={{
              marginTop: "20px",
              width: "80%",
            }}
            onChange={(e) => {
              setCode(e.target.value);
              console.log(code);
            }}
          />

          <TextField
            label="ชื่อ"
            type="text"
            name="fname"
            style={{
              marginTop: "20px",
              width: "80%",
            }}
            onChange={(e) => {
              setFname(e.target.value);
              console.log(fname);
            }}
          />
          <TextField
            label="นามสกุล"
            type="text"
            name="lname"
            style={{
              marginTop: "20px",
              width: "80%",
            }}
            onChange={(e) => {
              setLname(e.target.value);
              console.log(lname);
            }}
          />

          <TextField
            label="ชื่อเล่น"
            type="text"
            name="nickname"
            style={{
              marginTop: "20px",
              width: "80%",
            }}
            onChange={(e) => {
              setNickname(e.target.value);
              console.log(nickname);
            }}
          />

          <TextField
            label="วัน/เดือน/ปีเกิด"
            type="text"
            name="birthday"
            style={{
              marginTop: "20px",
              width: "80%",
            }}
            onChange={(e) => {
              setBirthday(e.target.value);
              console.log(birthday);
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              onClick={() => goBack()}
            >
              Back
            </Button>
            <span></span>
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              onClick={() =>
                btnRegister(
                  String(code),
                  String(fname),
                  String(lname),
                  1,
                  String(nickname),
                  String(birthday)
                )
              }
            >
              Add
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
export default AddPage;
