import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import os from "os";
import { MongoClient } from "mongodb";

const uri = "mongodb://" + process.env.MONGO_URL + "/test";
const client = new MongoClient(uri, {});
async function run() {
    try {
        await client.connect();
        console.log("Terkoneksi");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get("/", (_, res) => {
    res.status(200).json({
        meta: {
            status: 200,
            success: true,
            message: "Server is running",
        },
        body: {
            os: os.type(),
            description: "Healt",
        },
    });
});

app.get("/users", async (_, res) => {
    try {
        const { data } = await axios.get(
            "https://randomuser.me/api/?results=10"
        );
        res.status(200).json({
            meta: {
                status: 200,
                success: true,
                message: "Success to get users data",
                seed: data.info.seed,
                results: data.info.results,
                page: data.info.page,
            },
            body: { users: data.results },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            meta: {
                status: 500,
                success: false,
                message: "Failed to get users data",
            },
            body: {
                errors: err,
            },
        });
    }
});

const listening = () => console.log("App running on PORT: * ", PORT);
app.listen(PORT, listening);
