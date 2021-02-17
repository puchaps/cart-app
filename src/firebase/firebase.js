import firebase from "firebase/app";
import "firebase/firestore";

const CONFIG = {
  apiKey: "AIzaSyCV0wIPhKSmkmsZbAXplhRBtnXTMQO28Gk",
  authDomain: "cart-app-pasha.firebaseapp.com",
  projectId: "cart-app-pasha",
  storageBucket: "cart-app-pasha.appspot.com",
  messagingSenderId: "170882576824",
  appId: "1:170882576824:web:a2994f04f3ebf7b3de9f4d",
  measurementId: "G-11D6BY3J66",
};

firebase.initializeApp(CONFIG);

export const FIRE_STORE = firebase.firestore();

export const addCollectionToDB = async (collectionName, documentName) => {
  const collectionRef = FIRE_STORE.collection(collectionName);

  const batch = FIRE_STORE.batch();

  documentName.forEach((item) => {
    const createRefInCollectionOnDocument = collectionRef.doc();

    batch.set(createRefInCollectionOnDocument, item);
  });

  return batch.commit();
};

export const getSnapShotCollectionFromDB = () => (
  new Promise((resolve, reject) => {
    const collectionRef = FIRE_STORE.collection("hats");
    const collectionSnapShot = collectionRef.get();

    collectionSnapShot.then((snapShot) => {
      resolve(snapShot);
    }, reject);
  })
);

export const getSnapShotCollection = (snapShotFromDB) => {
  const transformCollection = snapShotFromDB.docs.map((item) => {
    const { name, price, imageUrl } = item.data();

    return {
      name,
      price,
      imageUrl,
      id: item.id,
      quantity: 1,
    };
  });

  return transformCollection.filter((_, index) => index < 5);
};
