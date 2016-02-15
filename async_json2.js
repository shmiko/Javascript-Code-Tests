function readJSONSync(filename, callback){
  return JSON.parse(fs.readFileSync(filename, 'utf8', function(err,res){
    if(err) return callback(err)
    try {
    callback(null,JSON.parse(res))
  } catch (ex) {
    callback(ex)
  }
  })
};

readJSONSync(js_promises_test.js);

//conflates the input with the output
//doesn't work with control flow primitives
//doesn't handle errors
