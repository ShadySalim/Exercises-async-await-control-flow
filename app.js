'strict'

// 1. init function keeps elements and wired listeners together in one block of code.
// 2. Data retrieval wraps fetch in an async helper that checks the response, throws descriptive errors, and returns plain text so networking stays isolated.
// 3. renderText(message) handles UI updates, deciding whether to show the success message or a fallback.
// 4. Event flow: call the fetch helper inside the listener, add a try/catch, show a loading hint, then render text or call renderErrror when an exception occurs.

// SELECTOR

const btn =  document.getElementById('btn');
const text = document.getElementById('text')
const errorMSG = document.getElementById('error');
const loading = document.getElementById('loading');

// CONFIG
const MIN_SPINNER_TIME = 1000;

// UTILITIES WAIT METHOD
const wait = ms => new Promise(resolve => setTimeout(resolve,ms))

const ensureMinimumSpinner = async startedAt => {
  const elapsed = Date.now() - startedAt;
  const remaining = MIN_SPINNER_TIME - elapsed;
  if(remaining > 0) await wait(remaining) 
}

const resetViews = () => {
  text.classList.add('hidden');
  text.textContent = '';
  errorMSG.classList.add('hidden');
  const existingBody = errorMSG.querySelector('[data-error-body]');
  if (existingBody) existingBody.textContent = '';
};

const showLoading = () => {
  resetViews();
  loading.classList.remove('hidden');
}

const hideLoading = () => {
  loading.classList.add('hidden')

}

console.log(wait)
const init = function(){
  // EVENT LISTERN
  btn.addEventListener('click' ,async () => {
    const startedAt = Date.now();
    showLoading();
   
    try{
      const data =  await fetchText('./api/sample.txt');
      await ensureMinimumSpinner(startedAt)
      renderText(data)
    }catch(err){
      console.error(err)
      await ensureMinimumSpinner(startedAt);

      renderErrror(err instanceof Error ? err.message :'Unexpected error');
    }finally{
      hideLoading();
    }
  })

}

// ASYNC HELPER FETCH URL
const fetchText = async function(url){
  const res = await fetch(`${url}`);
  if(!res.ok)
    throw new Error(' Something went wrong while contacting the server. Please try again in a moment.');

  const payload = (await res.text()).trim();
  if(!payload) throw new Error('No data received from the server.')
  
    return payload;
}

// RENDER TEXT TO UI

const renderText = function(msg){
   
  text.classList.remove('hidden')
  text.textContent = msg
}

const renderErrror = function(msg){
  errorMSG.classList.remove('hidden')
  errorMSG.textContent = msg;

}
init()