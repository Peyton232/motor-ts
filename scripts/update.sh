#!/bin/bash
echo "🔷 Updating Sonr Core (daemon, proto)..."
BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../../
PROJECT_DIR=$(pwd);
PROTO_STG_DIR=${PROJECT_DIR}/generated
PROTOC_GEN_TS_PATH="/usr/local/bin/protoc-gen-ts"
PROTO_LIST=${PROTO_STG_DIR}/proto/**/*.proto
BINARY_DARWIN_DIR=assets/bin/darwin
BINARY_LINUX_DIR=assets/bin/linux
BINARY_WINDOWS_DIR=assets/bin/windows
CACHE_DIR=assets/cache

echo "Reseting Directories..."
rm -rf ${CACHE_DIR}
rm -rf ${BINARY_DARWIN_DIR}
rm -rf ${BINARY_LINUX_DIR}
rm -rf ${BINARY_WINDOWS_DIR}
mkdir -p ${BINARY_DARWIN_DIR}
mkdir -p ${BINARY_LINUX_DIR}
mkdir -p ${BINARY_WINDOWS_DIR}
mkdir -p ${CACHE_DIR}
echo "\n"

echo "Downloading Release Asset (proto)..."
mkdir -p ${PROTO_STG_DIR}
gh release download --repo 'sonr-io/core' --pattern proto_*.zip --dir ${PROJECT_DIR}
unzip -o ${PROJECT_DIR}/proto_*.zip -d ${PROTO_STG_DIR}
rm -rf ${PROJECT_DIR}/proto_*.zip
echo "\n"

echo "🔷 Compiling protos..."
protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --ts_proto_out=. ${PROTO_LIST} --ts_proto_opt=outputClientImpl=grpc-node --ts_proto_opt=useOptionals=true --ts_proto_opt=outputServices=grpc-js --ts_proto_opt=env=node --ts_proto_opt=stringEnums=true --ts_proto_opt=esModuleInterop=true --proto_path=${PROTO_STG_DIR}
rm -rf ${PROTO_STG_DIR}
echo "\n"

echo "Downloading Release Asset (darwin-arm64 only)..."
gh release download --repo 'sonr-io/core' --pattern *_darwin_amd64 --dir assets/bin/darwin
mv assets/bin/darwin/*_darwin_amd64 assets/bin/darwin/sonrd
chmod +x assets/bin/darwin/sonrd
echo "✅ Finished Upgrading ➡ `date`"
echo "\n"
