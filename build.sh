#!/bin/bash
# Copyright 2017-2020 @polkadot/ts authors & contributors
# SPDX-License-Identifier: ISC

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
