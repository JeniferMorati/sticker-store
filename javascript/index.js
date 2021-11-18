const containerStore = document.getElementById("container-store");
const customerInfo = document.getElementById("customerInfo");
const checkoutModal = document.getElementById("checkoutModal");
const checkoutModalTitle = document.getElementById("checkoutModalLabel");
const checkoutModalProduct = document.getElementById("checkoutModalProduct");
const checkoutModalPrice = document.getElementById("checkoutModalPrice");
const checkoutModalImage = document.getElementById("checkoutModalImage");
const submitCheckout = document.getElementById("submitCheckout");
const checkoutDimiss = document.getElementById("checkoutDimiss");
const authModalLabel = document.getElementById("authModalLabel");
const authVerify = document.getElementById("authVerify");
const authPassInput = document.getElementById("authPassInput");
const authUserInput = document.getElementById("authUserInput");
const dimissAuthVerifyModal = document.getElementById("dimissAuthVerifyModal");
const errorAuthMessage = document.getElementById("errorAuthMessage");
const customerInfoResponsive = document.getElementById("customerInfoResponsive");
const HeaderComponent = document.getElementById("renderHeader");

const renderComponents = (component, target) => {
  console.log(component, target);
  const el = document.querySelector(target.id);
  
  //Se o elemento não existir então não requisita
  if (!el) return;
  
  const xhr = new XMLHttpRequest();
  xhr.open("GET", component, true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300){
      el.innerHTML = xhr.responseText;
    }
  };
  
  xhr.send(null);
};

const test2 = document.createElement("div");

const test3 = test2.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light mt-3 container rounded-pill shadow-sm bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="./assets/catlogo.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
        Sticker Store
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link link-dark active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link-dark" href="/pages/categorys.html">Categorias</a>
            </li>
            <li class="nav-item">
                <a class="nav-link link-dark" href="#">Carrinho</a>
            </li>
        </ul>
        <li class="nav-item d-flex align-items-center justify-content-center" id="customerInfo">

        </li>
    </div>
</div>
</nav>

<div class="collapse navbar-collapse container bg-light rounded shadow-sm bg-light mt-1" id="navbarNav">
<ul class="navbar-nav">
    <li class="nav-item d-flex align-items-center justify-content-between rounded shadow-sm p-3 mt-3 mb-3"
        id="customerInfoResponsive">

    </li>
    <li class="nav-item">
        <a class="nav-link link-dark active" aria-current="page" href="#">Inicio</a>
    </li>
    <li class="nav-item">
        <a class="nav-link link-dark" href="#">Produtos</a>
    </li>
    <li class="nav-item">
        <a class="nav-link link-dark" href="#">Carrinho</a>
    </li>
</ul>
</div>`;

renderComponents(test2, HeaderComponent);

submitCheckout.addEventListener("click", () => {
  checkoutDimiss.click();
});

const loggoutStore = () => {
  window.localStorage.removeItem('isLogged');
  window.localStorage.removeItem('user');
  document.location.reload();
}

authVerify.addEventListener("click", () => {
  if (authModalLabel.textContent === "Login") {
    if (window.localStorage.getItem(`user${authUserInput.value}`)) {
      const passCompare = window.localStorage.getItem(
        `pass${authUserInput.value}`
      );
      if (authPassInput.value === passCompare) {
        window.localStorage.setItem("user", authUserInput.value);
        dimissAuthVerifyModal.click();
        window.localStorage.setItem("isLogged", true);
        document.location.reload(true);
      } else {
        errorAuthMessage.innerText = "senha incorreta";
      }
    } else {
      errorAuthMessage.innerText = "Usuário não existe, por favor registre-se";
    }
  }

  if (authModalLabel.textContent === "Registrar") {
    if (window.localStorage.getItem(`user${authUserInput.value}`)) {
      errorAuthMessage.innerText = "usuário já existe, por favor faça login";
    } else {
      window.localStorage.setItem(
        `user${authUserInput.value}`,
        authUserInput.value
      );
      window.localStorage.setItem(
        `pass${authUserInput.value}`,
        authPassInput.value
      );
      dimissAuthVerifyModal.click();
      isLogged = true;
    }
  }
});

products.map((item) => {
  if (window.localStorage.getItem("isLogged")) {
    containerStore.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card m-2 shadow-sm" style="width: 18rem;" id="product-${item.id}">
          <img
            src="${item.image}"
            width: "50px"
            class="card-img-top"
            alt="Adesivo ${item.title}"
          />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p>
              <small>R$: ${item.price}</small>
            </p>
            <button
              class="btn btn-dark"
              id="teste${item.id}"
              data-bs-toggle="modal"
              data-bs-target="#checkoutModal"
              onClick="openCheckoutModal(${item.id})"
            >
              Comprar
            </button>
          </div>
        </div>
      `
    );
  } else {
    containerStore.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card m-2 shadow-sm" style="width: 18rem;" id="product-${item.id}">
          <img
            src="${item.image}"
            class="card-img-top"
            alt="Adesivo ${item.title}"
          />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p>
              <small>R$: ${item.price}</small>
            </p>
            <span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" title="Faça login para comprar">
            <button class="btn btn-dark" type="button" disabled>Comprar</button>
            </span>
          </div>
        </div>
      `
    );
  }
});

if (window.localStorage.getItem("isLogged")) {

  customerInfoResponsive.insertAdjacentHTML(
    "beforeend",
    `
    <span class="mb-3 mt-3">
    ${window.localStorage.getItem("user")}
    </span>
        <input
        type="button"
        class="btn btn-dark"
        onClick="loggoutStore()"
        value="Sair"
      />
    `
  );

  customerInfo.insertAdjacentHTML(
    "beforeend",
    `
    <span class="m-3">
    ${window.localStorage.getItem("user")}
    </span>
        <input
        type="button"
        class="btn btn-dark"
        onClick="loggoutStore()"
        value="Sair"
      />
    `
  );
} else {
  customerInfoResponsive.insertAdjacentHTML(
    "beforeend",
    `
    <input
    type="button"
    class="btn btn-dark"
    data-bs-toggle="modal"
    data-bs-target="#authModal"
    onClick="onRegisterAuth()"
    value="Cadastrar"
  />
    <input type="button"
    data-bs-toggle="modal"
    data-bs-target="#authModal"
    onClick="onLoginAuth()"
    class="btn border-dark"
    value="Entrar"
  />
    `
  );

  customerInfo.insertAdjacentHTML(
    "beforeend",
    `
      <input
        type="button"
        class="btn btn-dark m-3"
        data-bs-toggle="modal"
        data-bs-target="#authModal"
        onClick="onRegisterAuth()"
        value="Cadastrar"
      />
        <input type="button"
        data-bs-toggle="modal"
        data-bs-target="#authModal"
        onClick="onLoginAuth()"
        class="btn border-dark"
        value="Entrar"
      />
    `
  );
}

const onRegisterAuth = () => {
  errorAuthMessage.innerText = "";
  authModalLabel.innerText = "Registrar";
  authVerify.innerText = "Registrar";
};

const onLoginAuth = () => {
  errorAuthMessage.innerText = "";
  authModalLabel.innerText = "Login";
  authVerify.innerText = "Entrar";
};

const openCheckoutModal = (teste) => {
  const checkoutItem = products.filter((item) => item.id === teste)[0];

  checkoutModalTitle.innerText = `Comprar: ${checkoutItem.title}`;
  checkoutModalProduct.innerText = checkoutItem.title;
  checkoutModalPrice.innerText = `R$: ${checkoutItem.price}`;
  checkoutModalImage.setAttribute("src", `${checkoutItem.image}`);
};

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
