# Blackbird React
This repo contains the FrontEnd React Source code for [Blackbird](https://github.com/p1ngul1n0/blackbird).

## Setup

### Clone repository
```
git clone https://github.com/p1ngul1n0/blackbird-react
```
### Create and add the following to .env.local
```
cd blackbird-react
touch .env.local
```
REACT_APP_API_BASE=


### Install React-Scripts
#### requirenments:
#### node version: >=20
#### pnpm version: >=8
```
pnpm install
```

#### Start the project
```
pnpm start
```

#### Test
To test the React JS FrontEnd along with Blackbird tool, follow the steps below:

1. Build code
```
pnpm run build
```

2. Copy "dist" folder content to "templates" folder in blackbird tool

3. Start blackbird WebServer
```
python blackbird.py --web
```
