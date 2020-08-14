git pull origin master
cd /arclight-react
npm run build
rm -rf /var/www/arclight-react/html/build
mv build /var/www/arclight-react/html
sudo systemctl restart httpd.service
