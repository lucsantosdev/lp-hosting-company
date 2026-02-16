# AtlasEdge Hosting - Landing Page

**Leia em outros idiomas:** [English](README.md) | [Português](README.pt.md) | [Español](README.es.md)

---

Um modelo de landing page estratégico e minimalista para uma empresa fictícia de hospedagem empresarial. Este projeto apresenta design web moderno com estética elegante, mensagens empresariais e um sistema multilíngue leve.

![AtlasEdge](https://img.shields.io/badge/AtlasEdge-Enterprise%20Hosting-b28b4b?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Recursos

### 🎨 Design
- **Estética Minimalista**: Paleta de cores premium com detalhes em dourado
- **Tipografia Elegante**: Playfair Display com logotipo personalizado
- **Rolagem Suave**: Navegação por âncoras com transições suaves
- **Ícones SVG Personalizados**: Favicon da marca e ilustrações da seção de confiança
- **Layout Profissional**: Seções e mensagens focadas em empresas

### 🌍 Suporte Multilíngue (EN / PT / ES)
- **Tradução no Cliente**: Alternância de idioma com JavaScript
- **Três Idiomas**: Inglês, Português e Espanhol
- **Escolha Persistente**: Preferência de idioma salva no `localStorage`
- **Atualizações Dinâmicas**: Todo conteúdo incluindo placeholders e valores de botões
- **Métricas Rotativas**: Rótulos localizados para estatísticas atualizadas em tempo real

### 📱 Design Responsivo
- **Abordagem Mobile-First**: Otimizado para todos os tamanhos de dispositivos
- **Menu Hambúrguer**: Navegação limpa para dispositivos móveis
- **Grids Adaptáveis**: Layouts flexíveis usando CSS Grid
- **Otimizado para Touch**: Otimizado para interações móveis

### 🚀 Performance
- **Zero Dependências**: JavaScript vanilla puro
- **SVGs Leves**: Ilustrações personalizadas com menos de 2KB cada
- **Sem Processo de Build**: HTML estático pronto para deploy
- **Carregamento Rápido**: Recursos externos mínimos

### ♿ Acessibilidade
- **Labels ARIA**: Marcação semântica adequada e roles
- **Navegação por Teclado**: Suporte completo a teclado
- **Rolagem Suave**: Comportamento de rolagem suave baseado em CSS
- **Estados de Foco**: Indicadores visuais claros

### 🎯 Seções
1. **Seção Hero**: Proposta de valor empresarial com métricas rotativas
2. **Sobre a AtlasEdge**: Apresentação da empresa com cards ilustrados
3. **Serviços Empresariais**: Mostra dos principais serviços de hospedagem
4. **Planos de Preços**: Estrutura de preços empresarial em três níveis
5. **Validador de Domínio**: Formulário de avaliação de portfólio
6. **Formulário de Contato**: Solicitação de consultoria empresarial
7. **Rodapé**: Navegação abrangente e localizações
8. **Créditos do Desenvolvedor**: Links sociais e opção de suporte

## 🛠️ Tecnologias

- **HTML5**: Marcação semântica com atributos i18n
- **CSS3**: Estilização moderna com propriedades personalizadas CSS
- **JavaScript (ES6+)**: Motor de tradução e interações de UI
- **Font Awesome v6.2**: Biblioteca de ícones para elementos de UI
- **SVG**: Ilustrações personalizadas da marca

## 📦 Dependências

```html
<!-- Ícones Font Awesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Fundo Claro | `#f7f5f1` | Fundo principal |
| Fundo Escuro | `#0f1a1f` | Hero, rodapé, seções escuras |
| Dourado Accent | `#b28b4b` | CTAs primários, destaques |
| Accent Suave | `#e2d2b5` | Accents secundários, estados hover |
| Tinta Escura | `#132026` | Títulos, texto primário |
| Tinta Fosca | `#5b6770` | Texto do corpo, conteúdo secundário |
| Branco | `#ffffff` | Texto em fundos escuros |

## 🌟 Implementação da Alternância de Idiomas

### Como Funciona

Este projeto usa uma **abordagem multilíngue de página única** com dicionários de tradução em JavaScript:

```javascript
const translations = {
  en: { nav_about: "About", nav_enterprise: "Enterprise", ... },
  pt: { nav_about: "Sobre", nav_enterprise: "Empresas", ... },
  es: { nav_about: "Nosotros", nav_enterprise: "Empresas", ... }
};
```

Elementos HTML usam atributos `data-i18n`:
```html
<a href="#about" data-i18n="nav_about">About</a>
<input placeholder="Full name" data-i18n-placeholder="contact_name" />
```

### Por Que Esta Abordagem

| Recurso | Benefício |
|---------|-----------|
| ⚡ **Rápido e Simples** | Sem necessidade de servidor, sem ferramentas de build |
| 🔍 **Amigável para SEO** | HTML padrão renderiza página completa em inglês |
| 🔧 **Baixa Manutenção** | Dicionário centralizado em um arquivo |
| ✅ **Ótima UX** | Atualizações instantâneas + persistência com localStorage |
| 📦 **Zero Dependências** | Implementação em JavaScript vanilla puro |

### Vantagens Sobre Alternativas

- **vs. Arquivos HTML separados**: Sem código duplicado, mais fácil de manter
- **vs. i18n do lado do servidor**: Funciona offline, sem necessidade de backend
- **vs. bibliotecas i18n**: Sem inchaço, controle total, valor educacional

## 🚀 Começando

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/lucsantosdev/lp-hosting-company.git
```

2. Navegue até o projeto:
```bash
cd lp-hosting-company
```

3. Abra `index.html` no seu navegador:
```bash
# Clique duas vezes no index.html ou use um servidor local:

# Usando Python
python -m http.server 8000

# Usando Node.js (com http-server)
npx http-server
```

4. Visite `http://localhost:8000` no seu navegador

## 📁 Estrutura do Projeto

```
lp-hosting-company/
├── index.html          # Arquivo HTML principal
├── css/
│   └── styles.css      # Todo o estilo e design responsivo
├── js/
│   └── main.js         # Motor de tradução + interações de UI
├── img/
│   ├── favicon.svg     # Favicon da marca
│   ├── trust-*.svg     # Ilustrações da seção sobre
│   └── ...
└── README.md
```

## 🙏 Agradecimentos

- Inspirado por marcas de hospedagem empresarial e landing pages SaaS
- Paleta de cores projetada para posicionamento premium de marca tech
- Abordagem de tradução influenciada por melhores práticas modernas de i18n

## 🔮 Possíveis Melhorias Futuras

- [ ] Adicionar tratamento de formulários do lado do servidor (PHP/Node.js)
- [ ] Implementar rastreamento de analytics
- [ ] Adicionar seção de blog para marketing de conteúdo
- [ ] Criar painel de administração backend para gerenciamento de conteúdo
- [ ] Adicionar carrossel de depoimentos com citações reais de clientes
- [ ] Implementar alternância de modo escuro
- [ ] Adicionar carregamento lazy de imagens para performance
- [ ] Criar ferramenta interativa de calculadora de preços
- [ ] Adicionar integração de chat ao vivo
- [ ] Detecção de locale do navegador para idioma padrão

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - sinta-se livre para usá-lo como modelo para seus próprios projetos.

## 💛 Apoie

Se você achou este projeto útil ou aprendeu algo novo, considere apoiar meu trabalho:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/lucsantosdev)

## 💬 Conecte-se Comigo

Acompanhe minha jornada e outros projetos:

| Plataforma | Link |
|------------|------|
| 💼 **LinkedIn** | [@lucsantosdev](https://www.linkedin.com/in/lucsantosdev) |
| 🐙 **GitHub** | [@lucsantosdev](https://github.com/lucsantosdev) |
| 📧 **Email** | [lucsantosdev@gmail.com](mailto:lucsantosdev@gmail.com) |

---

🧠 Je 9:23-24
