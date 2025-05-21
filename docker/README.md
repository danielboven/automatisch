# LinkedIn-Enabled Automatisch

This version of [Automatisch](https://github.com/automatisch/automatisch) includes a custom LinkedIn app integration.

## Getting Started

1. **Clone the forked repository:**

```bash
git clone https://github.com/danielboven/automatisch.git
cd automatisch
````

2. **Check out the custom branch:**

```bash
git checkout linkedin-app
```

3. **Build the Docker image:**

```bash
docker build -t automatisch:linkedin-app -f docker/Dockerfile .
```

4. **Use the image in your Docker Compose file:**

Instead of the `build` section from the Automatisch docs, use the following in your `docker-compose.yml`:

```yaml
image: automatisch:linkedin-app
```

This will ensure Docker uses your custom LinkedIn-enabled version of Automatisch.

