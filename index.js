const http = require('http');

function task(x) {
  return x*x*x;
}

let srv = http.Server((req, res) =>{
  switch(req.url)
  {
    case '/login/':
      return 'brazhkinanastya01;
    default:
      let sp1 = req.url.substring(0,8);
      if (sp1 === '/sample/')
      {
        return task(x);
      }
        
      return res.end(String('No'))
  } 
});
          
return srv;
