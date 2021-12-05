#!/bin/bash
# This is called a shebang line, it specifies the type of the file
# This is used instead of a file extension.

# make a show request to show a single player based on its ID
# include -- adds extra information about the request like status code
# request GET - (optional) sets the request method to GET

curl --include --request POST "https://library-express-api.herokuapp.com/players" \
  --header "Content-type: application/json" \
  --data '{
      "player": {
          "name": "'"${NAME}"'",
          "position": "'"${POSITION}"'",
          "number": "'"${NUMBER}"'",
          "college": "'"${COLLEGE}"'",
          "draft": "'"${DRAFT}"'",   
      }
  }'

echo