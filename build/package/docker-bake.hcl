variable "TAG" {
    default = "latest"
}

variable "REPO" {
    default = "larssonoliver/blg"
}

group "default" {
    targets = ["blg"]
}

target "blg" {
    context = "."
    dockerfile = "build/package/Dockerfile.buildx"
    platforms = [
        "linux/amd64",
        "linux/arm64",
    ]
    tags = [
        "${REPO}:latest",
        "${REPO}:${TAG}",
    ]
}

