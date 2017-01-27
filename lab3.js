/**
 * Created by hello on 2017-01-27.
 */
// dependencies
let http = require('http');
let url = require('url');

http.createServer(function(request, response) {
    // get the whole querystring (parameter list) ?method=something,x=x,y=y
    let qs = url.parse(request.url, true).query;
    let method = qs.method;
    let x = qs.x;
    let y = qs.y;
    let error = '1';

    if(method == 'add'){
        result = (parseInt(x)+parseInt(y));
        sign = '+';
    }

    else if(method == 'subtract'){
        result = (parseInt(x)-parseInt(y));
        sign = '-';
    }

    else if(method == 'multiply'){
        result = (parseInt(x)*parseInt(y));
        sign = '*'
    }

    else if(method == 'divide'){
        result = (parseInt(x)/parseInt(y));
        sign = '/'
    }

    else{
        error = "Please enter numeric values and an appropriate method.";
    };


    // display the output
    {
        if (error == '1') {
            response.write('Output: '+ ' ' + x + ' '+ sign + ' '+ y + ' '+ '=' + ' ' + result);
        }
        else {
            response.write(error);
        }
    }
    response.end();
}).listen(3000);

console.log('Tax Server running on port 3000');
