import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0tAGUsw0gMLHyD0bw0QpBdkqrERunZzo",
    authDomain: "agenda-db8ae.firebaseapp.com",
    databaseURL: "https://agenda-db8ae.firebaseio.com",
    projectId: "agenda-db8ae",
    storageBucket: "agenda-db8ae.appspot.com",
    messagingSenderId: "925766240720",
    appId: "1:925766240720:web:3a15f519b392819eac51d5"
}

class Fire {
    constructor(callback) {
        this.init(callback);
    }

    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user);
            } else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error);
                });
            }
        });
    }

    getLists(callback) {
        let ref = this.ref.orderBy('date');

        this.unsubscribe = ref.onSnapshot(snapshot => {
            lists = [];

            snapshot.forEach(doc => {
                lists.push({ id: doc.id, ...doc.data() });
            });

            callback(lists);
        });
    }

    addList(list) {
        let ref = this.ref;

        ref.add(list);
    }

    updateList(list) {
        let ref = this.ref;

        ref.doc(list.id).update(list);
    }

    deleteList(list) {
        let ref = this.ref;

        ref.doc(list.id).delete();
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get ref() {
        return firebase
            .firestore()
            .collection('users')
            .doc(this.userId)
            .collection('lists');
    }

    detach() {
        this.unsubscribe();
    }
}

export default Fire;