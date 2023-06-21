// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");

// Finish setting up the server
const port = 3000;


http
  .createServer((req, res) => {
    //this is a readable stream
    let chunks = [];
    let { url } = req;
    
    req.on("data", (chunk)=>{
      chunks.push(chunk);
    });
    req.on("end", ()=>{
      const body = {
        url: req.url,
        method: req.method
      }


      const wildCard = {
        race: "Tiefling",
        class: "Rogue"
      }
      const about = {
        name: "Austin",
        role: "DM"
      }

      //wildcard route
      if (url ==='/'){
        res.write(JSON.stringify(wildCard))
      }
      else if(url === '/about'){
        res.write(JSON.stringify(about))
      }
      else if(url === '/echo'){
        res.write(JSON.stringify(body))
      }
      res.end();


    })
  })
  .listen(port, ()=>{
    console.log(`Server listening on ${port}`);
  })
