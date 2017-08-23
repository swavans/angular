# Angular Training

## Installation

#### Step 1. Node, Yarn & Git

* Make sure you have [Git](https://www.git-scm.com) installed 
* Make sure you have [NodeJS 6.9+](https://nodejs.org/) or later installed on your machine
* Make sure you have npm (Node Package Manager, comes bundled with NodeJS) at least version 5

You can check whether you already have them and your current versions by executing 

```bash
git --version
node --version
npm --version
```

If you need to use multiple node versions on your machine consider using:
* [nvm](https://github.com/creationix/nvm) (OSX, Linux)
* [nvm-windows](https://github.com/coreybutler/nvm-windows) (Win)
* [nodist](https://github.com/marcelklehr/nodist) (Win)

You might want update the `npm` to version 5 by doing:

```bash
npm install -g npm@5
```

It also might work with older versions, but not guaranteed

#### Step 2. Training materials

Go our [Bitbucket repository](https://rndwww.nce.amadeus.net/git/projects/NG2/repos/training/browse) and clone it locally

Or better simply execute the following:

```bash
# clone → it will create the directory named 'training' in the current one
git clone https://[your-username-here]@rndwww.nce.amadeus.net/git/scm/ng2/training.git
 
# install global dependencies
npm install -g @angular/cli
 
# install local dependencies
cd training
npm install
 
# check that everything is working but running the following and opening http://localhost:4200 in your browser afterwards
npm start
```

#### Step 3. Configure your IDE

We'll be wring code using TypeScript and Angular, so it would be nice to have at least code highlighting and autocompletion.
We recommend you install / configure one of the following IDEs:

* [WebStorm (paid, trial period)](https://www.jetbrains.com/webstorm/download/) - No configuration required, it will work out of the box. Just open the 'training' folder you've just checked out.
* [Visual Studio Code (free)](https://code.visualstudio.com/Download) - After the installation, run the IDE and make sure the recommended extensions are installed as described in this [guide](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions). All extensions are listed under `.vscode/extension.json` and can be viewed in the UI using "Show workspace recommended extensions" filter.

#### Step 4. Install Angular Augury plugin

If you're using Chrome it might be a good idea to install the [Augury Plugin](https://augury.angular.io) that will help debugging Angular applications

## Running

The project is based on [angular-cli](https://github.com/angular/angular-cli) with some extensions. It contains three servers internally:

* Angular app with exercises (localhost:4200)
* Database for exercises (localhost:3000)
* Slides (localhost:8080)

#### Starting servers

* `npm start` → start all three servers at once (all 2 logs will be mixed in one console though)
* `npm run slides` → start only the server with slides
* `npm run db` → start only the database server
* `npm run exercises` → start only the exercises angular app

#### Running unit tests

* `npm test` → launch tests in tdd

#### Using angular-cli

You can use any `ng` command as well, for instance:

* `ng generate component exercises/01/hello-world` → will generate a hello world component for the first exercise
* `ng build` → will build a deployable version of the project
* etc

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
