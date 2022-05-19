//Declaring Variables
let http = require('http');
let fs = require('fs');
let rea = require('readline');
let friends = [
    {
        id: 0,
        Name: 'Tina',
    },
    {
        id: 1,
        Name: 'Ruth',
    },
    {
        id: 2,
        Name: 'Emmanuel',
    },
];
const rel = rea.createInterface({
    input: process.stdin,
    output: process.stdout
});

// reading and writing a file
let read = fs.readFile('readMe.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    } else{
        fs.appendFile('WriteMe.txt', data, (err) => {
            if(err){
                console.log(err);
            }
        });
    }
}); 

// creating  a server
let aikServer = http.createServer();
    aikServer.on('request', (req, res) =>{
        res.statusCode = 200;
        res.setHeader = {'Content-Type':'text/html'};
        console.log(`Request was made by user at : ${req.url}`);
        const item = req.url.split('/');  // ['', /collection, parameter(or id)]
        // at localhost:port
        if(req.url == '/'){
            res.write('<html>');
            res.write('<body>');
            res.write('<h2>');
            res.write('Hi, Welcome to AIK server!!!!');
            res.write("</h2>");
            res.write('</body>');
            res.write('</html>');
            res.end();
        } /* when a POST method is sent to the server */ else if(req.method == 'POST'){
            req.on('data', (data) =>{
                friend = data.toString();
                console.log('ADDING FRIEND PLEASE WAIT....');
                friends.push(JSON.parse(friend));
                console.log('FRIEND LIST UPDATED SUCCESSFULLY!!! ');
            });
            req.pipe(res);
        }/* at localhost:port/friends */ else if ( req.method =='GET' && item[1] == 'friends'){
            res.setHeader = {'Content-Type':'application/json'};

            //at localhost:port/friends/id
            if (item.length == 3){
                const friendIndex = +item[2];
                res.end(JSON.stringify(friends[friendIndex]));
            } /* no id */ else{
                res.end(JSON.stringify(friends));
            }
        } /* at localhost:port/messages */ else if (item[1] == 'messages'){
            res.setHeader = {'Content-Type':'text/html'};
            res.write('<html>');
            res.write('<body>');
            res.write('<ul>');
            res.write('<li>');
            res.write('Hello Assurance');
            res.write('</li>');
            res.write('<li>');
            res.write("It's been long hun....");
            res.write('</li>');
            res.write('<li>');
            res.write('Hope you are good?');
            res.write('</li>');
            res.write('</ul>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        }
    }); 


//User Input 
rel.question("What is your name?", (name) => {
    rel.question("What port do you wanna enter from?", portNumber = (port) =>{
        console.log(`${name} wants to enter from port ${port}`);
        //listening
       aikServer.listen(port, () => {
        console.log(`LIstenting at port ${port}`);  // opens at localhost:port
       });
       rel.close();
    });
});


