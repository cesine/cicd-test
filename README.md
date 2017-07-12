# cicd-test

## Clean State

`git clone https://github.com/thesandlord/cicd-test.git`

## Switch to a Dev Branch

`git checkout -b dev`

## Upgrade to use ConfigMap

kubernetes.yaml
```YAML
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: cicd-test
  labels:
    name: cicd-test
spec:
  replicas: 10
  template:
    metadata:
      labels:
        name: cicd-test
    spec:
      containers:
      - name: cicd-test-container
        image: gcr.io/<PROJECT_ID>/<REPO_NAME>:<COMMIT_SHA>
        ports:
        - containerPort: 3000
        volumeMounts:
        - name: data-volume
          mountPath: /home/code/data
      volumes:
      - name: data-volume
        configMap:
          name: data
          items:
          - key: data.json
            path: data.json
```

`git commit -am "Use ConfigMaps" && git push origin dev`

## Whoops! Type in index.js!

`git commit -am "Fixed Type" && git push origin dev`

## Tests Pass! Squash and Merge into Master!

## Whoops! Forgot to create the ConfigMap

`kubectl create configmap data --from-file=./data/data.json`

## (Optional) Update ConfigMap

`kubectl create configmap data --from-file=./data/data.json -o yaml --dry-run | kubectl replace -f -`

## Reset Demo
```
git checkout v1.0 && \
git branch -D master && \
git checkout -b master && \
git push -f origin master
```