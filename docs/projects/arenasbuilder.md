# Arenas Builder

Repositório: [github.com/ds-factory/arenasbuilder](https://github.com/ds-factory/arenasbuilder)

## Resumo

Biblioteca React para renderização e interação com mapas de assentos de arenas/venues. Projetada para sistemas de bilheteria, permite exibir layouts hierárquicos de venues com setores, segmentos, fileiras e assentos individuais. Construída em **React + TypeScript** com renderização SVG e gerenciamento de estado Redux.

## Funcionalidades

- **Renderização SVG**: Mapas de assentos vetoriais escaláveis e responsivos
- **Hierarquia Estrutural**: Organização em Setores → Segmentos → Fileiras → Assentos
- **Seleção Interativa**: Seleção simples e múltipla de assentos/setores
- **Sistema de Status**: Estados visuais (Disponível, Vendido, Bloqueado, Reservado)
- **Zoom e Navegação**: Controles de zoom com arrastar e soltar
- **Menus Contextuais**: Menus dinâmicos para setores e assentos
- **Histórico**: Sistema de undo/redo para ações do usuário
- **Customização Visual**: Cores personalizáveis por status e tema
- **Obstáculos**: Suporte a elementos físicos no layout (pilares, escadas, etc.)
- **Círculo Central**: Área central configurável (palco, campo, etc.)
- **Imagens de Fundo**: Sobreposição de plantas baixas ou imagens de referência

## Instalação

```bash
npm install @ds-factory/arenasbuilder
```

### Desenvolvimento Local

```bash
git clone https://github.com/ds-factory/ccsbilhetica-arenasbuilder.git
cd ccsbilhetica-arenasbuilder
npm install
npm run dev
```

## Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Redux Toolkit** - Gerenciamento de estado
- **Material-UI** - Componentes de interface
- **SVG** - Renderização vetorial
- **Vite** - Build tool e dev server

## Estrutura do Projeto

```
src/
├── app/
│   ├── store.ts                # Configuração do Redux store
│   ├── createAppSlice.ts       # Slice principal da aplicação
│   └── hooks.ts                # Hooks customizados do Redux
├── features/
│   ├── venues/                 # Funcionalidades principais
│   │   ├── arenaSlice.ts       # Estado da arena
│   │   ├── types.ts            # Definições TypeScript
│   │   ├── initialState.ts     # Estado inicial
│   │   ├── components/         # Componentes React
│   │   │   ├── Arena.tsx       # Componente principal
│   │   │   ├── ArenaControls.tsx # Controles da arena
│   │   │   └── menu/           # Menus contextuais
│   │   ├── hooks/              # Hooks especializados
│   │   └── reducers/           # Reducers específicos
│   ├── selection/              # Gerenciamento de seleção
│   │   └── selectionSlice.ts
│   └── history/                # Sistema de histórico
│       └── historySlice.ts
├── config/
│   └── theme.tsx               # Configuração do tema
├── App.tsx                     # Componente raiz
├── demo.tsx                    # Demonstração
└── main.css                    # Estilos globais
```

## Componentes Principais

### Arena
Componente principal que renderiza o mapa de assentos em SVG:

```typescript
<Arena
  structure={structure}           // Dados da arena
  onSeatClick={handleSeatClick}   // Callback de clique em assento
  onSectorClick={handleSectorClick} // Callback de clique em setor
  selections={selections}         // Estado de seleções
  showSeats={true}               // Exibir assentos individuais
  showNames={true}               // Exibir nomes dos elementos
  theme={theme}                  // Configuração de cores
/>
```

### ArenaControls
Wrapper com controles integrados de zoom, arrastar e menus contextuais:

```typescript
<ArenaControls
  structure={structure}
  onSeatClick={handleSeatClick}
  enableContextMenu={true}
  enableZoom={true}
  enableDrag={true}
/>
```

## Estrutura de Dados

### Hierarquia da Arena

```typescript
interface Structure {
  sectors: Sector[]              // Setores principais
  obstacles: Obstacle[]          // Obstáculos físicos
  baseRadius: number            // Raio base para layout circular
  showSeats: boolean           // Visibilidade dos assentos
  showNames: boolean           // Visibilidade dos nomes
  centralCircleEnabled: boolean // Círculo central ativo
  viewBox: ViewBox             // Área de visualização SVG
  images: ImageItem[]          // Imagens de fundo
  seatStatusColor: Record<SeatStatus, string> // Cores por status
}

interface Sector {
  id: string
  name: string
  color: string
  segments: Segment[]          // Segmentos do setor
  position: Position
  // ... outras propriedades
}

interface Segment {
  id: string
  name: string
  rows: Row[]                  // Fileiras do segmento
  // ... outras propriedades
}

interface Row {
  id: string
  name: string
  seats: Seat[]               // Assentos da fileira
  // ... outras propriedades
}

interface Seat {
  id: string
  name: string
  status: SeatStatus          // Status do assento
  position: Position
  // ... outras propriedades
}
```

### Status de Assentos

```typescript
enum SeatStatus {
  AVAILABLE = 'available',    // Disponível (Verde #1BA499)
  SOLD = 'sold',             // Vendido (Dourado #C0A069)
  BLOCKED = 'blocked',       // Bloqueado (Vermelho #EE7C7C)
  RESERVED = 'reserved'      // Reservado (Azul #4B6086)
}
```

## Integração com Sistemas de Bilheteria

O Arenas Builder integra-se com sistemas de bilheteria através de props e callbacks:

```typescript
// Carregamento de dados da arena
const structure = await loadArenaStructure(arenaId);

// Manipulação de seleções
const handleSeatClick = (seat: Seat) => {
  // Lógica de seleção/reserva
  updateSeatStatus(seat.id, 'reserved');
};

// Sincronização de status
const updateArenaStatus = (updates: SeatStatusUpdate[]) => {
  // Atualizar status em tempo real
};
```

## Workflows de Desenvolvimento

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Hooks Especializados

### useArenaControls
Gerencia controles de scroll, touch e interações gerais:

```typescript
const { scrollContainer, resetView } = useArenaControls();
```

### useZoom
Controla funcionalidades de zoom:

```typescript
const { zoom, setZoom, zoomIn, zoomOut } = useZoom();
```

### useDrag
Gerencia arrastar e soltar:

```typescript
const { isDragging, dragRef } = useDrag();
```

### useColorAndBorder
Utilitário para estilos visuais:

```typescript
const { getSeatColor, getBorderStyle } = useColorAndBorder(theme);
```

### useKey
Gerencia controles de teclado para edição de segmentos:

```typescript
const { handleKeyDown } = useKey();
```

## Controles de Teclado

A biblioteca oferece controles de teclado avançados para edição de segmentos quando um segmento está selecionado:

### Modificadores de Posição
- **Setas (↑↓←→)**: Move o segmento em passos de 10 unidades
- **Ctrl + Setas (←→)**: Move o segmento em passos de 0.1 unidade (movimento fino)
- **Setas (↑↓)**: Ajusta o espaçamento (gap) entre fileiras em passos de 5 unidades

### Modificadores de Tamanho
- **Shift + Setas (←→)**: Ajusta o tamanho do segmento em passos de 10 unidades
- **Ctrl + Shift + Setas (←→)**: Ajusta o tamanho do segmento em passos de 0.1 unidade (ajuste fino)

### Modificadores de Altura
- **Shift + Setas (↑↓)**: Ajusta a altura do segmento em passos de 5 unidades
- **Ctrl + Shift + Setas (↑↓)**: Ajusta a altura do segmento em passos de 0.1 unidade (ajuste fino)

### Modificadores de Fileiras
- **Ctrl + Seta ↑**: Adiciona uma fileira ao segmento (máximo 20 fileiras)
- **Ctrl + Seta ↓**: Remove uma fileira do segmento (mínimo 1 fileira)

### Ações de Edição
- **Delete**: Remove o segmento selecionado

### Exemplo de Uso
```typescript
// Implementação em um componente
const MyArenaEditor = () => {
  const { handleKeyDown } = useKey();
  
  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <ArenaControls 
        structure={structure}
        // ... outras props
      />
    </div>
  );
};
```

## Gerenciamento de Estado

### Redux Store
A biblioteca utiliza Redux Toolkit para gerenciamento de estado:

```typescript
// Estado da arena
const arenaState = useSelector(selectArenaState);

// Seleções ativas
const selections = useSelector(selectSelections);

// Histórico de ações
const history = useSelector(selectHistory);
```

### Actions Principais
```typescript
// Atualizar estrutura da arena
dispatch(arenaActions.updateStructure(newStructure));

// Selecionar assentos
dispatch(selectionActions.selectSeat(seatId));

// Adicionar ao histórico
dispatch(historyActions.addAction(action));
```

## Publicação

Esta biblioteca é publicada como um pacote npm no GitHub Packages através de GitHub Actions:

```bash
# Publicação automática via GitHub Actions
# Disparada automaticamente quando uma release é criada no repositório
```

### Configuração do Package

```json
{
  "name": "@ds-factory/arenasbuilder",
  "version": "6.0.5",
  "description": "Biblioteca para desenvolvimento de arenas",
  "main": "dist/arenabuilder.cjs.js",
  "module": "dist/arenabuilder.es.js",
  "types": "dist/types/index.d.ts"
}
```

