let express = require('express');
let app = express();
let port = 3000;
let friends = [{
        id: 0,
        name: 'Tina'
    },
    {
        id: 1,
        name: 'Ruth',
    },
    {
        id: 2,
        name: 'Emmanuel',
    }
]
app.listen(port, () => {
    console.log(`Listening to server at port ${port}`);
});
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
});
app.get('/', (req, res) => {
    res.send('<h3>Hi!! from Aik Server</h3>');
});
app.get('/friends', (req, res) => {
    res.json(friends);
});
app.get('/friends/:friendId', (req, res) => {
    id = +req.params.friendId;
    friend = friends[id];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "CANNOT FIND FRIEND, FRIEND DOESN'T EXIST"
        });
    }
});
app.post('/friends', (req, res) =>{
    newFriend = {
        name: req.body.name,
        id: id.length
    }
    friends.push(newFriend);
    console.log(newFriend);
})
app.get('/messages', (req, res) => {
    res.send('<ul><li>Hi, Assurance, how are you??</li></ul>');
});