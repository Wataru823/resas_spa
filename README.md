## 都道府県別の総人口推移グラフ

https://population-by-prefecture-wataru823.netlify.app/

<img width="746" alt="image" src="https://user-images.githubusercontent.com/74819028/233226041-4b0034bf-c9ed-4ecd-b8a0-dd57c7d7fa6e.png">

### 環境

- TypeScript + React
- Vite
- yarn

### 使用したライブラリ

グラフ

- highcharts
- highcharts-react-official

CSS

- A Modern CSS Reset: リセット CSS に使用, 必要最低限のリセット CSS, ファイルサイズが小さいのが特徴
- styled-components: css-in-js

テスト

- playwright

### 使用した RESAS API キーの設定

frontend ディレクトリ直下に.env.local ファイルをおく

```
VITE_RESAS_API_KEY={取得したAPIキー}
```

### 実行方法

```
cd frontend
yarn
yarn dev
```

### リンターとフォーマッター

vscode の設定で自動にできる。
手動では以下の方法でできる。

ESLint の方法

```
yarn lint
```

Prettier の方法

```
yarn format
```

### テスト方法

frontendディレクトリ直下で以下のコマンドを実行

```
npx playwright test
```

### 参考

[りあクト！ TypeScript で始めるつらくない React 開発 第 4 版【① 言語・環境編】](https://booth.pm/ja/items/2368045)
[【テスト自動化】VScode で Playwright を使って - ヴァンプ](https://www.vamp.jp/archives/834)
