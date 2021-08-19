#!/usr/bin/env sh

set -eu

yarn install --frozen-lockfiles

exec "$@"
