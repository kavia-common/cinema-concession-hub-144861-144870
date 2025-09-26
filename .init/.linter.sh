#!/bin/bash
cd /home/kavia/workspace/code-generation/cinema-concession-hub-144861-144870/snack_ordering_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

