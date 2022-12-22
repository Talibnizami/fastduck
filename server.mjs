import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()
const port = process.env.PORT || 5001;
const mongodbURI = process.env.mongodbURI || "mongodb+srv://dbuser:dbpassword@cluster0.pbmbzaw.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());



let customerSchema = new mongoose.Schema({
    customername: { type: String, required: true },
    phone: Number,
    customerid: Number,
    email: String,
    notes: String,
    createdOn: { type: Date, default: Date.now }
});
const customerModel = mongoose.model('customers', customerSchema);





app.post('/customer', (req, res) => {

    const body = req.body;

    // if ( // validation
    //     !body.customername
    //     || !body.phone
    //     || !body.email
    //     || !body.notes
    //     || !body.customerid
    // ) {
    //     res.status(400).send({
    //         message: "required parameters missing",
    //     });
    //     return;
    // }

    console.log(body.customername)
    // console.log(body.phone)
    // console.log(body.notes)
    // console.log(body.email)
    // console.log(body.customerid)

    customerModel.create({
        customername: body.customername,
        // phone: body.phone,
        // notes: body.notes,
        // email: body.email,
        // customerid: body.customerid,
    },
        (err, saved) => {
            if (!err) {
                console.log(saved);

                res.send({
                    message: "customer added successfully"
                });
            } else {
                res.status(500).send({
                    message: "server error"
                })
            }
        })
})

// app.get('/customers', (req, res) => {

//     customerModel.find({}, (err, data) => {
//         if (!err) {
//             res.send({
//                 message: "got all cutomers successfully",
//                 data: data
//             })
//         } else {
//             res.status(500).send({
//                 message: "server error"
//             })
//         }
//     });
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/////////////////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(mongodbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on('connected', function () {//connected
    console.log("Mongoose is connected");
});

mongoose.connection.on('disconnected', function () {//disconnected
    console.log("Mongoose is disconnected");
    process.exit(1);
});

mongoose.connection.on('error', function (err) {//any error
    console.log('Mongoose connection error: ', err);
    process.exit(1);
});

process.on('SIGINT', function () {/////this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
