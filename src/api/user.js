import { getAuth } from "firebase/auth";

export class User {
  getMe() {
    try {
      return getAuth().currentUser;
    } catch (error) {
      throw error;
    }
  }
}
