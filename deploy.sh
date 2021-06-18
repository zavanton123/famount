# build the prod images
docker build -t zavanton/famount-web:latest -t zavanton/famount-web:$SHA -f ./web/Dockerfile ./web
docker build -t zavanton/famount-api:latest -t zavanton/famount-api:$SHA -f ./api/Dockerfile ./api

# push the prod images to Docker Hub (with the latest tag)
docker push zavanton/famount-web:latest
docker push zavanton/famount-api:latest

# push the prod images to Docker Hub (with the git sha tag)
docker push zavanton/famount-web:$SHA
docker push zavanton/famount-api:$SHA

# apply the k8s configs located in the ./k8s directory
kubectl apply -f k8s

# update the images in the k8s cluster
kubectl set image deployments/server-deployment server=zavanton/famount-api:$SHA
kubectl set image deployments/client-deployment client=zavanton/famount-web:$SHA
### (end deploy.sh)
