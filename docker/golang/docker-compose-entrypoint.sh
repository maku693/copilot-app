#!/usr/bin/env sh

set -eu

go install github.com/cespare/reflex

exec "$@"
