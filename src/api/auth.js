import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Auth {
  /**
   * Metodo para crear un nuevo usuarion con email y password
   * y se almacene en FireBase para luego ser usado para el
   * login
   * @param {El email que nos llega del usuarios} email
   * @param {La password que nos llega del ususairo} password
   */
  async register(email, password) {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  }
}
