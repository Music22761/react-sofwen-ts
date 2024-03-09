import axios from "axios";
import { UsersGetRespose } from "../model/UserModel";
// import { PictureGetResponse } from "../model/PictureModel";

// eslint-disable-next-line react-refresh/only-export-components
const HOST: string = "http://localhost:3000/";

export class Service {

  async getAllUser() {
    const url = HOST + `user`;
    const response = await axios.get(url);
    const users: UsersGetRespose[] = response.data;
    return users;
  }


  async getUserById(id: number) {
    const url = HOST + `user/idx?id=${id}`;
    const response = await axios.get(url);
    const user: UsersGetRespose[] = response.data;
    return user;
  }

  async searchUser(search: string) {
    const url = HOST + `user/idx?id=${search}`;
    const response = await axios.get(url);
    const user: UsersGetRespose[] = response.data;
    return user;
  }

  async postUserRegister(body: { code: string | undefined; fname: string | undefined; lname: string | undefined; type: number | undefined; nickname: string | undefined; }) {
    const url = HOST + `user/`;
    const response = await axios.post(url,body);
    const res = response.data
    console.log(res);
    
  }

  async putUserEdit(body: { name: string | undefined; email: string | undefined },id:number) {
    const url = HOST + `user/edit/${id}`;
    const response = await axios.put(url,body);
    const res = response.data
    console.log(res);
    
  }

}