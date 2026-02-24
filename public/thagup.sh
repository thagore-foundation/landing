#!/usr/bin/env bash
set -euo pipefail
curl -fsSL https://raw.githubusercontent.com/thagore-foundation/thagore/main/scripts/install/thagup-init.sh | bash -s -- "$@"
