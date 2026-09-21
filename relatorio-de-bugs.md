# Relatório de Bugs — Tela de Login

## BUG-001 — Mensagem genérica para campos vazios

**Severidade:** Baixa

**Descrição:**  
Quando o usuário tenta realizar o login sem preencher os campos de e-mail e senha, o sistema exibe a mensagem "E-mail ou senha incorretos."

**Passos para reproduzir:**
1. Abrir a tela de login.
2. Deixar o campo de e-mail vazio.
3. Deixar o campo de senha vazio.
4. Clicar em "Entrar".

**Resultado esperado:**  
O sistema deve informar que os campos precisam ser preenchidos.

**Resultado obtido:**  
O sistema informa que o e-mail ou senha estão incorretos.

**Sugestão:**  
Exibir uma mensagem específica, como "Preencha o e-mail e a senha."

**Status:** Aberto

---

## BUG-002 — Mensagem genérica quando a senha está vazia

**Severidade:** Baixa

**Descrição:**  
Quando o usuário informa o e-mail corretamente, mas deixa a senha vazia, o sistema apresenta uma mensagem genérica.

**Passos para reproduzir:**
1. Abrir a tela de login.
2. Informar `teste@email.com`.
3. Deixar o campo de senha vazio.
4. Clicar em "Entrar".

**Resultado esperado:**  
O sistema deve informar que a senha precisa ser preenchida.

**Resultado obtido:**  
O sistema informa "E-mail ou senha incorretos."

**Sugestão:**  
Exibir uma mensagem específica, como "Informe sua senha."

**Status:** Aberto