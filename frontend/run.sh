#!/bin/bash

# Simple Frontend Project Setup Script

echo "Checking the Environment file..."
sleep 2;

if [ -f '.env' ]; then
    echo "'.env' file exists!";
else
    echo "'.env' file not found!";
    echo "Creating a new '.env' file";
    cp .env.example .env
fi

echo "Checking the project dependencies..."
sleep 2;

if [ -d 'node_modules' ]; then
    echo "Dependencies is already installed";
    sleep 1;
    echo "type command 'yarn dev' to run project";
else
    echo "Project is not install";
    sleep 1;
    echo "Installing dependencies";
    corepack enable
    corepack use yarn@4.10.3
    yarn install 
fi