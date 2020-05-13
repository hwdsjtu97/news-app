# News App

A news app built using React and Node.js

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Step1:     
in project root folder, install pm2 to deploy

```
npm install pm2@latest -g
```

Step2:    
install node_modules in both server and client directories:
```
npm install
```

Step3:    
run pm2 to deploy in root directory:
```
pm2 start myapp.config.js
```

Step4:
open ```localhost:3000``` then you will see the App running!



## Author

* **Wendi Huang** - *Initial work* - [NewsApp](https://github.com/hwdsjtu97)


