#!/bin/bash
echo Refreshing binaries from artifacts.supernet.org
echo =========================================
echo Step: Removing old binaries
rm-rf assets/bin/linux64 || echo no clean up needed
pwd
[ ! -d assets/bin/linux64 ] && \
  mkdir -p assets/bin/linux64
cd assets
echo Step: Cloning latest binaries for build
tar -xzf bin/linux64/$KOMODO_COMPRESSED && rm bin/linux64/$KOMODO_COMPRESSED
cp -rvf bin/linux64/verus-cli/komodo* bin/linux64/ && rm -rf bin/linux64/verus-cli
cd ..