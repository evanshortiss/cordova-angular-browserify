Cordova-Angular-Browserify Workflow
===================================

* [Grunt](http://gruntjs.com/) used for automation.
* Uses [Ionic](http://ionicframework.com/) for out of the box components.
* Bundled using [Browserify](http://browserify.org/)!
* All dependencies managed via [npm](https://www.npmjs.org/) or 
[Bower](http://bower.io/). npm is always the preference in a 
browserified project to stick to a CommonJS style.
* Sensible and/or common Cordova defaults applied.
* Uses [ngCordova](http://ngcordova.com/) to ensure sensible and stable
 Cordova plugin use.
* Test structure for AngularJS is already setup and ready.
* Run tests in browser with Karma or from a webserver on your machine!
* Code Quality via [JSHint](http://www.jshint.com/docs/), 
[Lintspaces](lintspaces) and Column Width Checks.
* [EditorConfig](http://editorconfig.org/) file included to automatically 
configure editors.
* Localised Cordova version setup to avoid version mismatches.

## Current Project Issues / Tasks
* The fh-js-sdk is currently not available through npm and the bower version 
doesn't contain the _/dist_ folder. See this 
[ticket](https://github.com/feedhenry/fh-js-sdk/pull/86)
* grunt-browserify isn't correctly applying transforms. Current fallback is to 
use grunt-shell to invoke Browserify.
* If new client dependencies are added using bower we need to inject these 
into the Karma conf file similar to index.html.

## Why?

This repository is intended to provide as base structure for starting 
and working with a Cordova application. It uses AngularJS as an application 
framework and Browserify is used to compile the application into a single 
bundle. This aids rapid development by allowing the developer to focus on 
writing code in the _www_ directory and having automation handle updating their 
bundled JavaScript and index.html.

Working with Browserify and Angular is not as seamless as possible owing to the 
fact that AngularJS isn't designed with CommonJS (Node.js style requires) or
 AMD (Require.js) JavaScript patterns in 
mind. What does this mean for us? Well, in an ideal world we could have just a 
single _script_ tag in our index.html and manage *everything* in JavaScript 
and all dependencies via npm. OK, that's my ideal world, but it'd be nice! 
Unfortunately this isn't possible with Angular yet due to the lack of it's 
support for CommonJS and AMD module loaders. This project works around that 
with its structure and makes it possible to compile an AngularJS project into 
a single JavaScript file albeit with Angular dependencies managed via Bower.


## What do we get!?

### Code Structure
Using EditorConfig, Lintspaces, and JSHint enforces better code quality and 
ensures higher standards. Keep them included and be stringent!

### Manging Cordova Correctly
Many Cordova projects I've worked on assume you have Cordova installed globally 
and will use that to do builds causing a major headache due to version 
mismatches. Building should be accomplished by using a localised Cordova 
version installed as part of the project and as a result this project has a 
relative symbolic link setup to accomplish this. Simply use _./cordova_ in the 
root of this project to perform all Cordova tasks as this will use the version 
installed locally in the _node_modules_ folder.

### Angular Friendly Cordova Plugin Interfaces
Cordova plugins are awesome as they allow you to use native functionality via 
JavaScript calls! The issue is that in AngularJS applications we need to call 
out to these APIs using the JavaScript lib provided by the developer and then 
ensure that changes applied in our callbacks are applied correctly within the 
Angular lifecycle. Using ngCordova is an excellent way to resolve this issue 
and provide a simple interface to these plugins without the need to write our
own wrappers. Bear in mind ngCordova is a _very_ young project and if 
functionality you'd like is missing then fork it, add the function and submit 
a pull request!

### A Single JavaScript Bundle
Part of the reason for using Browserify in this project is for speed 
enhancements. Compiling all files into a single bundle will improve application 
load time and performance. For release builds the bundle file can have source 
maps disabled and also be uglified to further improve performance and reduce 
the disk space required by the compiled project.

### Inlined Templates for Improved Performance
Another neat feature I want to encourage as part of this project is inlining 
templates within your AngularJS application. You should do this using 
_brfs_ as shown in the example below, Browserify and the Grunt build will 
handle the rest. This removes AJAX/File calls when your application is running 
and will improve performance. The only caveat is that the transform that 
inlines the template expects the format *__dirname + '/some/path.extname'* or 
*__filename + '/some/path.extname'*. 


```javascript
'use strict';

var fs = require('fs');
var tmp = fs.readFileSync(__dirname + '/../../templates/RandomNumber.html'
  , 'utf8');

module.exports = function () {
  return {
    restrict: 'E',
    template: tmp,
    link: function link ($scope) {
      $scope.number = Math.round(Math.random() * 100);
    }
  }
};

```


## Setup 

Simply download the ZIP file of this repo and you're ready to rock. If you 
don't have Node.js, Less, or Bower installed read the next section.

### Prerequisites 
To use this project you need to have Node.js and npm installed. Get both in a 
single download [here](http://nodejs.org). This project setup was designed 
using Node version 0.10.24.

Once you have Node.js and npm installed you'll need to install bower by 
entering the following in a terminal:

```
npm install -g bower less@1.7.0
```

## Common Tasks
Note that all these commands are using the locally installed version of Cordova.
To change the Cordova version being use just run:

```
npm install cordova@[VERSION] --save-dev
```


### Copy Working www Files to Cordova Projects

```
./cordova prepare [ios/android]
```

### Compile Current Projects
```
./cordova compile [ios/android]
```

### Copy Files and Build
```
./cordova build [ios/android]
```

### Emulate Platforms
These functions are provided by Cordova. In the root directory use the 
following commands.

```
./cordova emulate [ios/android]
```

## Debugging 
To make debugging this project easier you should enable source maps in your dev 
tools. This will allow you to inspect the source files in Chrome as usual on 
the _Sources_ tab despite the fact that the files and concatenated using 
Browserify. Much win!