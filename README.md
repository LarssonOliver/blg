# blg - My personal blog platform

<div align="center">

  ![GitHub License](https://img.shields.io/github/license/larssonoliver/blg)
  ![GitHub branch check runs](https://img.shields.io/github/check-runs/larssonoliver/blg/main?label=build)
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
- [GitHub Actions](https://docs.github.com/en/actions) for CI/CD
    - Running on self-hosted runners using [GHA Runner Scale Sets](https://github.com/actions/actions-runner-controller).
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
docker build -t larssonoliver/larssonoliver.com .
```

Build multi-arch image for release:

```bash
# Builds image tagged both "latest" and the tag based on "git describe"
TAG="$(git describe --tags --always --dirty)" docker buildx bake
```

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

