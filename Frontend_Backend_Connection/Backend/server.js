import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'; // Add CORS import
const app = express();

// Enable CORS
app.use(cors());

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('Server is Ready');
})

app.get('/api/avengers',(req,res)=>{
    const avengers=[
        {
            rank: 1,
            name:'Captain America',
            speciality:'He has a vibranium shield'
        },
        {
            rank: 2,
            name:'Ironman',
            speciality:'He is rich as fu*k and also has the armour'
        },
        {
            rank: 3,
            name:'Hulk',
            speciality:'He has so much power'           
        },
        {
            rank: 4,
            name:'Thor',
            speciality:'He is a god'
        },
        {
            rank: 5,
            name:'Hawkeye',
            speciality:'He is an excellent archer'
        },
        {
            rank: 6,
            name:'Black Widow',
            speciality:'She is beautiful'
        }
    ]
    res.send(avengers);
})

app.listen(port,(req,res)=>{
    console.log(`Server on port http://localhost:${port}`);
})