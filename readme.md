# smhog.co.uk

This is an old site and is using node version `v12.22.12`, please downgrade to run npm install without unforseen errors.

To install dependencies run

```
npm install
```

To run the application run the following snippets in separate terminal windows.

```
npm run webpack-dev-server
```

```
npm run docker
```

Once everything is running, use `docker ps` to find the locally mapped port that maps to port 3000 within the running docker container. Once you have the port, head to `http://localhost:<docker port>` in a browser to see the site.

> Disclaimer: This is an old website for a company that no longer exists and was deployed alongside a self hosted CDN (Minio) and Routing system (Traefik). As such the gallery images and other assets are not available in the demo. This repo is meant as a example of Vue development.
