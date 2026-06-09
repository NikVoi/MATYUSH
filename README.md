# Matyush

Сайт бренда одежды: Next.js 15, React 19, Tailwind CSS 4, next-intl (беларуская / русская).

## Структура

```
src/
  app/
    [locale]/                 — страницы с префиксом /be, /ru
      category/[slug]/        — карточка товара (+ loading.tsx — skeleton)
      lookbook/               — заготовка под блог (Strapi)
    layout.tsx                — корневой layout
  entities/product/           — каталог
    products/                 — один файл = один товар (BE тексты)
    locale/ru-overrides.ts    — русские тексты товаров
  i18n/                       — routing, navigation, request
  shared/                     — UI, api/strapi.ts, config/
  widgets/                    — секции страниц
messages/
  be.json, ru.json            — UI-переводы (не тексты товаров)
public/catalog/               — изображения (не в JS-бандле)
```

## Локали (next-intl)

| Код  | URL       | По умолчанию |
| ---- | --------- | ------------ |
| `be` | `/be/...` | да           |
| `ru` | `/ru/...` |              |

- Конфиг: `src/i18n/routing.ts`
- Ссылки: только `@/i18n/navigation` (`Link`, `useRouter`, `redirect`), не `next/link`
- Новая локаль: добавить код в `routing.locales`, файл `messages/<код>.json`, пересобрать

### Ключи в `messages/`

Все подписи интерфейса — в `messages/be.json` и `messages/ru.json` (одинаковая структура ключей).

| Namespace           | Примеры ключей                            | Где используется            |
| ------------------- | ----------------------------------------- | --------------------------- |
| `meta`              | `title`, `description`                    | `<title>`, SEO              |
| `nav`               | `work`, `reviews`, `about`                | шапка, футер                |
| `locale`            | `be`, `ru`                                | переключатель языка         |
| `sections`          | `work`, `reviews`, `about`                | заголовки секций на главной |
| `categories`        | `view`                                    | кнопка на карточке          |
| `product`           | `order`, `loading`, `tabs.*`, `gallery.*` | страница товара             |
| `about`             | `lead`, `p1`…`p3`, `quote`                | блок «Пра нас»              |
| `footer`            | `company`, `copyright`                    | подвал                      |
| `lookbook`          | `title`, `comingSoon`                     | `/lookbook`                 |
| `notFound`, `error` | …                                         | 404, ошибки                 |

Добавление ключа:

1. Вписать в **оба** `messages/be.json` и `messages/ru.json`
2. В компоненте: `const t = useTranslations('product')` → `t('order')`
3. На сервере: `getTranslations('product')` → `t('order')`

Тексты **товаров** (название, fabric, care) — **не** в `messages/`, а в `entities/product/` (см. ниже).

## Добавить новый товар

### 1. Файл товара (беларуская — основа)

Скопируйте `src/entities/product/products/_template.ts` → `my-product.ts`:

```ts
import { catalogImage } from "../lib/catalog-image";
import { defineProduct } from "../lib/define-product";

export const myProduct = defineProduct({
  id: "7",
  slug: "my-product",
  title: "Назва",
  tagline: "Слоган",
  previewImage: catalogImage("collections/my-product.jpg"),
  images: [catalogImage("details/my-product/1.jpg")],
  specifications: { color: "…", material: "…" },
  details: "…",
  fabric: "…",
  care: "…",
});
```

### 2. Изображения

- Превью: `public/catalog/collections/my-product.jpg`
- Галерея: `public/catalog/details/my-product/1.jpg`, `2.jpg`, …

Пути в коде: `catalogImage('collections/...')` → URL `/catalog/collections/...`

### 3. Регистрация в каталоге

`src/entities/product/products/index.ts`:

```ts
import { myProduct } from './my-product'
export const products = [sumka, ..., myProduct]
```

### 4. Типы

`src/entities/product/types.ts` — добавить `id` в `ProductId`, `slug` в `ProductSlug`.

### 5. Русский перевод

`src/entities/product/locale/ru-overrides.ts` — блок для нового `slug`:

```ts
'my-product': {
  title: '…',
  tagline: '…',
  details: '…',
  fabric: '…',
  care: '…',
  specifications: { color: '…', material: '…' },
},
```

Объём текстов лучше держать **одинаковым** с беларуской версией (те же абзацы).

### 6. Проверка

```bash
yarn dev
# /be/category/my-product
# /ru/category/my-product
```

Старые URL `/category/1` редиректят на slug по `id`.

При переходе с главной показывается **skeleton** (`category/[slug]/loading.tsx`).

## Lookbook / Strapi (позже)

- Страница-заглушка: `/be/lookbook`, `/ru/lookbook`
- API-заготовка: `src/shared/api/strapi.ts`
- Картинки Strapi: `next.config.ts` → `images.remotePatterns` (localhost:1337)

`.env.local`:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

Когда Strapi будет готов — раскомментировать `fetchLookbookPosts()` и сверстать список постов на `lookbook/page.tsx`.

## Бренд

- Акцент: **#c74375** (Pantone Fuchsia Rose) — `src/shared/config/brand.ts`, CSS `--main`
- Шрифты: **Archivo Black** (заголовки), **Manrope** (текст)

## Скрипты

| Команда      | Описание          |
| ------------ | ----------------- |
| `yarn dev`   | разработка        |
| `yarn build` | production-сборка |
| `yarn lint`  | ESLint            |

## Изображения (JPG)

Next.js отдаёт AVIF/WebP автоматически. Исходники: hero ~1920px, карточки ~1200px, JPEG/WebP quality 80–85. Для hero на телефоне желателен отдельный вертикальный кроп `main-mobile.jpg`.
