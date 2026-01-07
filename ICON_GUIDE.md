# Icon Addition Guide

This guide lists all the specific icons that need to be added to `src/assets/img/icons/` to properly display tool icons in the portfolio.

## Icons Needed

### Databases
- **postgresql.svg** - PostgreSQL elephant logo (blue elephant with white outline)
- **mysql.svg** - MySQL dolphin logo
- **dynamodb.svg** - DynamoDB logo

### Developer Tools
- **docker.svg** - Docker whale logo (light blue whale with containers)
- **aws.svg** - AWS logo (orange arrow)
- **kubernetes.svg** - Kubernetes logo (steering wheel/compass)
- **jenkins.svg** - Jenkins logo (butler icon)
- **vscode.svg** - Visual Studio Code logo
- **jira.svg** - Jira logo (red/purple gradient)
- **php.svg** - PHP logo (blue elephant)
- **git.svg** - Git logo (orange branch symbol, different from GitHub)
- **grafana.svg** - Grafana logo (light blue swirl)

### Data Visualization & Analysis
- **r.svg** - R language logo (blue R)

### Methodologies
- **agile.svg** - Agile/Scrum methodology icon

## Current Status

Currently using fallback icons:
- PostgreSQL → SQL icon (temporary)
- MySQL → SQL icon (temporary)
- DynamoDB → MongoDB icon (temporary)
- Docker → Linux icon (temporary)
- AWS → Linux icon (temporary)
- Kubernetes → Linux icon (temporary)
- Jenkins → JavaScript icon (temporary)
- VS Code → JavaScript icon (temporary)
- Jira → JavaScript icon (temporary)
- PHP → JavaScript icon (temporary)
- Git → GitHub icon (temporary)
- Grafana → Tableau icon (temporary)
- R → Python icon (temporary)
- Agile → JavaScript icon (temporary)

## Icon Sources

You can find official icons at:
- **PostgreSQL**: https://www.postgresql.org/about/press/media/
- **Docker**: https://www.docker.com/company/newsroom/media-resources
- **AWS**: https://aws.amazon.com/legal/trademark-guidelines/
- **Kubernetes**: https://github.com/kubernetes/kubernetes/tree/master/logo
- **Jenkins**: https://www.jenkins.io/artwork/
- **VS Code**: https://code.visualstudio.com/brand
- **Jira**: https://www.atlassian.com/company/news/press-kit
- **PHP**: https://www.php.net/download-logos.php
- **Git**: https://git-scm.com/downloads/logos
- **Grafana**: https://grafana.com/media/
- **MySQL**: https://www.mysql.com/about/legal/logos.html
- **DynamoDB**: AWS brand guidelines

## Format

All icons should be in SVG format for best quality and scalability. Place them in `src/assets/img/icons/` directory.

After adding icons, update `src/services/icons.js` to import and use them instead of the fallback icons.

