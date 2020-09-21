import { delBasePath } from "next/dist/next-server/lib/router/router";
import { db } from "../../config/firebase-config";

export const getTestHook = (setState) => {
  db.collection("Test")
    .get()
    .then((testItems) => {
      const test = testItems.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setState(test);
    })
    .catch((err) => {
      setState("Err");
    });
};

// export const getTestHooks = async () => {
//   return await getTestHook();
// };
