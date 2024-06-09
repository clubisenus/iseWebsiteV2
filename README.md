ISE Club Website running on:    
React-Redux for global state    
Material-UI for easy modular components   
react-router-dom for page navigation    

environment setup
   
```git clone https://github.com/clubisenus/iseWebsiteV2.git``` to clone this repository   
```yarn``` in terminal to download dependencies
     
start coding :)

pretesting    
```git pull``` to check for pushed changes  
``` git rebase``` to merge pushed changes under yours  

local test   
```yarn start``` to host localhost server to test changes   

remote test   
```var segmentCount = 0``` in 404.html    
```yarn run build:staging``` to deploy remote test build   
```yarn run deploy:staging``` to deploy remote test build    
check https://clubisenus.github.io/iseWebsiteV2_test for any issues in your build  

deploy to production    
```git push``` to push changes to master  
!! DON'T CONTINUE IF THERE ARE ERRORS PUSHING!!   
(this is to keep master in sync with hosted page)    
    
```var segmentCount = 0``` in 404.html  
```yarn run build:production``` to deploy remote test build    
```yarn run deploy:production``` to deploy remote test build  
**For those forking the project, PLEASE do not deploy without requesting permission**  
check https://nusiseclub.com for any issues in your build   

Notes:  
1) When uploading images to /resources/images, update images.js imports and exports

1) When adding new links, add to pageLinks.js and use the pageLinks object to access it

1) To create a new page, save _PageTemplate as a new file, update pageLinks.js link object and index.js routing

1) Still a work in progress so please be nice

**UPDATE**  
The 23rd Management Committee has revived this website and the website is mostly complete, however it is barely patched together and requires some improvements  
So future me here are some things to do:  
- [x] Complete the website
- [] Remove old files
- [] Establish the file naming system
- [] Update this website :))
- [] Improve the user experience


Updating Info:
Everything related to information is now stored in the index.js file in each respective folders in resources, to update the information just add into the index.js file 




