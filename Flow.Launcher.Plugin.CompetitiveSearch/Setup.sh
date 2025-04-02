#!/bin/bash

# Define plugin name
PLUGIN_NAME="Flow.Launcher.Plugin.CompetitiveSearch"

# Create directory structure
mkdir -p $PLUGIN_NAME
cd $PLUGIN_NAME

# Create necessary files
touch plugin.json main.js icon.png README.md

# Initialize package.json if not present
if [ ! -f package.json ]; then
    echo "Initializing package.json..."
    npm init -y
fi

# Add dependencies (if needed)
echo "Installing dependencies..."
npm install axios cheerio # Example dependencies (modify as needed)

# Write basic README.md
echo "# Competitive Search Plugin" > README.md
echo "Flow Launcher plugin for searching LeetCode/Codeforces problems quickly." >> README.md

echo "✅ Plugin setup completed!"
echo "To start developing, navigate to: cd $PLUGIN_NAME"
