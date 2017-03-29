# Loading-Page-Function
Loading icon + progress bar, a simple function in JS

Overview
------

![][overview]  

Interface
------

The main function is in loading.js and the style is in loading.css

a)	selector: string, which could be used to select element using $ directly.  
        i.	E.g: ‘#app’, ‘body’  
b)	text: set the text shown near the loading icon.  

c)	progressBar: true/false. A flag indicates whether the progress bar shows or not.  

d)	progressVal: [0, 1]. A float number showing the progress.  

e)	update: After resetting the parameters, call this function to update the icon.  

f)	show: true/false, show the page or not.  


Example
------

Please check the example in the index.js

Implement
------

Loading function: ES6 + css + jquery + bootstrap + font-awesome  

The whole project: yarn + webpack + babel + ES6 + css + jquery + bootstrap + font-awesome   

Start
------

In the project file, run "yarn start"





--------------------------------
[overview]:/img/overview.png
