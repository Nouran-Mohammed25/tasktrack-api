# TaskTrack API
A lightweight Task Management REST API containerized with Docker.
It demonstrates how to package a Node.js application into a portable,
reproducible environment that runs identically on any machine.

## Tech Stack
- Node.js 20
- Express
- Docker (Multi-stage build)

## How to Build and Run with Docker

### 1. Build the image:
```bash
docker build --load -t tasktrack-api .
Status: Docker containerization complete and tested.