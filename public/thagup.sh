#!/usr/bin/env bash
set -euo pipefail
curl -fsSL https://raw.githubusercontent.com/thagore-foundation/thagore/9eb776f12f0f0af531f2d7b9614113f56a4e113d/scripts/install/thagup-init.sh | bash -s -- "$@"
