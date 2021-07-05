const blogModel = require('./model')('blogs');
const prompt = require('./prompt');

class Blog  {
  constructor(ti,bod) { 
    this.title = ti
    this.date = Date()
    this.body = bod
   }
}

(async () => {
  console.clear();
 // await timeout(500);
  while (true) {
    let blog = []
    console.log()
    blog[0] = await prompt("Please enter title: ")
    blog[1] = await prompt('Please enter body: ')
   
    let blogDB = new Blog(blog[0],blog[1]) 
    console.log(blogDB);
    try {
        //await User.save({});      
        await blogModel.CREATE(blogDB);
        
        console.log('Blog created:' + blogDB);
    } catch(err) { throw err; }
  }
})();
