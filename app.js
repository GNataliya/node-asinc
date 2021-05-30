const axios = require('axios');
const fs = require('fs');

setInterval(() => {
    tom();   
}, 2000);  //150000

const tom = async() => {
    const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Kyiv&cnt=9&units=metric&appid=3642be56cb8ddc45a94de175f5336732';
    const dataTom = await axios.get(url);
    const { dt_txt, main: {temp} } = dataTom.data.list[8];
    
    fs.appendFile('weather.txt', 'date:' + dt_txt + 'temp:' + temp, (err) => {
        console.log(dt_txt, temp);
            if (err) throw err;
            console.log('Saved!');
        });
};
tom();
    