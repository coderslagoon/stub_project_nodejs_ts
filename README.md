# Stub project to use Node.js w/ TypeScript

To start with TypeScript projects and experiments having the following
things ready-made from the very beginning:

* transpilation and linting (also in the background)
* common modules everyone perhaps needs eventually:
    * fs-extra
    * lodash

Made to be used in _VScode_.

You need to have _nps_ installed globally:

    npm install nps -g

Then install the project's dependencies/modules:

    npm install

Use VScode _Run Task..All watch_ for continuous building, or in the terminal:

    nps build.lint && nps build.transpile

Run/debug the main program stub in VScode _Run..Start Debugging_.
