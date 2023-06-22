const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: 'unauthorized access' });
  }
  // bearer token
  const token = authorization.split(' ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: true, message: 'unauthorized access' })
    }
    req.decoded = decoded;
    next();
  })
}

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.emaoomz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // await client.connect();
    const musicCollection = client.db("rythmoDb").collection("musicDetails");
    const classCollection = client.db("rythmoDb").collection("postClass");
    const usersCollection = client.db("rythmoDb").collection("users");
    const bookingCollection = client.db("rythmoDb").collection("selectClass");
    const feedbackCollection = client.db("rythmoDb").collection("feedback");
    const paymentsCollection = client.db("rythmoDb").collection("payments");
    

    app.post('/jwt', (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
      res.send({ token })
    })

    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email }
      const user = await usersCollection.findOne(query);
      if (user?.role !== 'admin') {
        return res.status(403).send({ error: true, message: 'forbidden message' });
      }
      next();
    }
    const verifyInstructor = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email }
      const user = await usersCollection.findOne(query);
      if (user?.role !== 'instructor') {
        return res.status(403).send({ error: true, message: 'forbidden message' });
      }
      next();
    }

    /**-------------------------Dashboard role creating API--------------------- */
    app.get('/users/admin/:email', verifyJWT,  async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) {
        res.send({ admin: false })
      }
      const query = { email: email }
      const user = await usersCollection.findOne(query);
      const result = { admin: user?.role === 'admin' }
      console.log(result)
      res.send(result);
    })
    app.get('/users/instructor/:email', verifyJWT,  async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) {
        res.send({ instructor: false })
      }
      const query = { email: email }
      const user = await usersCollection.findOne(query);
      const result = { instructor: user?.role === 'instructor' }
      console.log(result)
      res.send(result);
    })

     // --------------------users for admin in manage Users page
    
     app.patch('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: 'admin'
        },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);

    })
    app.patch('/users/instructor/:id', async (req, res) => {
      const id = req.params.id;
      // console.log(id);
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          role: 'instructor'
        },
      };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.send(result);
    })
    
    /*---------------------------from mongodb API--------------------------*/
    app.get('/musicDetails', async (req, res) => {
      const result = await musicCollection.find().toArray();
      res.send(result);
    });

    /*-------------------------users related api-------------------------------*/
    app.get('/users', async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });
    app.post('/users', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: 'user already exists' })
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

   

    // --------------------users for instructors in add Class page
    app.post('/postClass', async (req, res) => {
      const classData = req.body;
      classData.status = 'pending';  
      const result = await classCollection.insertOne(classData);
      res.send({ message: 'Class added successfully', classId: result?.insertedId }); 
    });

    app.get('/postClass', async (req, res) => {
      const result = await classCollection.find().toArray()
      // console.log(result)
      res.send(result)
    })

    // --------Update the status of the class in the database in manageClass page----------
    // API approve to update the status of a class
    app.get('/postClass/approved/:email', verifyJWT, async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) {
        res.send({ approved: false })
      }
      const query = { email: email }
      const user = await classCollection.findOne(query);
      const result = { approved: user?.status === "approved" }
      res.send(result);
    })
    app.patch('/postClass/approved/:id', async (req, res) => {
      const id = req.params.id; 
      const filter = { _id: new ObjectId(id) };
      const updatedStatus = {
        $set: {
          status: 'approved'
        },
      };
      const result = await classCollection.updateOne(filter, updatedStatus); 
      res.send(result);
    });
    app.get('/postClass/approved', async (req, res) => {
      const result = await classCollection.find().toArray()
      // console.log(result)
      res.send(result)
    })

    // API deny to update the status of a class
    app.get('/postClass/denied/:email', verifyJWT, async (req, res) => {
      const email = req.params.email;
      if (req.decoded.email !== email) {
        res.send({ denied: false })
      }
      const query = { email: email }
      const user = await classCollection.findOne(query);
      const result = { denied: user?.status === "denied" }
      res.send(result);
    })
    app.patch('/postClass/denied/:id', async (req, res) => {
      const id = req.params.id; 
      const filter = { _id: new ObjectId(id) };
      const updatedStatus = {
        $set: {
          status: 'denied'
        },
      };
      const result = await classCollection.updateOne(filter, updatedStatus);
      res.send(result);
    });

    // API feedback for the deny of a class
    app.post('/feedback', async (req, res) => {
      const feedbackData = req.body;
      const result = await feedbackCollection.insertOne(feedbackData);
      res.send(result);
    });

    //--------------------------- get api for my added class page for instructor-------------------



    //---------------------------api for selected class page for student dashboard-------------------    
    app.post('/selectClass', async (req, res) => {
      const classItem = req.body;
      const result = await bookingCollection.insertOne(classItem);
      res.send(result);
    })
    app.get('/selectClass', verifyJWT, async (req, res) => {
      const result = await bookingCollection.find().toArray()
      // console.log(result)
      res.send(result)
    });
    app.delete('/selectClass/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await bookingCollection.deleteOne(query);
      res.send(result);
    })
    

    /**---------------------payment method----------------------- */
    app.post('/create-payment-intent', verifyJWT, async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        payment_method_types: ['card']
      });
      // console.log(paymentIntent.client_secret)
      res.send({clientSecret: paymentIntent.client_secret})
    })


    // payment related api
    app.post('/payments', verifyJWT, async (req, res) => {
      const payment = req.body;
      const insertResult = await paymentsCollection.insertOne(payment);

      const query = { _id: { $in: payment.classItem.map(id => new ObjectId(id))}}
      const deleteResult = await bookingCollection.deleteMany(query)

      res.send({ insertResult, deleteResult });
    })

    app.get('/payments', async (req, res) => {
      const result = await paymentsCollection.find().toArray()
      // console.log(result)
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Music School is running')
})

app.listen(port, () => {
  console.log(`Rythmo Music School is running on port ${port}`);
})