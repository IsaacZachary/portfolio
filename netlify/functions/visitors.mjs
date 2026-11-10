// Public, cached summary of GoatCounter stats for the portfolio's "visitors from" marquee.
// Needs the env var GOATCOUNTER_TOKEN (GoatCounter → Settings → API → token with "Read statistics").
const CODE = process.env.GOATCOUNTER_CODE || 'izach';

export default async () => {
  const token = process.env.GOATCOUNTER_TOKEN;
  if (!token) return Response.json({ error: 'not configured' }, { status: 503 });
  const api = (p) => fetch(`https://${CODE}.goatcounter.com/api/v0${p}`, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  }).then((r) => (r.ok ? r.json() : Promise.reject(new Error(`${p} ${r.status}`))));

  const start = '2026-01-01T00:00:00Z';
  const end = new Date().toISOString().slice(0, 19) + 'Z';
  try {
    const [loc, tot] = await Promise.all([
      api(`/stats/locations?start=${start}&end=${end}&limit=40`),
      api(`/stats/total?start=${start}&end=${end}`).catch(() => null),
    ]);
    const countries = (loc.stats || [])
      .filter((s) => s.id && s.count > 0)
      .map((s) => ({ code: String(s.id).slice(0, 2).toUpperCase(), name: s.name, count: s.count }));
    return Response.json(
      { total: tot ? tot.total : countries.reduce((a, c) => a + c.count, 0), countries },
      { headers: { 'Cache-Control': 'public, max-age=300', 'Netlify-CDN-Cache-Control': 'public, s-maxage=600, stale-while-revalidate=3600' } },
    );
  } catch (e) {
    return Response.json({ error: 'upstream' }, { status: 502 });
  }
};

export const config = { path: '/api/visitors' };
