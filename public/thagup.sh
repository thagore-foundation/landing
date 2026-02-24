#!/usr/bin/env bash
set -euo pipefail
curl -fsSL https://raw.githubusercontent.com/thagore-foundation/thagore/28e45cc30f8fb788d60a8302e7f90594675c7b90/scripts/install/thagup-init.sh | bash -s -- "$@"
