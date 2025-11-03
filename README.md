# AJAX Loader Demo

A small sandbox project for practicing modern async JavaScript patterns while fetching text content from an API. It focuses on building reliable UI feedback around asynchronous requests using only vanilla JS and TailwindCSS utilities.

## Highlights
- Exercises async/await control flow with a fetch helper that validates responses and surfaces friendly error messages.
- Demonstrates Promise-based timing techniques to guarantee a minimum spinner duration without blocking the main thread.
- Shows how to isolate rendering concerns with dedicated helpers for loading, success, and failure states.
- Encourages defensive UI resets so stale content never flashes between requests.

## How to Run
1. Open `index.html` in a modern browser (Chrome, Edge, Firefox, Safari).
2. Click **Explore Requests** to trigger the fetch from `api/sample.txt`.
3. Toggle network throttling or rename the sample file to observe the loading and error states in action.

## What You Will Practice
- Structuring asynchronous JavaScript with clean separation between data fetching and UI updates.
- Handling errors gracefully by propagating descriptive messages and updating the interface accordingly.
- Coordinating multiple async steps (fetching, spinner timing, rendering) without resorting to deeply nested callbacks.
- Maintaining readable, maintainable code that makes it clear where to extend behavior (e.g., different endpoints or richer error templates).

## Next Steps
- Swap the local text endpoint for a public JSON API and render parsed data.
- Add automated tests that mock `fetch` to verify the UI helpers react to success, timeout, and error scenarios.
- Experiment with abort controllers to support request cancellation when users click repeatedly.
