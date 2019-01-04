#!/bin/bash
# Copyright 2017-2019 @polkadot/ts authors & contributors
# This software may be modified and distributed under the terms
# of the ISC license. See the LICENSE file for details.

rm -rf build
mkdir -p build

cd types
DIRS=( $(ls -1d *) )

for DIR in "${DIRS[@]}"; do
  if [ -d "$DIR" ] && [ -f "$DIR/index.d.ts" ]; then
    echo ""
    echo "*** Copying $DIR"

    cp -r $DIR ../build/
  fi
done

cd ..
exit 0
