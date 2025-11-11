# News Portal 

A news publishing platform utilizing tech inductry acticles. The application build using Next.js advance features, such as internationalization, parralel routes, intercepting routes and so on.

---

## Projet structure
```
└── root/
    ├── data/
    │   ├── data.js
    │   │   └── data.json
    ├── components/
    │   ├── Article.jsx
    │   ├── ArticleDetails.jsx
    │   ├── ArticleList.jsx
    │   ├── DetailsPageSidebar.jsx
    │   ├── FeaturedStory.jsx
    │   ├── Footer.jsx
    ├── Header.jsx
    │   ├── Logo.jsx
    │   ├── MarqueeBanner.jsx
    │   ├── Modal.jsx
    │   └── skeletons/
    │   │   ├── ArticleCardSkeleton.jsx
    │   │   ├── ArticleDetailsSkeleton.jsx
    │   │   ├── ArticlePageSidebarSkeleton.jsx
    │   │   └── FeaturedStorySkeleton.jsx
    ├── app/
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── [lang]/
    │   │   │   ├── error.js
    │   │   │   ├── layout.js
    │   │   │   ├── not-found.js
    │   │   │   ├── page.js
    │   │   │   ├── dictionaries/
    │   │   │   │   ├── bn.json
    │   │   │   │   ├── dictionary.js
    │   │   │   │   └── en.json
    │   │   │   ├── @articleModal/
    │   │   │   ├── default.js
    │   │   │   │   └── (..)[lang]/
    │   │   │   │       └── news/
    │   │   │   │           └── [id]/
    │   │   │   │               └── page.js
    │   │   │   └── news/
    │   │   │       └── [id]/
    │   │   │           ├── not-found.js
    │   │   │           └── page.js
    │   │   └── api/
    │   │       └── news/
    │   │           ├── route.js
    │   │           └── [id]/
    │   │               └── route.js
    ├── utils/
    │   ├── apiError.js
    │   ├── apiResponse.js
    │   ├── extractImage.js
    │   ├── formateDate.js
    │   └── trancate.js
    ├── public/
    │   ├── logo.png
    │   ├── images/
    │   │   └── 8400a044-9788-42d9-abe8-6c3c865d36db.png
    │   ├── avatar/
    │   │   ├── avatar-1.png
    │   │   └── avatar-2.png
    │   └── articles/
    │       ├── article-1.jpg
    │       ├── article-2.jpg
    │       ├── article-3.jpg
    │       └── article-4.jpg
    ├── node_modules
    ├── .eslintrc.json
    ├── .gitignore
    ├── jsconfig.json
    ├── middleware.js
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    ├── tailwind.config.js
```

## Key features

- Explore all articles on the home page
- On Clicking the article show modal with the desire article information
- If user manualy enter article URL render the article in a saperate page instead of modal.
- Explore a modern eye safly UI with no color conflict

## Packages Installed

| Packages     | Version | Usage                         |
| ------------ | ------- | ----------------------------- |
| Next JS      | ^14.2.33| For Full Stack Development    |
| React JS     | ^18.0.0 | Using latest version of React |
| Tailwind CSS | ^3.0.0  | Adding faster styling         |


## Installation

First, clone the repository by:

```bash
git clone https://github.com/crosbow/news-portal.git
```

Second, Install the packages:

```bash
npm install
```

Finally, run the development server:

```bash
npm run dev
```
