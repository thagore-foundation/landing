#!/usr/bin/env bash
set -euo pipefail
curl -fsSL https://raw.githubusercontent.com/thagore-foundation/thagore/589b11778697e2c6d70ab179939c0ea113d8b037/scripts/install/thagup-init.sh | bash -s -- "$@"
