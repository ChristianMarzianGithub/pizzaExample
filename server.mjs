import http from 'node:http';
import { readFile } from 'node:fs/promises';
const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/style.css', ['style.css', 'text/css; charset=utf-8']],
]);
const port = Number(process.env.PORT || 8080);
const server = http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  const asset = assets.get(new URL(req.url, 'http://localhost').pathname);
  if (!asset) { res.writeHead(404); return res.end('Not found'); }
  try {
    const body = await readFile(new URL(asset[0], import.meta.url));
    res.writeHead(200, {
      'Content-Type': asset[1],
      'Content-Length': body.length,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-cache',
    });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(500);
    res.end('Unable to load page');
  }
});
server.listen(port, '0.0.0.0', () => console.log(`Pizza app listening on port ${port}`));
process.on('SIGTERM', () => server.close(() => process.exit(0)));
