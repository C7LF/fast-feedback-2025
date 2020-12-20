import firebase from "./firebase";

const firestore = firebase.firestore();

export const createUser = (
  uid: string,
  data: Partial<firebase.firestore.DocumentData>
) => {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

export const createSite = (data: Partial<firebase.firestore.DocumentData>) => {
  return firestore.collection("sites").add(data);
};

export const createFeedback = (
  data: Partial<firebase.firestore.DocumentData>
) => {
  return firestore.collection("feedback").add(data);
};

export const deleteFeedback = (id: string) => {
  return firestore.collection("feedback").doc(id).delete();
};
