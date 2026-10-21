# Crust & Co. pizza delivery demo

A responsive, dependency-free sample storefront. Includes six pizzas, category filters, three sizes, a persistent shopping bag, quantity controls, delivery/pickup pricing, and a validated simulated checkout. Illustrations are CSS; Google Fonts are optional with system-font fallbacks.

## Run

From this directory:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in a browser on the same machine. For a remote workspace, use your editor's port-forwarding feature for port 8000.

You can also open index.html directly. Browser storage availability can vary with file URLs.

This is a frontend demonstration. It does not accept payments, send emails, or submit orders. Cart contents are stored in browser localStorage; customer details are not persisted or transmitted.

## Deploy to Google Cloud Run

The included Dockerfile runs a small Node.js static server as a non-root user and listens on Cloud Run's `PORT`. No npm dependencies or runtime secrets are needed.

With the Google Cloud CLI authenticated, billing enabled, and appropriate project permissions, run from this directory (replace `YOUR_PROJECT_ID` and choose your region):

```sh
gcloud run deploy pizza-example \
  --source . \
  --project YOUR_PROJECT_ID \
  --region europe-west1 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 256Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 2
```

This creates a public service and uses Cloud Build and Artifact Registry. Cloud Run, build, and image storage charges may apply. The cart remains browser-local; this deployment does not add payment or order processing.

To test the production server locally without Docker:

```sh
node server.mjs
```

Then open http://localhost:8080.
