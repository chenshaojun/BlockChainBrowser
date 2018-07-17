var http = require('http');  
 

var request = require('request');

request('http://state.jingtum.com/query/ledger/08F3DEBC5A99ECE0E526CD52699E270386AB1D5567C92BEF4458C72EBA7B0B3A', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
    var data = eval( '(' + body + ')' );
    console.log(data.data.data)
    
  }
})

/*



var options = {  
    hostname: 'state.jingtum.com',  
    port: 80,  
    path: '/query/ledger/6500DA5638357A96B0E420BA1316B7373A8A722520DCAA310EE56C0CE9857D6A',
    method: 'GET'  
};  
  
var req = http.request(options, function (res) {  
    console.log('STATUS: ' + res.statusCode);  
    console.log('HEADERS: ' + JSON.stringify(res.headers));  
    res.setEncoding('utf8');  
    res.on('data', function (chunk) {  
        console.log('\nBODY1: ' + chunk);  
    });  
});  
  
req.on('error', function (e) {  
    console.log('problem with request: ' + e.message);  
});  
  
req.end();*/