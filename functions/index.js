const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.scheduledFunction = functions.pubsub.schedule('* * 1 * *').onRun((context) => {
    console.log("************************************************************************************************");
    console.log('1st day of month!');
    const root = admin.database().ref('maasha445');
    root.get('Bill Monthly Rs').then(value => {
        const monthlyBill = value.val();
        console.log(monthlyBill);
        root.update({
            "Bill Monthly Rs":0
        });
    }).catch(err=>{
        console.error("error occured while fetching current monthly bill", err);
    });

    
    return null;
});
