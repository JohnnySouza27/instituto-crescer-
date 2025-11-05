// ./src/js/app.js
// SPA + Validação Avançada + Busca de CEP + localStorage

// === TEMPLATES DAS PÁGINAS (modelos JS) ===
const routes = {
  '': getHomeContent(),
  'cadastro': getCadastroContent(),
  'projetos': getProjetosContent()
};

// === FUNÇÕES DE CONTEÚDO (HTML como string) ===
function getHomeContent() {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <h2 id="hero-title">Transformando trajetórias, inspirando futuros</h2>
      <p>O Instituto Crescer desenvolve programas de educação, oficinas culturais e mentorias para crianças e
          jovens em situação de vulnerabilidade. Atuamos em parceria com comunidades, escolas e voluntários para
          ampliar oportunidades.</p>
    </section>

    <section class="grid" aria-labelledby="sobre-title">
      <article class="card" aria-labelledby="sobre-title">
          <h3 id="sobre-title">Quem somos</h3>
          <p>Somos uma Organização da Sociedade Civil dedicada a promover inclusão social por meio de projetos
              educativos, formações e apoio psicossocial.</p>

          <h4>Missão</h4>
          <p>Promover o desenvolvimento integral de crianças e jovens através de educação, cultura e participação
              cidadã.</p>

          <h4>Visão</h4>
          <p>Ser referência regional em práticas de inclusão e protagonismo juvenil até 2030.</p>

          <h4>Valores</h4>
          <ul>
              <li>Respeito</li>
              <li>Transparência</li>
              <li>Colaboração</li>
              <li>Empoderamento</li>
          </ul>

          <figure>
              <img class="responsive" src="./src/img/atividade.png" alt="Crianças em atividade educativa" />
              <figcaption>Oficina de leitura e arte — Projeto Leitura em Movimento</figcaption>
          </figure>
      </article>

      <aside class="card" aria-labelledby="contato">
          <h3 id="contato">Contato</h3>
          <address>
              Instituto Crescer<br />
              Rua das Flores, 123 — Bairro Esperança<br />
              São Paulo — SP<br />
              CEP: 01234-567
          </address>

          <p><strong>Telefone:</strong> <a href="tel:+5511998765432">+55 (11) 99876-5432</a></p>
          <p><strong>E-mail:</strong> <a href="mailto:contato@institutocrescer.org.br">contato@institutocrescer.org.br</a></p>

          <h4>Apoie nossas campanhas</h4>
          <p>Conheça as campanhas ativas em <a href="projetos.html">Projetos</a>. Doações seguras e prestação de contas pública.</p>
      </aside>
    </section>

    <section class="card" aria-labelledby="transparencia">
      <h3 id="transparencia">Transparência</h3>
      <p>Relatórios financeiros e demonstrativos estão disponíveis para consulta. Publicamos relatórios
          trimestrais e prestação de contas das campanhas.</p>
      <ul>
          <li><a href="#">Relatório anual 2024 (PDF)</a></li>
          <li><a href="#">Política de privacidade</a></li>
      </ul>
    </section>

    <section class="card" aria-labelledby="voluntario">
      <h3 id="voluntario">Seja voluntário</h3>
      <p>Tem interesse em atuar com crianças e jovens? Acesse a página de <a href="#cadastro">cadastro</a>
          para se inscrever nas oportunidades.</p>
      <p><a class="cta" href="#cadastro">Cadastrar como voluntário</a></p>
    </section>
  `;
}

function getCadastroContent() {
  return `
    <h2 id="form-title">Cadastro de Voluntário / Apoiador</h2>
    <p>Preencha os dados abaixo. Campos marcados com <strong>*</strong> são obrigatórios.</p>

    <form action="/enviar-cadastro" method="post" autocomplete="on" novalidate id="cadastro-form">
      <fieldset>
        <legend>Informações pessoais</legend>
        <div class="row row-cols-2">
          <div>
            <label for="nome">Nome completo <strong>*</strong></label>
            <input id="nome" name="nome" type="text" required minlength="3" placeholder="Ex.: Maria Silva" aria-required="true" />
          </div>
          <div>
            <label for="nascimento">Data de nascimento <strong>*</strong></label>
            <input id="nascimento" name="nascimento" type="date" required aria-required="true" />
          </div>
        </div>

        <div class="row row-cols-3" style="margin-top: 0.5rem">
          <div>
            <label for="cpf">CPF <strong>*</strong></label>
            <input id="cpf" name="cpf" type="text" inputmode="numeric" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                   placeholder="000.000.000-00" title="Formato: 000.000.000-00" required aria-required="true" />
            <small class="meta">Formato: 000.000.000-00</small>
            <span class="error-msg" id="cpf-error"></span>
          </div>
          <div>
            <label for="telefone">Telefone / Celular <strong>*</strong></label>
            <input id="telefone" name="telefone" type="tel" inputmode="tel"
                   pattern="\\(?\\d{2}\\)?\\s?\\d{4,5}-\\d{4}" placeholder="(11) 91234-5678"
                   title="Formato: (99) 91234-5678" required aria-required="true" />
            <span class="error-msg" id="telefone-error"></span>
          </div>
          <div>
            <label for="email">E-mail <strong>*</strong></label>
            <input id="email" name="email" type="email" placeholder="seu@exemplo.com" required aria-required="true" />
            <span class="error-msg" id="email-error"></span>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <div class="row row-cols-3">
          <div>
            <label for="cep">CEP <strong>*</strong></label>
            <input id="cep" name="cep" type="text" inputmode="numeric" pattern="\\d{5}-\\d{3}"
                   placeholder="00000-000" title="Formato: 00000-000" required aria-required="true" />
            <span class="error-msg" id="cep-error"></span>
          </div>
          <div>
            <label for="cidade">Cidade <strong>*</strong></label>
            <input id="cidade" name="cidade" type="text" required />
            <span class="error-msg" id="cidade-error"></span>
          </div>
          <div>
            <label for="estado">Estado (UF) <strong>*</strong></label>
            <select id="estado" name="estado" required aria-required="true">
              <option value="">Selecione</option>
              ${['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
      .map(uf => `<option value="${uf}">${uf}</option>`).join('')}
            </select>
            <span class="error-msg" id="estado-error"></span>
          </div>
        </div>
        <div style="margin-top: 0.5rem">
          <label for="logradouro">Logradouro, número e complemento</label>
          <input id="logradouro" name="logradouro" type="text" placeholder="Rua Exemplo, 123, ap. 45" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Interesses e disponibilidade</legend>
        <div>
          <label for="area">Área de interesse</label>
          <select id="area" name="area">
            <option value="">Selecione</option>
            <option value="educacao">Educação</option>
            <option value="cultura">Cultura</option>
            <option value="mentoria">Mentoria</option>
            <option value="logistica">Logística / Eventos</option>
            <option value="capacitacao">Capacitação / Tecnologia</option>
          </select>
        </div>
        <div style="margin-top: 0.5rem">
          <label for="horario">Horários disponíveis</label>
          <textarea id="horario" name="horario" rows="3" placeholder="Ex.: Segundas 14-17h, Quartas 18-20h"></textarea>
        </div>
        <div style="margin-top: 0.5rem">
          <label for="experiencia">Experiência ou observações</label>
          <textarea id="experiencia" name="experiencia" rows="4"
                    placeholder="Conte-nos sobre sua experiência ou habilidades relevantes."></textarea>
        </div>
      </fieldset>

      <fieldset>
        <legend>Consentimentos</legend>
        <div>
          <input id="dados" name="dados" type="checkbox" value="consente" required aria-required="true" />
          <label for="dados">Autorizo o Instituto Crescer a tratar meus dados pessoais para fins de seleção e contato <strong>*</strong></label>
          <span class="error-msg" id="dados-error"></span>
        </div>
        <div>
          <input id="newsletter" name="newsletter" type="checkbox" value="sim" />
          <label for="newsletter">Quero receber novidades e campanhas por e-mail (opcional)</label>
        </div>
      </fieldset>

      <div class="actions">
        <button type="submit">Enviar cadastro</button>
        <button type="reset">Limpar</button>
      </div>
    </form>
  `;
}

function getProjetosContent() {
  return `
    <section aria-labelledby="educacao">
      <h2 id="educacao">Educação & Alfabetização</h2>
      <img src="./src/img/educação.png" alt="Educação" class="educacao">
      <div class="projects" role="list">
        <article class="project" role="listitem" aria-labelledby="p1">
          <h3 id="p1">Leitura em Movimento</h3>
          <p>Oficinas semanais de leitura, rodas de contação e bibliotecas comunitárias itinerantes.</p>
          <h4>Impacto</h4>
          <ul>
            <li>300 crianças atendidas / ano</li>
            <li>Parcerias com 6 escolas locais</li>
          </ul>
          <h4>Campanha</h4>
          <p>Meta: R$ 40.000 — Arrecadado: R$ 24.000</p>
          <div class="progress" aria-hidden="true"><span style="width:60%"></span></div>
          <p><a href="#doar-p1">Apoiar este projeto</a></p>
        </article>

        <article class="project" role="listitem" aria-labelledby="p2">
          <h3 id="p2">Oficinas de Tecnologia</h3>
          <img src="./src/img/tecnologia.png" alt="Tecnologia" class="tecnologia" />
          <p>Capacitação básica em informática e programação para adolescentes.</p>
          <h4>Impacto</h4>
          <ul>
            <li>Vagas abertas: 40</li>
            <li>Certificados digitais ao final do ciclo</li>
          </ul>
        </article>
      </div>
    </section>

    <section aria-labelledby="cultura">
      <h2 id="cultura">Cultura & Arte</h2>
      <img src="./src/img/cultura.png" alt="Cultura" class="cultura">
      <article class="project" aria-labelledby="p3">
        <h3 id="p3">Palco Aberto</h3>
        <p>Oficinas de teatro, música e exposição de trabalhos dos jovens.</p>
      </article>
    </section>

    <section aria-labelledby="campanhas" id="campanhas">
      <h2 id="campanhas">Campanhas de arrecadação</h2>
      <img src="./src/img/arrecadaçao.png" alt="Arrecadação" class="arrecadacao">
      <p>As campanhas têm metas, prazos e prestação de contas pública. Doe com segurança via nossa parceria com a plataforma de pagamentos.</p>
      <h3 id="doar-p1">Como doar</h3>
      <ol>
        <li>Escolha o projeto.</li>
        <li>Selecione o valor ou insira um valor personalizado.</li>
        <li>Preencha dados de pagamento na página segura.</li>
      </ol>
      <p class="meta">Ao doar, você recebe comprovante e terá acesso a relatórios de aplicação dos recursos.</p>
    </section>

    <section class="project" aria-labelledby="parcerias">
      <h2 id="parcerias">Parcerias</h2>
      <p>Você é empresa ou instituição interessada em patrocinar? <a href="mailto:parcerias@institutocrescer.org.br">Envie uma proposta</a>.</p>
    </section>
  `;
}


// === ROTEAMENTO E CARREGAMENTO ===
function loadContent() {
  let hash = window.location.hash.slice(1);
  if (!hash || !routes[hash]) hash = '';

  const main = document.querySelector('main#app');
  if (!main) return;

  main.innerHTML = routes[hash];

  // Atualiza título da página
  const titles = {
    '': 'Instituto Crescer — Crianças & Jovens',
    'cadastro': 'Cadastro — Instituto Crescer',
    'projetos': 'Projetos — Instituto Crescer'
  };
  document.title = titles[hash] || titles[''];

  // Atualiza header
  const headerH1 = document.querySelector('header h1');
  if (headerH1) {
    const headerTitles = {
      '': 'Instituto Crescer',
      'cadastro': 'Cadastros — Instituto Crescer',
      'projetos': 'Projetos'
    };
    headerH1.textContent = headerTitles[hash] || headerTitles[''];
  }

  // Fecha menu mobile
  const menu = document.getElementById('menu-mobile');
  if (menu) menu.classList.remove('active');

  // Inicializa formulário se necessário
  if (hash === 'cadastro') {
    // aguarda 50-100ms para garantir que o DOM injetado esteja pronto
    setTimeout(initFormValidation, 100);
  }
}

// === INICIALIZAÇÃO ===
document.addEventListener('DOMContentLoaded', () => {
  loadContent();
  window.addEventListener('hashchange', loadContent);

  // Menu mobile
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu-mobile');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => menu.classList.toggle('active'));
  }

  // Intercepta cliques em links internos (#) — delegação
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      e.preventDefault();
      window.location.hash = href;

      // Fecha o menu mobile ao clicar
      const menuMobile = document.getElementById('menu-mobile');
      if (menuMobile) menuMobile.classList.remove('active');
    }
  });

  // --- modo escuro (exemplo: botão existente no footer)
  const themeBtn = document.getElementById('toggle-theme');
  if (themeBtn) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeBtn.textContent = '☀️';
    } else {
      themeBtn.textContent = '🌙';
    }

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
    });
  }
});

// === VALIDAÇÃO DO FORMULÁRIO E HELPERS ===
function initFormValidation() {
  const form = document.getElementById('cadastro-form');
  if (!form) return;

  // === BUSCA DE CEP ===
  const cepInput = document.getElementById('cep');
  if (cepInput) {
    cepInput.addEventListener('blur', async () => {
      const cep = cepInput.value.replace(/\D/g, '');
      clearError('cep');
      if (cep.length !== 8) {
        showError('cep', 'CEP deve ter 8 dígitos.');
        return;
      }
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();
        if (data.erro) throw new Error();
        const log = document.getElementById('logradouro');
        const cid = document.getElementById('cidade');
        const uf = document.getElementById('estado');
        if (log) log.value = data.logradouro || '';
        if (cid) cid.value = data.localidade || '';
        if (uf) uf.value = data.uf || '';
      } catch {
        showError('cep', 'CEP não encontrado.');
      }
    });
  }

  // === SUBMISSÃO ===
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    let valid = true;

    valid = !!validateRequired('nome', 'Nome é obrigatório.') && valid;
    valid = !!validateDate('nascimento', 'Data de nascimento é obrigatória.', 18) && valid;
    valid = !!validateCPF('cpf') && valid;
    valid = !!validatePhone('telefone') && valid;
    valid = !!validateEmail('email') && valid;
    valid = !!validateRequired('cep', 'CEP é obrigatório.') && valid;
    valid = !!validateRequired('cidade', 'Cidade é obrigatória.') && valid;
    valid = !!validateRequired('estado', 'Estado é obrigatório.') && valid;
    valid = !!validateCheckbox('dados', 'Você deve autorizar o tratamento de dados.') && valid;

    if (valid) {
      const data = Object.fromEntries(new FormData(form));
      const cadastros = JSON.parse(localStorage.getItem('cadastros') || '[]');
      cadastros.push({ ...data, dataEnvio: new Date().toISOString() });
      localStorage.setItem('cadastros', JSON.stringify(cadastros));
      alert('Cadastro enviado com sucesso! Salvo localmente.');
      form.reset();
    }
  });
}

// === FUNÇÕES DE VALIDAÇÃO ===
function showError(id, msg) {
  const el = document.getElementById(`${id}-error`);
  if (el) el.textContent = msg;
  const field = document.getElementById(id);
  if (field) field.classList.add('invalid');
}

function clearError(id) {
  const el = document.getElementById(`${id}-error`);
  if (el) el.textContent = '';
  const field = document.getElementById(id);
  if (field) field.classList.remove('invalid');
}

function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  document.querySelectorAll('input, select').forEach(el => el.classList.remove('invalid'));
}

function validateRequired(id, msg) {
  const el = document.getElementById(id);
  const val = el ? el.value.trim() : '';
  if (!val) { showError(id, msg); return false; }
  return true;
}

function validateDate(id, msg, minAge = 0) {
  const input = document.getElementById(id);
  if (!input || !input.value) { showError(id, msg); return false; }
  const birth = new Date(input.value);
  const age = (Date.now() - birth) / (1000 * 60 * 60 * 24 * 365.25);
  if (age < minAge) { showError(id, `Você deve ter pelo menos ${minAge} anos.`); return false; }
  return true;
}

function validateCPF(id) {
  const el = document.getElementById(id);
  const raw = el ? el.value.replace(/\D/g, '') : '';
  const cpf = raw;
  if (!/^\d{11}$/.test(cpf) || /^(\d)\1+$/.test(cpf)) {
    showError(id, 'CPF inválido.');
    return false;
  }
  let sum = 0, rest;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
  rest = (sum * 10) % 11; if (rest >= 10) rest = 0;
  if (rest !== parseInt(cpf[9])) { showError(id, 'CPF inválido.'); return false; }
  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
  rest = (sum * 10) % 11; if (rest >= 10) rest = 0;
  if (rest !== parseInt(cpf[10])) { showError(id, 'CPF inválido.'); return false; }
  return true;
}

function validatePhone(id) {
  const el = document.getElementById(id);
  const phone = el ? el.value.replace(/\D/g, '') : '';
  if (phone.length < 10 || phone.length > 11) {
    showError(id, 'Telefone inválido.');
    return false;
  }
  return true;
}

function validateEmail(id) {
  const el = document.getElementById(id);
  const email = el ? el.value : '';
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    showError(id, 'E-mail inválido.');
    return false;
  }
  return true;
}

function validateCheckbox(id, msg) {
  const el = document.getElementById(id);
  const checked = el ? el.checked : false;
  if (!checked) { showError(id, msg); return false; }
  return true;
}