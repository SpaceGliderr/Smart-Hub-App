import { delBasePath } from "next/dist/next-server/lib/router/router";
import { db, auth, googleProvider, rt } from "../../config/firebase-config";

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

export const createNewAccountEmailPass = (data) => {
  const { firstName, lastName, email, password } = data;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      createBaseAccountDetails({
        firstName,
        lastName,
      });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const signInAccountEmailPass = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user.user.uid);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const signOutAccount = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Sign Out Successful");
    })
    .catch((error) => {});
};

export const createNewAccountGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;
      createBaseAccountDetails({});
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
};

export const getCurrentUserUID = () => {
  const user = auth.currentUser;
  return user.uid;
};

export const createBaseAccountDetails = (data) => {
  const { firstName = "", lastName = "" } = data;
  db.collection("User Accounts")
    .doc(getCurrentUserUID())
    .set({
      firstName: firstName,
      lastName: lastName,
    })
    .then(() => {
      console.log("Account successfully created!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  // console.log(data);
  // db.collection("User Account")
};

export const createAdditionalAccountDetails = (data) => {
  const { gender = "", dob = "" } = data;
  db.collection("User Accounts")
    .doc(getCurrentUserUID())
    .set(
      {
        gender: gender,
        dob: dob,
      },
      { merge: true }
    )
    .then(() => {
      console.log("Account details successfully created!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  // create additional for sign up 2
};

export const readAccountDetails = (setState) => {
  // get user account details
  db.collection("User Accounts")
    .doc(getCurrentUserUID())
    .get()
    .then((doc) => {
      if (doc.exists) {
        setState(test);
      } else {
        console.log("No document!");
      }
    })
    .catch((err) => {
      setState("Err");
    });
};

export const updateAccountDetails = (data) => {
  // update user account details
  db.collection("User Accounts")
    .doc(getCurrentUserUID())
    .update(data)
    .then(() => {
      console.log("Document updated!");
    })
    .catch((error) => {
      console.error("Error updating: ", error);
    });
};

export const createHome = (data) => {
  db.collection("Home")
    .doc(getCurrentUserUID())
    .set({})
    .then(() => {
      console.log("Account details successfully created!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export const addNewDevice = () => {};

export const getDevices = (setState) => {
  db.collection("Home")
    .doc("kjSc6vQ0JBgY4UQQQ0Wh")
    .collection("Devices")
    .doc("eYhNQEbTU6wYNEeXvVYn")
    .onSnapshot((doc) => {
      setState(doc.data());
    });
};

export const addNewRoom = () => {};

export const getRooms = (setState) => {
  db.collection("Home")
    .doc("kjSc6vQ0JBgY4UQQQ0Wh")
    .collection("Room")
    .doc("8Yi3T9PPFsAXJhnZvQWr")
    .onSnapshot((doc) => {
      setState(doc.data());
    });
};

export const addNewScene = () => {};

export const addNewRoutine = () => {};

export const addNewMember = () => {};

export const controlLightStrip = (data) => {
  const { id, brightness, color, lightMode } = data;
  rt.ref("light-strips")
    .child(id)
    .update({
      brightness: parseInt(brightness),
      color: color,
      lightMode: parseInt(lightMode),
    });
};

export const getLightStrip = (setState) => {
  // rt.ref("light-strips/06f40fa9-fc42-4086-85e9-d4a223000a79").on(
  //   "value",
  //   (snapshot) => {
  //     setState(snapshot.val());
  //   }
  // );
  rt.ref("light-strips/06f40fa9-fc42-4086-85e9-d4a223000a79")
    .once("value")
    .then((snapshot) => {
      setState(snapshot.val());
    });
};

// export const getTestHooks = async () => {
//   return await getTestHook();
// };
