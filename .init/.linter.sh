#!/bin/bash
cd /home/kavia/workspace/code-generation/seamless-learning-platform-252593-253071/lms_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

