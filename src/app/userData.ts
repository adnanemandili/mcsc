import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "./fireBaseConfig";
import { User } from "next-auth";


const fetchAndStoreUserData = async (userData: any) => {
  try {
    const q = query(collection(DB, "users"), where("login", "==", userData.login));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      // Si l'utilisateur n'existe pas encore dans la base de données, ajoutez-le
      const { name, login, avatar_url } = userData;

      const userDoc = {
        name: name,
        login: login,
        avatar_url: avatar_url
      };

      const userRef = await addDoc(collection(DB, "users"), userDoc);
      console.log("ID : ",userRef.id);

      console.log("Informations utilisateur ajoutées avec succès à Firestore");
    } else {
      console.log("L'utilisateur existe déjà dans la base de données");
    }


    console.log("Informations utilisateur ajoutées ou mises à jour avec succès dans Firestore");
  } catch (error) {
    console.error("Erreur lors de l'ajout ou de la mise à jour des informations utilisateur dans Firestore :", error);
  }
};

export { fetchAndStoreUserData };
