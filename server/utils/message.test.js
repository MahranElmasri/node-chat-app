const expect = require('expect');
const {generateMessage}=require('./message');

describe('generateMessag',()=>{
    it('should generate correct message object',()=>{

    var from='admin';
    var text='Some text';
    var message=generateMessage(from,text);
    // expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
    })
    
    
})