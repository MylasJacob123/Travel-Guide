const {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} = require("firebase/firestore");
const { db } = require("../config/firebase");

const addUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const docRef = await addDoc(collection(db, "users"), {
      firstname,
      lastname,
      email,
      password,
    });
    res.json({
      message: "User added successfully",
    });
  } catch (error) {
    console.log("Adding user error", error);
    res.status(500).json({ error: "Failed to add user" });
  }
};

const getUsers = async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json({
      data,
    });
  } catch (error) {
    console.log("Error fetching users", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, password } = req.body;

    console.log("Updating user ID:", id);

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userDocRef = doc(db, "users", id);

    await setDoc(
      userDocRef,
      {
        firstname,
        lastname,
        email,
        password,
      },
      { merge: true }
    );

    res.json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.log("Error updating user", error);
    res.status(500).json({ error: "Failed to update user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting user with ID:", id);
    const userDocRef = doc(db, "users", id);
    await deleteDoc(userDocRef);

    res.json({
      message: "User successfully deleted",
    });
  } catch (error) {
    console.log("Error deleting user", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

const getUserFavorite = async (req, res) => {
  const { userId } = req.params;

  try {
    const querySnapshot = await getDocs(collection(db, `users/${userId}/favorites`));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json({
      data,
    });
  } catch (error) {
    console.log("Error in getting user favorites", error);
    res.status(500).json({ error: "Error fetching user favorites" });
  }
};

const addUserFavorite = async (req, res) => {
  const { userId, favorite } = req.body;

  try {
    const docRef = await addDoc(collection(db, `users/${userId}/favorites`), {
      favorite,
    });
    res.json({
      message: "User favorite added successfully",
    });
  } catch (error) {
    console.log("Adding user favorite error", error);
    res.status(500).json({ error: "Failed to add user favorite" });
  }
};



module.exports = {
  addUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserFavorite,
  addUserFavorite
};
