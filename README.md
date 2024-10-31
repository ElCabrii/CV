# CV Repository

This repository contains the source code and assets for my CV Generator website.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction

Welcome to my CV repository. This project aims at providing a simple and clean website to generate your CV based on your infos and on the projects you've worked on.
I've focused on having a backend as clean, practical and functional as possible, while keeping the frontend as simple and responsive as possible.
I havent done as much as I wanted to do, but I didnt have enough time to do so. 
I'm also aware of security issues, but they didnt seem to be considered in the project's requirements, so I didnt focus on them.

## Features
- Responsive design
- Clean layout
- Register the projects you've worked on and join existing projects
- Generate a CV based on the information you've provided
- The CV can be edited and customized at any time

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ElCabrii/CV.git
    ```
2. Install Docker
    - For Windows: [Docker Desktop](https://docs.docker.com/docker-for-windows/install/)
    - For Mac: [Docker Desktop](https://docs.docker.com/docker-for-mac/install/)
    - For Linux: [Docker Engine](https://docs.docker.com/engine/install/)
    
3. Run the following command to start the project:

    ```bash
    cd Docker
    docker-compose --env-file .env up --build
    ```
    Open a new terminal and run the following command to remove the default configuration file:

    ```bash
    cd Docker
    docker-compose exec webserver rm /etc/nginx/conf.d/default.conf
    docker-compose restart webserver
    ```


## Usage

Open your web browser and navigate to `http://localhost/` to view the CV website.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

