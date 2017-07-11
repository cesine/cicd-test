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

const server = require('../index.js')
const data = require('../data/data.json')
const request = require('request')
const expect = require('chai').expect

describe('server responses', function () {
  it('GET on / should return Hello World!', function (done) {
    request.get(`http://localhost:${server.port}`, function (err, res, body){
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.equal('Hello World!')
      done()
    })
  })
  it('GET on /lower/:WORD should return word', function (done) {
    request.get(`http://localhost:${server.port}/lower/HELLO`, function (err, res, body){
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.equal('hello')
      done()
    })
  })
  it('GET on /data should return contents in data.json', function (done) {
    request.get(`http://localhost:${server.port}/data`, function (err, res, body){
      expect(res.statusCode).to.equal(200)
      expect(res.body).to.equal(JSON.stringify(data))
      done()
    })
  })
})