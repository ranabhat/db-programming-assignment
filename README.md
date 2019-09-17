# Dream Broker Programming Assignment

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/ranabhat/db-programming-assignment.svg?token=gMdiyfiTb9AJMAZY1F7M&branch=master)](https://travis-ci.com/ranabhat/db-programming-assignment)


## Task

This task is to implement an API endpoint, deploying it and providing an URL for testing. You can follow the [quick start guide](#quickstart) to start building the API. 
You should implement an endpoint to analyze text. Curl command to call your API might look like this: 
```
curl --header "Content-Type: application/json" \
            --request POST \
            --data '{"text":"hello 2 times  "}' \
            https://mysuperawesomeapi.com/analyze
```
And the response should be:
```
{
            "textLength":{"withSpaces":15,"withoutSpaces":11},
            "wordCount":3,
            "characterCount":[{"e":2},{"h":1},{"i":1},{"l":2},{"m":1},{"o":1},{"s":1},{"t":1}]
        }
            
```

## Technology Used
- [Nodejs](https://nodejs.org/en/download/) `Open-source and cross-platform JavaScript runtime environment`
- [Express](https://expressjs.com/) `Fast, unopinionated, minimalist web framework for Node.js`
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript) `prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles`
- [Jest](https://jestjs.io/docs/en/getting-started) `a delightful JavaScript Testing Framework with a focus on simplicity.`
- [Travis-CI](https://docs.travis-ci.com/) `continuous integration platform that supports our development process by automatically building and testing code changes, providing immediate feedback on the success of the change`
- [Standard JS](https://standardjs.com/) `JavaScript style guide, linter, and formatter which automatically format code, catch style issues & programmer errors early and need no configuration`

## Contents
- [Quick start guide](#quickstart)
    - [Requirements](#requirements)
    - [Download the source code](#download)
    - [Starting development](#startingdevelopment)
    - [Start development using docker](#docker)
    - [Heroku Test URL](#heroku)
- [License](#license)

## <a name="quickstart">Quick start guide</a>

### <a name="requirements">Requirements</a>
- If you don't already have it, install [Node](https://nodejs.org/en/download/)
- If you don't already have it, install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


### <a name="download">Download the source code</a>
1. Open up your favorite kind of console
2. Navigate to the folder in which you want to store the source code
3. Run `git clone https://github.com/ranabhat/db-programming-assignment`


### <a name="startingdevelopment">Starting development</a>
1. Open up the source code in your code editor (I recommend [Visual Studio Code](https://code.visualstudio.com/) if you don't have a preference)
2. Run `npm install` in the console to install dependencies (it'll take a while on the first run, so go on and read ahead while you wait)
3. Start modifying the code to build your own application
5. Run `npm run start` in console
6. Open your browser in the address printed to the console
7. From Terminal `curl --header "Content-Type: application/json" \
            --request POST \
            --data '{"text":"hello 2 times  "}' \
            https://localhost:8080/analyze `

### <a name="docker">Start development using docker</a>
1. Go to the directory that has Dockerfile and run `docker build -t <nameyouwanttogive> .`
2. Run the image `docker run -p 49160:8080 -d <nameyouwanttogive>`
3. Run `curl -i localhost:49160/analyze`
4. Run ```curl -i --header "Content-Type: application/json" \
            --request POST \
            --data '{"text":"hello 2 times  "}' \
            localhost:49160/analyze ```

### <a name="heroku">Heroku Test URL</a>
1. Run ```curl -i --header "Content-Type: application/json" \
            --request POST \
            --data '{"text":"hello 2 times  "}' \
            https://db-challenge-db.herokuapp.com/analyze ```

## <a name="license">License</a>

All of the code is licensed under the [MIT license](LICENSE)
