import api from "./axios";
import type { SignupData } from "../types/signupType";
 
export const signup = async (data: SignupData) => {
    const response = await api.post("/auth/signup", data);
    return response.data;
}
