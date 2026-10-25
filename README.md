# 📦 zeyna-shared — Общие модули БД и константы «Дачи Зейна»

Единый пакет всех 32 моделей Mongoose (`UserProfile`, `GuildSettings`, `Season`, `BattlePass`, `Article`, `StaffDossier`, `Award*`, `Recruitment*` и др.) и констант предметов (`ITEMS`, `LOOT_TABLES`) для **Discord-бота (TypeScript, PebbleHost)** и **Веб-сайта (JavaScript, Render)**.

Пакет собирается автоматически в два формата одновременно:
* **CommonJS (`dist/index.js` + `dist/index.d.ts`)** — для Discord-бота на TypeScript;
* **ES Modules (`dist/index.mjs`)** — для веб-сайта на JavaScript (`import ... from 'zeyna-shared'`).

---

## 🚀 Шаг 1. Как залить этот пакет на GitHub

1. Создай на GitHub новый репозиторий с названием **`zeyna-shared`** (рекомендуется **Public**, чтобы Render и PebbleHost скачивали его без настройки SSH-ключей; в этом пакете нет никаких паролей, токенов или секретов — только схемы БД).
2. Распакуй этот архив в отдельную папку на своём ПК, открой в ней терминал и выполни:
   ```bash
   npm install
   npm run build
   git init
   git add .
   git commit -m "Initial shared models and constants"
   git branch -M main
   git remote add origin https://github.com/ТВОЙ_НИК/zeyna-shared.git
   git push -u origin main
   ```

---

## 🤖 Шаг 2. Как подключить в Discord-боте (TypeScript)

1. В папке бота выполни:
   ```bash
   npm install github:ТВОЙ_НИК/zeyna-shared#main
   ```
2. Теперь в любом файле бота ты можешь импортировать модели и предметы напрямую с полной поддержкой типов TypeScript:
   ```ts
   import { UserProfile, GuildSettings, Season, ITEMS, LOOT_TABLES } from 'zeyna-shared';
   ```
   *(Либо оставить в папке `src/database/models/UserProfile.ts` одну строчку реэкспорта: `export { UserProfile as default } from 'zeyna-shared';`, чтобы даже не менять пути импортов в 50 файлах бота!).*

---

## 🌐 Шаг 3. Как подключить на Веб-сайте (JavaScript / Render)

1. В папке сайта выполни:
   ```bash
   npm install github:ТВОЙ_НИК/zeyna-shared#main
   ```
2. В файлах сайта импортируй нужные модели:
   ```js
   import { UserProfile, Article, BssValueItem, StaffDossier, ITEMS } from 'zeyna-shared';
   ```

---

## 🔄 Как обновлять модели в будущем

Когда тебе нужно добавить новое поле в `UserProfile` или новый предмет в `ITEMS`:
1. Меняешь файл в папке `zeyna-shared/src/...`
2. Выполняешь `npm run build` и пушишь на GitHub (`git add . && git commit -m "update" && git push`).
3. В боте и на сайте выполняешь `npm update zeyna-shared`.
