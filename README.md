# HelloMD

An API client in Node.JS for HelloMD.com.

## Installation

To install the latest stable release with the command-line tool:
```sh
npm install --save hellomd
```

## Usage

```javascript
var HelloMD = require('hellomd');

var options = {
  apiKey: "your_api_key",
  apiSecret: "your_api_secret"
};

var hellomd = new HelloMD(options);

hellomd.getPatient("a_patient_number").then(function(res){
  // res returns the patient json
}, function(err) {
  // err contains error information when an error occurs
});
```

__Note__: Every method returns a promise but accepts callbacks too.

## License
# The MIT License (MIT)

Copyright (c) 2015 Marcello Milhomem Albuquerque &lt;marcello@hellomd.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

__THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.__