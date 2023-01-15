import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();
const userId = auth.currentUser.uid;


return onValue(ref(db, '/users/' + userId), (snapshot) => {
  const firstName = (snapshot.val() && snapshot.val().fistName) || 'Anonymous';
}, 
{
  onlyOnce: true
});