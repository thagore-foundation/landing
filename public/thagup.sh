#!/usr/bin/env bash
set -euo pipefail
curl -fsSL https://raw.githubusercontent.com/thagore-foundation/thagore/410c531729b1cfec172a092779a64a29a806903b/scripts/install/thagup-init.sh | bash -s -- "$@"
