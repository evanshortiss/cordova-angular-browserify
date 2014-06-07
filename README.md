Cordova Angular Workflow
========================

## Features

* Grunt used for automation.
* All dependecies managed via NPM.
* Sensible/common Cordova defaults applied.
* Browserified Automagically.
* Code Quality via JSHint, Lintspaces and Column Width Checks.
* EditorConfig file included.
* Localised Cordova version setup.

## Why?

This repository is inteneded to provide as base strcuture for starting 
and working with a Cordova application. It uses AngularJS as an application 
framework and browserify is used to compile the application into a single 
bundle. This aids rapid development by allowing the developer to focus on 
writing code in the _www_ directory and having automation handle updating their 
bundled JavaScript. 

### Code Structure
Using EditorConfig, Lintspaces, and JSHint enforces better code quality and 
ensures higher standards. Don't be sloppy!

### Manging Cordova Correctly
Many Cordova projects I've worked on assume you have Cordova installed globally 
and will use that to do builds causing a major headache due to version 
mismatches. This isn't the correct way to manage building a Cordova project 
nor is it the correct way to manage dependencies. Building 
should be accomplished by using a localised Cordova version installed as part 
of the project and as a result this project has a relative symbolic link setup 
to accomplish this. Simply use _./cordova_ in the root of this project to 
perform all Cordova tasks. You should run _npm uninstall -g cordova_ and 
reconfigure all your projects to follow a similar pattern to avoid version 
mismatch.

### Speed
Another neat feature I want to encourage as part of this project is inlining 
templates within your AngularJS application. You should do this using 
brfs as shown in the example below, Browserify and the Grunt build will handle
the rest. This removes AJAX/File calls when your application is running and 
`will improve performance.
