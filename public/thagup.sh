#!/usr/bin/env bash
set -euo pipefail
curl -fsSL https://raw.githubusercontent.com/thagore-foundation/thagore/a261efd6b205e1885de52cdec2f1b11aaeba27f1/scripts/install/thagup-init.sh | bash -s -- "$@"
