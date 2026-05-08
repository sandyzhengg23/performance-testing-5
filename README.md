
# Performance Testing Assignment 5

GitHub Repository: https://github.com/sandyzhengg23/performance-testing-5

## Web Application Under Test

Grafana QuickPizza: https://quickpizza.grafana.com/

Feature tested: QuickPizza page/recommendation feature.  
For k6, the endpoint tested was:

```text
https://quickpizza.grafana.com/
````

## Tools Used

* k6 for server-side performance testing
* Google Lighthouse in Chrome DevTools for client-side performance testing
* Google Chrome
* VS Code
* GitHub

## Installation

Install k6 with Homebrew:

```bash
brew install k6
```

Check installation:

```bash
k6 version
```

Google Lighthouse was used through Chrome DevTools, so no separate installation was needed.

## Project Structure

```text
performance-testing-5/
  loadtest.js
  spiketest.js
  README.md
  screenshots/
    exercise2/
    exercise3/
```

## Server-Side Testing

The same operational profile was used for both tests: each virtual user sends an HTTP GET request to the QuickPizza site, waits briefly, and repeats.

### SLA Thresholds

* p95 response time < 500 ms
* Error rate < 1%
* Throughput > 5 requests per second

### Load Test

Run:

```bash
k6 run loadtest.js
```

This test gradually ramps traffic up to 25 virtual users, holds briefly, and ramps down.

### Spike Test

Run:

```bash
k6 run spiketest.js
```

This test quickly increases traffic to 80 virtual users, holds briefly, and ramps down.

## Client-Side Testing

Client-side testing was done with Google Lighthouse in Chrome DevTools.

Steps:

1. Open [https://quickpizza.grafana.com/](https://quickpizza.grafana.com/) in Chrome Incognito.
2. Open DevTools.
3. Go to the Lighthouse tab.
4. Select Performance.
5. Run once with Mobile selected.
6. Run once with Desktop selected.
7. Record FCP, LCP, TBT, CLS, and Speed Index.

## Screenshots

Screenshots are included in the `screenshots/` folder:

* `exercise2/`: k6 scripts, live runs, and results
* `exercise3/`: Lighthouse mobile and desktop setup/results

## References

* Grafana QuickPizza: [https://quickpizza.grafana.com/](https://quickpizza.grafana.com/)
* k6 documentation: [https://grafana.com/docs/k6/latest/](https://grafana.com/docs/k6/latest/)
* Google Lighthouse documentation: [https://developer.chrome.com/docs/lighthouse/overview/](https://developer.chrome.com/docs/lighthouse/overview/)
* Chrome DevTools documentation: [https://developer.chrome.com/docs/devtools/](https://developer.chrome.com/docs/devtools/)

## AI Usage

I used ChatGPT to help understand the assignment requirements, choose k6 and Lighthouse, structure the k6 load and spike tests, and interpret the k6 and Lighthouse results. 
