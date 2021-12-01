#!/bin/bash

curl --include --request DELETE "https://ga-library-api.herokuapp.com/players/${ID}"

echo

# Alternatively
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/players/{$ID}"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request DELETE \
#
# echo