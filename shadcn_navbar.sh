#!/bin/bash
#
clear
rm -fv /d/NextJS/shadcn_navbar.zip
zip -9r /d/NextJS/shadcn_navbar.zip ./ -x ./node_modules/**\* ./.next/**\* package-lock.json
