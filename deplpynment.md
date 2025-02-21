Singup to the AWS account
EC2 instance launch
t2 micro machine suffieciet
key pair login (imp)
intialize machine
connect to instance (ssh way)
download node on the machine --> VERSION SHOULD BE MATCHING ON THE LOCAL AND THE SERVER MACHINE
git clone the code on the machine(both fe and be)
go to the fe


- Frontend(React)    
    - npm install  -> dependencies install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html/
    - sudo scp -r dist/* /var/www/html/
    - Enable port :80 of your instance

sudo nano /etc/nginx/sites-available/default

Frontend (Nextjs)
https://chatgpt.com/c/67a398b2-f994-8009-8502-d9e9c0af7f0e

- npm install  -> dependencies install
- npm run build
- pm2 start npm --name "nextjs-app" -- start
- pm2 save
- pm2 startup
- sudo apt install nginx -y
- sudo nano /etc/nginx/sites-available/default

- server {
    listen 80;
    server_name your-ec2-public-ip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

sudo systemctl restart nginx
- npm run build in local once
	
    
Backend:
Add the server ip in the monogo atlas
take the ip from the aws ipv4
Enable port 777 similar to enabling port 80 in fe
pm2 (process manager) --- You can't open the server for all time just like in local and when you stop the app crashers
npm intsall pm2 -g
pm2 start npm --name "devTinder-backend" -- start
pm2 logs
pm2 flush npm (flush logs)
pm2 list (list the things that are running)
pm2 stop <name>

Ngnix config

Now our backend is running on 
43.579.23:7777(just random ip)
And our fe is running on 
43.579.23

43.579.23:7777 ---> 43.579.23/api we want to map /api to :7777 means that if the request comes on :7777 it should come to /api
nginx will handle this case for us
config nginx - suda nano /etc/nginx/sites-available/default

Changes in this

server_name 43.204.96.49;

    location /api/ {
        proxy_pass http://localhost:7777/;  # Pass the request to the Node.js app
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

restart nginx - sudo systemctl restart nginx


ADD CI/CD pipeline

Adding DOMAIN NAME SERVER for that use goDaddy to buy the domain name and cloudflare to manage DNS mapping
