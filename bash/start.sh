#!/bin/bash
cd /server/www/test
pm2 start index.js -i 0
pm2 reload all