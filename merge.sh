git pull origin master
cd /arclight-react
npm run build
rm -rf /var/www/html/arclight-react/build
mv build /var/www/html/arclight-react
sudo systemctl restart httpd.service
