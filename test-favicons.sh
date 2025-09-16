#!/bin/bash

echo "Testing favicon accessibility on esy.com/guide..."
echo "================================"

# Test main favicon
echo -n "Testing /guide/favicon.ico: "
if curl -s -o /dev/null -w "%{http_code}" https://esy.com/guide/favicon.ico | grep -q "200"; then
    echo "✓ OK (200)"
else
    echo "✗ Failed ($(curl -s -o /dev/null -w "%{http_code}" https://esy.com/guide/favicon.ico))"
fi

# Test PNG favicons
for size in 16x16 32x32 192x192 512x512; do
    echo -n "Testing /guide/favicon-${size}.png: "
    if curl -s -o /dev/null -w "%{http_code}" "https://esy.com/guide/favicon-${size}.png" | grep -q "200"; then
        echo "✓ OK (200)"
    else
        echo "✗ Failed ($(curl -s -o /dev/null -w "%{http_code}" "https://esy.com/guide/favicon-${size}.png"))"
    fi
done

# Test apple touch icon
echo -n "Testing /guide/apple-touch-icon.png: "
if curl -s -o /dev/null -w "%{http_code}" https://esy.com/guide/apple-touch-icon.png | grep -q "200"; then
    echo "✓ OK (200)"
else
    echo "✗ Failed ($(curl -s -o /dev/null -w "%{http_code}" https://esy.com/guide/apple-touch-icon.png))"
fi

echo "================================"
echo "Done!"