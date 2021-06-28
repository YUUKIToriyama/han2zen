# han2zen

半角カタカナを全角カタカナに変換するモジュール
WASM module which converts halfwidth katakana to fullwidth katakana

## Installation

```bash
npm install @toriyama/han2zen
```

## Usage

```typescript
import { han2zen } from "@toriyama/han2zen";
console.log(han2zen("ｱﾘｶﾞﾄｳ")); // アリカ゛トウ
```

or

```typescript
import * as wasm from "@toriyama/han2zen";
console.log(wasm.han2zen("ｺﾝﾊﾞﾝﾊ")); // コンハ゛ンハ
```

## Development

```bash
# Folk this repo
git clone https://github.com/YUUKIToriyama/han2zen.git
cd han2zen
# If you haven't installed wasm-pack yet, please install it
cargo install wasm-pack
# Build with wasm-pack
wasm-pack build
# Run a demo
cd web
npm install
npm start
```
