#!/bin/bash

curl --include --request PATCH "https://ga-library-api.herokuapp.com/players/${ID}" \
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

# Alternatively
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/players/${ID}"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request PATCH \
#   --header "Content-type: application/json" \
#   --data '{
#     "player": {
#       "title": "'"${NEW-TITLE}"'",
#       "author": "'"${NEW-AUTHOR}"'"
#     }
#   }'
#
# echo