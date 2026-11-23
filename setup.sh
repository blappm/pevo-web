#!/bin/bash

mkdir -p vendor/fonts

GH="https://github.com"

# 1. Bootstrap CSS & JS direkt von GitHub herunterladen
wget "${GH}/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-dist.zip" -O /tmp/bs.zip
unzip -q /tmp/bs.zip -d /tmp/bs
cp /tmp/bs/bootstrap-5.3.3-dist/css/bootstrap.min.css vendor/
cp /tmp/bs/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js vendor/

# 2. Bootstrap Icons & Fonts direkt von GitHub herunterladen
wget "${GH}/icons/releases/download/v1.11.3/bootstrap-icons-1.11.3.zip" -O /tmp/bi.zip
unzip -q /tmp/bi.zip -d /tmp/bi
cp /tmp/bi/bootstrap-icons-1.11.3/font/bootstrap-icons.min.css vendor/
cp /tmp/bi/bootstrap-icons-1.11.3/font/fonts/* vendor/fonts/

# 3. Aufräumen & index.html auf lokale Dateien umstellen
rm -rf /tmp/bs.zip /tmp/bs /tmp/bi.zip /tmp/bi

sed -i 's|href="[^"]*bootstrap.min.css"|href="vendor/bootstrap.min.css"|g' index.html
sed -i 's|href="[^"]*bootstrap-icons.min.css"|href="vendor/bootstrap-icons.min.css"|g' index.html
sed -i 's|src="[^"]*bootstrap.bundle.min.js"|src="vendor/bootstrap.bundle.min.js"|g' index.html

echo "Fertig! Alles liegt nun 100% lokal in vendor/."

