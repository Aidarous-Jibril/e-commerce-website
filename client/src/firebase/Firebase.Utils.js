import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  const firebaseConfig = {
        apiKey: "AIzaSyA_U6VXGT6O_oiTraqL2vNKAAaPJmIfu8Y",
        authDomain: "e-commercedb.firebaseapp.com",
        databaseURL: "https://e-commercedb.firebaseio.com",
        projectId: "e-commercedb",
        storageBucket: "",
        messagingSenderId: "22477316848",
        appId: "1:22477316848:web:e3446894ab8c5686ff1835",
        measurementId: "G-GJJV503T5Y"

    };

    //create userProfile func and export 
    export const createUserProfileDocument = async (userAuth, additionalData) => {
        //if user obj is null then exit
        if (!userAuth) return;
      
        //query to the db about this user
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        //snapshot gives object data
        const snapShot = await userRef.get();
         
        //check if this user or doc exists to not create double, if not exists then create it
        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            try {
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
              });
            } catch (error) {
              console.log('error creating user', error.message);
            }
          }
        
          //return this for we need in our app some where
          return userRef;
        };

  //check User Session persisting function      
  export const getCurrentUserSession = () => {
    //returns a true (if there is a user) or false (if not, it rejects returns secodry error ) promise that userSaga can yield for
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe();
        resolve(userAuth);
      }, reject);
    });
  };

  
//utils for collection to not manually add shop data collection into firebase db
export const addCollectionAndDocuments = async ( collectionKey, collectionObjectsToAddFirebaseDB) => {
  //create a collectionRef collection and store collectionRef var
  const collectionRef = firestore.collection(collectionKey);

  //use batch.firebase to commit, to avoid uncomplete action
  const batch = firestore.batch();
  collectionObjectsToAddFirebaseDB.forEach(obj => {
      //create empty doc and let firebase set up unique id.
    const newDocRef = collectionRef.doc();
      //pass batch to set newDocRef as id and obj as title & items of the collection
    batch.set(newDocRef, obj);
  });

  return await batch.commit();

};


//convert fetched collection data from f-base to snabShot obj
export const convertCollectionsSnapshotToMap = (collection) => {
  //transform data to add some extra props like route name
  const transformedCollection =  collection.docs.map(doc => {
    //destructure values from mapped collection  
    const { title, items} = doc.data();
     
    //return and add extra props like routeName
    return  {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  //Add title props of every collection to be equal collection its self
  return transformedCollection.reduce((total, collection) => {
    total[collection.title.toLowerCase()] = collection;
    return total;
  }, {});

}



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;