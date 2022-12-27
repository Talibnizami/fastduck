import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
mongoose.set('strictQuery', false);
const port = process.env.PORT || 5001;
const mongodbURI =
  process.env.mongodbURI ||
  "mongodb+srv://task:1234@task.p3qevca.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());



// Address
const AddressSchema = new mongoose.Schema({
  address: { type: String, required: true, trim: true },  
})
const addressModal = mongoose.model('Address', AddressSchema)


app.post("/setAddress", (req, res) => {
  var a = new addressModal({
    address: req.body.address,
  });
  // console.log(a)
  a.save()
    .then((res) => {
      console.log(res, a);
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/getAddress", (req, res) => {
  addressModal.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all Address successfully",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});

// History 

let historySchema = new mongoose.Schema({
  customername: { type: String, required: true },
  phone: Number,
  customerid: Number,
  email: String,
  notes: String,
  createdOn: { type: Date, default: Date.now },
});
const historyModel = mongoose.model("historyCustomer", historySchema);



// Customer

let customerSchema = new mongoose.Schema({
  customername: { type: String, required: true },
  phone: Number,
  customerid: Number,
  email: String,
  notes: String,
  createdOn: { type: Date, default: Date.now },
});
const customerModel = mongoose.model("customers", customerSchema);

app.post("/customerData", (req, res) => {
  var a = new customerModel({
    customername: req.body.customername,
    phone: req.body.phone,
    notes: req.body.notes,
    email: req.body.email,
    customerid: req.body.customerid,
  });
  // console.log(a)
  a.save()
    .then((res) => {
      console.log(res, a);
      res.send(res);
    })
    .catch((err) => {
      res.send(err);
    });
    var customerHistory  = new historyModel({
      customername: req.body.customername,
      phone: req.body.phone,
      notes: req.body.notes,
      email: req.body.email,
      customerid: req.body.customerid,
    });
    // console.log(a)
    customerHistory.save()
      .then((res) => {
        console.log(res, customerHistory);
        res.send(res);
      })
      .catch((err) => {
        res.send(err);
      });
});

app.get("/customers", (req, res) => {
  customerModel.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all cutomers successfully",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});

app.delete("/customer/:id", (req, res) => {
  const id = req.params.id;

  customerModel.deleteOne({ _id: id }, (err, deletedData) => {
    console.log("deleted: ", deletedData);
    if (!err) {
      if (deletedData.deletedCount !== 0) {
        res.send({
          message: "Product has been deleted successfully",
        });
      } else {
        res.status(404);
        res.send({
          message: "No Product found with this id: " + id,
        });
      }
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});




// History  api

// app.post("/customerData", (req, res) => {
  
// });

app.get("/historyCustomer", (req, res) => {
  historyModel.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "got all cutomers successfully",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
});



const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////
mongoose.connect(mongodbURI);

////////////////mongodb connected disconnected events///////////////////////////////////////////////
mongoose.connection.on("connected", function () {
  //connected
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", function () {
  //disconnected
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  //any error
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  /////this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events///////////////////////////////////////////////
