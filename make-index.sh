#!/usr/bin/env sh

ls -d -- */ |
  grep -v node_modules |
  sed "s,.*,&index.html\">&</a><br>," |
  sed "s,^,<a href=\"./," > \
  index.html
