/*
  Copyright 2017, Google, Inc.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

const express = require('express')
const app = express()
const data = require('./data/data.json')

app.port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lower/:word', (req, res) => {
  res.send(req.params.word.toLowerCase())
})

app.get('/data', (req, res) => {
    res.send(JSON.stringify(data))
})

app.listen(app.port, () => {
  console.log(`Server listening on port ${app.port}!`)
})

module.exports = app; // for testing