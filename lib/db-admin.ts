import firebase from "./firebase-admin";

export const getAllFeedback = async (siteId: string) => {
  const snapshot = await firebase
    .collection("feedback")
    .where("siteId", "==", siteId)
    .get();

  const feedback = [];

  /*
   * for each document recieved, populate feedback array
   */
  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return feedback;
};

export const getAllSites = async () => {
  const snapshot = await firebase.collection("sites").get();
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return sites;
};