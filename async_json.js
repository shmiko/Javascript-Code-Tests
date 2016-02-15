function readJSONSync(filename, callback){
  return JSON.parse(fs.readFileSync(filename, 'utf8', function(err,res){
    if(err) return callback(err)
    callback(null,JSON.parse(res))
  })
}

readJSONSync(js_promises_test.js);
