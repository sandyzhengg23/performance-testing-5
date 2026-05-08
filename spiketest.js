import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 10 },
    { duration: '10s', target: 80 },
    { duration: '30s', target: 80 },
    { duration: '10s', target: 10 },
    { duration: '20s', target: 0 },
  ],

  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
    http_reqs: ['rate>5'],
  },
};

export default function () {
  const res = http.get('https://quickpizza.grafana.com/');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

