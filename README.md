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
