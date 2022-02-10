#!/usr/bin/env bash

winpty docker run -it --env-file=.env -e "CONFIG=$(cat ./docsearch-diy.json | jq -r tostring)" algolia/docsearch-scraper

