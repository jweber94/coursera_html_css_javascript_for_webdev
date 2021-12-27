# Coursera HTML, CSS, and Javascript for Web Developers Week 1

## Setting up your environment
+ nodejs is a javascript runtime environment (for backend developers: you can look at it like an interpreter like the python interpreter)
+ npm is a package manager for nodejs
    - You can install additional packages/libraries with it in order to make your development more efficient and you do not need to implement everything from scratch
+ browser-sync is a package that could be installed by npm which is able to run a folder as an http web server (you can look at it as a development server which is replaced by nginx or apache websever in production)
    - If you save a watched file, browser-sync will automatically trigger your browser to reload the edited webpage
    - Activate the browser-sync development server
        - ```browser-sync start --server --directory --files "*"```
            - ```start```: Start the the browser-sync program
            - ```--server```: Use the development http server
            - ```--directory```: use the given directory to watch for files of the webpage 
            - ```--files "*"```: files to observe for changes in order to reload in case of saving changes to the file

## Github Pages
+ Here you can upload your webpage for free, you just need to do some settings within your github repository and a new branch "gh_pages" will appear in your repo. 
    - The domain is visable within the repository settings. 
    - If you have bought a domain, you can hand it over to you github pages branch
+ By default, github pages will use your ```index.html``` as the starting point for your website 

