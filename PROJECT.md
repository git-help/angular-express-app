# GitHelp MVP
>* We wanted to provide a real-time service for people to ask questions and revive help from the community. There would be a relatively simple 'Question' (post) entry screen. A user would enter key data such as, the problem files, or entire repo, the last working commit and any additional files required for the project to run. Then a community member would respond either in real-time via chat, or as an 'Answer' (post) Each answer would use Code Mirrors merge mode to present the original code along-side the proposed changes.
>* Ideally the answer could then be 'automatically' merged into the original repo using the [Nodegit](http://www.nodegit.org/) API. 

### Key Take-aways
>*__Check the 'PULSE' on open source projects before using them__: There was an answer 3-way data binding would never work with CodeMirrors merge mode as it has to have the Codemirror (i.e. Firepad) instance open and available for concurrent editing by many people, against the one-to-one relation between user-and-code for the Git Merge process. However, an answer should be a single persons answer. Had we checked the 'issues' on github 

>*__Know yourself and your goals__: As a dynamic-duo, we decided to pivot on Monday morning. We both had a feeling that we hadn't been coding enough for the few weeks of class. However, it occurred to us that it wasn't the coding that was at the heart of the issue. Instead, we realized that hopping from tool to tool, from framework to framework, left us feeling like we didn't understand how to solve problems effectively with any given framework. **Therefore, we decided to reorient the project to meet our personal needs and goals.** Namely, we decided that we wanted to get _VERY_ good at a single set of tools in Javascript. So we set out to build an end-to-end JS app based on the MEAN stack.

>* __Think about the long-term__: We did not want to finish this project, just to finish the project. It is time for us to get serious about sustaining interest and enjoyment in the development process. To do that we took the "hard-way" this first week, knowing the presentation was a _check point_ not a _dead line_. For the next month we will focus on kicking ass at JS, specifically Angular.

>*__Pair-programming has its limits__: We spent the first two days paired the entire time. The first night we rocked Rails and had the back end built in only a few hours. However, we were both comfortable with Rails, so we could fly. When it came to Express and Mongo, which neither of us had ever used, we stumbled and it is possible that pairing only heightened frustration, as each person has a particular learning strategy. **Bottom-line, pair when each person has at-least a basic understanding of the tech at-hand, and ideally with one knowing it fairly well.**

>*__Avoid 'Magic' when possible__: We started in JS with the `angular-fullstack` Yeoman generator. It scaffolds out a fairly opinionated architcture, which if you are unfamiliar with any component can be overwhelming. After using that for two days and struggling along the way, we went back to the proverbial drawing board, to tutorials and chose to go with [Building an Angular and Express App (parts 1-3) by J Cole Morrison](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/), which is a detailed tutorial on setting up a simple "MEAN" app with a rails-esque tilt. This made our transition to the new stack a bit more approachable.

### Milestones
1. Decide on a stack, Rails, MEAN, or homegrown JS?
2. Build out models for Mongo with Mongoose.
3. Bite-off more than you can chew...
4. Take two-steps forward and three-steps back, learning is tough and slow, but if you persist **YOU WILL LEARN!**
5. Pick JS-based code-rendering engine (CodeMirror or ACE Editor)
6. Build-out back-end API
7. Connect the front-end Angular app to this API
8. Tack on some additional functionality, just because...
9. Have an opinion on the folder structure and architectural choices in a given 'project': Seeing the various generators scaffolding was highly educational. While we chose the Rails-esque structure to learn from, the more modular folder structure seen in the angular-fullstack generator which puts all files related to a module together (Controller, View, Tests, etc.). 


### Wish-List
1. Real-time chat
  - Use Firebase/FireChat or Sockets.
2. OAuth
3. Add tags so that each Post is associated with technologies used (i.e. StackOverflow model)
