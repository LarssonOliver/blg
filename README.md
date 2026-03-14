# blg - My personal blog platform

<div align="center">

  ![GitHub License](https://img.shields.io/github/license/larssonoliver/blg)
  [![status-badge](https://woodpecker.larssonoliver.com/api/badges/5/status.svg)](https://woodpecker.larssonoliver.com/repos/5)
  ![GitHub package.json version](https://img.shields.io/github/package-json/v/larssonoliver/blg)

</div>

This blog platform was built by me for my needs. It's a little rough
around the edges, and I don't expect anyone else to try to use it. But it
gives me great freedom in customizing it, and it was fun to build.

The blog content, such as posts, are not hosted here. You may find the
deployed site over at
[https://blog.larssonoliver.com](https://blog.larssonoliver.com). Hope to
see you there!

## 🛠 Tech Stack

- [Nuxt 3](https://nuxt.com/)
- [Node.js](https://nodejs.org/)
- [Woodpecker CI](https://woodpecker-ci.org/) for CI/CD.
    - Running self-hosted runners.
- Deployed via self-hosted [Kubernetes](https://kubernetes.io/)
    - [Argo CD](https://argo-cd.readthedocs.io) for GitOps.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Compiles and hot-reloads for development
npm run dev
```

See [package.json](./package.json) for more scripts.

## 🐳 Building

Building local image:

```bash
# Build image
docker build -t git.larssonoliver.com/oliver/blg .
```

## 🚀 Releasing

Release by pushing a new version tag. Easiest done using:

```bash
npm version <major|minor|patch>

# Followed by
git push --follow-tags
```

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

