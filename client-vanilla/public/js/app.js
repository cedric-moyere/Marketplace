async function loadComponent(filePath) {
  const response = await fetch(`/component/${filePath}`);
  return await response.text();
}

async function initApp() {
  const app = document.getElementById("app");

  const main = await loadComponent("main");

  app.innerHTML = main;
}

initApp();
