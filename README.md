# juce-tutorial-ja

このサイトは、[JUCE Tutorial](https://juce.com/learn/tutorials/) の非公式翻訳で、オープンソースで誰でも編集できます。

現在、翻訳途中です。[翻訳状況](https://github.com/m1m0zzz/juce-tutorial-ja#status) をご確認ください。

翻訳間違い、不具合などは [GitHub Issues](https://github.com/m1m0zzz/juce-tutorial-ja/issues) までお願いします。

## Status

ルール:

- 🤖 ... 機械翻訳 (スクリプト)
- ✅ ... 機械翻訳と正常なリンク
- 💯 ... 正しい日本語と正しいフォーマット

## Getting Started

| タイトル | ステータス |
| --- | :---: |
| Projucerを始める | 💯 |
| Projucerプロジェクトを管理する | ✅ |
| 基本的なオーディオプラグインの作成 パート1 | ✅ |
| 基本的なオーディオプラグインの作成 パート2 | ✅ |
| アプリケーションに適したProjucerテンプレートの選択 | ✅ |

## Audio

all: 🤖

## MIDI

all: 🤖

## Plugins

| タイトル | ステータス |
| --- | :---: |
| プラグインパラメータの追加 | ✅ |
| プラグイン状態の保存と読み込み | ✅ |
| プラグインに適切なバスレイアウトを設定する | 🤖 |
| カスケードプラグインエフェクト | 🤖 |
| プラグインの例 | ✅ |

## DSP

| タイトル | ステータス |
| --- | :---: |
| DSP入門 | ✅ |
| ウェーブシェイピングとコンボリューションで歪みを加える | 🤖 |
| ディレイラインを使ったストリングモデルの作成 |  |
| SIMDRegisterクラスを使用した最適化 | 🤖 |
| 高速フーリエ変換 | 🤖 |
| 信号の周波数をリアルタイムで可視化する | 🤖 |

## Graphics

all: 🤖

## Interface Design

all: 🤖

## Mobile

all: 🤖

## Utility Classes

all: 🤖

## Installation

```bash
npm i 
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Github Actions
[File .github/workflows/deploy.yml](.github/workflows/deploy.yml)
