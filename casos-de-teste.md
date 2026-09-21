# Casos de Teste — Tela de Login

## CT-001 — Login com dados válidos

**Dados:**
- E-mail: teste@email.com
- Senha: 123456

**Resultado esperado:**  
O sistema deve permitir o login.

**Resultado obtido:**  
Login realizado com sucesso.

**Status:** PASSOU ✅

---

## CT-002 — Login com senha incorreta

**Dados:**
- E-mail: teste@email.com
- Senha: 1234567

**Resultado esperado:**  
O sistema deve impedir o login.

**Resultado obtido:**  
O sistema informou que o e-mail ou senha estão incorretos.

**Status:** PASSOU ✅

---

## CT-003 — Login com e-mail inexistente

**Dados:**
- E-mail: naoexiste@email.com
- Senha: 123456

**Resultado esperado:**  
O sistema deve impedir o login.

**Resultado obtido:**  
O sistema informou que o e-mail ou senha estão incorretos.

**Status:** PASSOU ✅

---

## CT-004 — Campos vazios

**Dados:**
- E-mail: vazio
- Senha: vazia

**Resultado esperado:**  
O sistema deve solicitar o preenchimento dos campos.

**Resultado obtido:**  
O sistema informou que o e-mail ou senha estão incorretos.

**Status:** PASSOU COM OBSERVAÇÃO ⚠️

**Observação:**  
A mensagem poderia ser mais específica, informando que os campos precisam ser preenchidos.

---

## CT-005 — E-mail inválido

**Dados:**
- E-mail: teste@
- Senha: 123456

**Resultado esperado:**  
O sistema deve impedir o envio do formulário.

**Resultado obtido:**  
O navegador informou que o e-mail precisa conter um formato válido.

**Status:** PASSOU ✅

---

## CT-006 — Senha vazia

**Dados:**
- E-mail: teste@email.com
- Senha: vazia

**Resultado esperado:**  
O sistema deve solicitar o preenchimento da senha.

**Resultado obtido:**  
O sistema informou que o e-mail ou senha estão incorretos.

**Status:** PASSOU COM OBSERVAÇÃO ⚠️

**Observação:**  
A mensagem poderia informar especificamente que a senha precisa ser preenchida.