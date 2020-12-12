import firebase from "./firebase-admin";
import { compareDesc, parseISO } from "date-fns";

export const getAllFeedback = async (siteId: string) => {
  try {
    const snapshot = await firebase
      .collection("feedback")
      .where("siteId", "==", siteId)
      .get();

    const feedback = [];

    // for each document recieved, populate feedback array
    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    // sort array by newest first
    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { feedback };
  } catch (err) {
    return { err };
  }
};

export const getAllSites = async () => {
  try {
    const snapshot = await firebase.collection("sites").get();
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (err) {
    return { err };
  }
};
