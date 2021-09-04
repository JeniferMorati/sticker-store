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
