function readJSONSync(filename){
  return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

readJSONSync(js_promises_test.js);
