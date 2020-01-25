# Setting up Firebase Hosting
## Install Firebase CLI
Run the following npm command: <br/> ```$ npm install -g firebase-tools```
## Initialize Firebase project
Sign into Google <br/>
```$ firebase login```
Initialize your project <br/>
```$ firebase init```
## Deploy to Firebase Hosting
```$ firebase deploy```

# Troubleshooting
## npm permission error (mac)
To resolve permission errors, run the following lines in terminal, in your home directory. Back up your computer before proceeding.

<ol>
<li><code>$ mkdir ~/.npm-global</code></li>
<li><code>$ npm config set prefix '~/.npm-global'</code></li>
<li><code>$ vim ~/.profile</code><br/>
This opens up vim. Add line: <code>export PATH=~/.npm-global/bin:$PATH</code><br/>
Save the file by typing <code>:saveas ~/.profile</code></li>
<li><code>$ source ~/.profile</code></li>
<li><code>$ npm install -g firebase-tools</code></li>
