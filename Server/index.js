require("dotenv").config();
const exifr = require("exifr");
// const stream = require("stream");
const cors = require("cors");
const fs = require("fs");

const express = require("express");
const app = express();

const FILE_DIRECTORY = process.env.FILE_DIRECTORY || "../data";
const PORT = process.env.PORT || 8000;
const FOLDER_PATTERN = new RegExp(`${process.env.PATTERN}`) || new RegExp("(.*).tif.jpg$");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send(`

    <title>Server Seite </title>

        <style>
       
           body {
              font-family: Arial, Helvetica;
              font-size: 18px;
            }
            h2{color : green ; }
            .Container {
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                margin-top: 150px;
                width: 1140px;
                }
        </style>
    <div class="Container">
            <h2 >
               Der Server läuft auf dem Port: ${PORT}
            </h2>
    </div>`
    );
});

app.listen(PORT, () => {
    console.log(`Der Server läuft auf dem Port:http://localhost:${PORT}`);
});

app.get("/datas", async (req, res) => {
    res.send(getImage(FILE_DIRECTORY));
});


app.post("/data", async (req, res) => {

    const filepath = req.body.filepath;
    exifr.parse(req.body.filepath, true).then((data) => res.send({ filepath, data }));
});

app.post("/image", (req, res) => {
   
    const imageBase64 = fs.readFileSync(req.body.filepath, "base64");
    res.send(imageBase64);
});

function getImage(initpath) {
    const image = [];
    try{
    
        const find = fs.readdirSync(initpath, { withFileTypes: true });
        find.forEach((item) => {
            const path = initpath + "/" + item.name;
            const name = item.name;
            if (item.isDirectory()) {

                const type = "directory";
                const includes = getImage(path);
                image.push({ name, path, type, includes });
            } else {

                const type = "file";
                if (FOLDER_PATTERN.test(name)) image.push({ name, path, type });
            }
        });
        return image;
    } catch (e)
    {
        return[];
    }
} 