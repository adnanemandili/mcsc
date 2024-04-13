import { DB } from "./fireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const fetchUserDataFromDB = async (login: string) => {
  try {
    // Recherchez l'utilisateur dans la base de données en fonction de son identifiant GitHub (login)
    const q = query(collection(DB, "users"), where("login", "==", login));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Si l'utilisateur existe, récupérez ses informations depuis la base de données
      const userData = querySnapshot.docs[0].data();
      console.log("Informations utilisateur récupérées depuis la base de données :", userData);
      return userData;
    } else {
      console.log("L'utilisateur n'existe pas dans la base de données");
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des informations utilisateur depuis la base de données :", error);
    return null;
  }
};

export { fetchUserDataFromDB };
