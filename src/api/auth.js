import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export class Auth {
  /**
   * Metodo para crear un nuevo usuarion con email y password
   * y se almacene en FireBase para luego ser usado para el
   * login
   * Nota (El throw funciona para que se mande el error por defecto
   * de formik)
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

  async login(email, password) {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Funcion para cerrar sesion, trae el usuario actual y
   * cierra la seion
   */

  async logOut() {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  }
}
