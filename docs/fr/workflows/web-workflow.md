---
title: Flux de travail Web
description: "Cette page présente un cas d'utilisation de Codemagic pour l'exportation d'un projet Godot pour le Web"
---

# Flux de travail Web {#web-workflow}

<br>

Cette page présente un cas d'utilisation de Codemagic pour l'exportation d'un projet Godot pour le Web. Nous n'aborderons ni les règles d'écriture, ni la composition ou encore le fonctionnement d'un fichier `codemagic.yaml`.

- Vous pouvez sauter le tutoriel et récupérer le fichier de configuration dans [Récapitulatif](#recapitulatif)
- Apprenez en plus sur ce qu'est un fichier `codemagic.yaml`avec [Utilisation d'un fichier codemagic.yaml](https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/)
- Apprennez à configurer votre projet Godot et votre dépôt dans [Vue d'ensemble du processus](../process-overview.md).

<img src="../../images/workflows/godot-codemagic-web-workflow.png" alt="Flux de travail pour l'exportation d'un projet Godot vers le Web avec Codemagic." style="border-radius: 16px;">

Image par Codemagic, utilisée sous licence [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/). Voir [galerie](https://codemagic.io/gallery/)


## Exigences {#requirements}

- Un éditeur de texte
- Le fichier de configuration des flux de travail. (Voir [Configuration des flux de travail](./workflow-configuration.md))

Comme expliqué dans [Configuration du projet](../process-overview.md#project-configuration), **vous devez configurer votre projet pour l'exportation comme si vous souhaitiez faire une exportation sur votre machine locale**.
- Consultez le [Guide d'exportation Web](https://docs.godotengine.org/fr/stable/tutorials/export/exporting_for_web.html) afin de configurer votre projet Godot pour l'exportation vers le Web.


## Configuration

Nous devons créer un nouveau flux de travail dans lequel nous définirons des variables qui lui sont propres. Ajoutez le code suivant à votre fichier `codemagic.yaml`, juste après la section `definitions` :  
:

```yaml
workflows:
  flux-godot-web:
    name: Exportation vers le Web
    max_build_duration: 120
    instance_type: mac_mini_m2
    working_directory: /Users/builder/Downloads
    
    environment:
      vars:
        <<: *variables_godot
        FICHIER_DE_SORTIE: index.html
        NOM_DU_PREREGLAGE: Web
```

Assurez-vous que votre fichier ressemble mainten/ant à ceci :

```yaml
definitions: ...

workflows: # [!code ++]
  flux-godot-web: ... # [!code ++]
```

<br>

Vous souvenez-vous de notre [fichier de configuration de flux](./workflow-configuration.md#configuration-de-base) ? Nous utilisons les opérateurs `<<` et `*` pour réutiliser ses sections.  

- Pour en savoir plus sur les sections réutilisables dans un fichier `codemagic.yaml` consultez [Réutilisation de sections](https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/#reusing-sections)
- Consultez l'ensemble des variables réutilisées dans [Configuration de base](./workflow-configuration.md#configuration-de-base)

Voici une description des variables que nous avons définies :

| Variable           | Description
| ------------------ | --------------------------------------------------------------------------- |
| FICHIER_DE_SORTIE  | Le nom du fichier exporté. Format : `<NOM_PROJET>.<EXTENSION>`. L'extension du fichier de sortie doit correspondre à celle utilisée par le processus d'exportation de Godot. Voir [Exporter à partir de la ligne de commande](https://docs.godotengine.org/fr/latest/tutorials/export/exporting_projects.html#exporting-from-the-command-line) |
| NOM_DU_PREREGLAGE | Le nom du préréglage d'exportation qui sera utilisé pour exporter votre projet. |

- Apprenez-en plus sur les variables d'environnement dans un fichier `codemagic.yaml` avec [Configuration de variables d'environnement](https://docs.codemagic.io/yaml-basic-configuration/configuring-environment-variables/)


## Exportation du projet {#export-project}

Nous devons mainten/ant compléter notre fichier de configuration pour exporter votre projet. Une simple exportation vers le Web ne nécessite aucune modification du fichier de configuration de l'éditeur de Godot. Nous réutiliserons les sections de script du [fichier de configuration de flux](./workflow-configuration.md)

- Pour en savoir plus sur les sections réutilisables dans un fichier `codemagic.yaml` consultez [Réutilisation de sections](https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/#reusing-sections)
- Consultez l'ensemble des variables réutilisées dans [Configuration de base](./workflow-configuration.md#configuration-de-base)

Ajoutez le code suivant à votre flux `godot-web-workflow` :

```yaml
scripts:
  - *installation_godot
  - *installation_modeles_exportation
  - *exportation_projet
  - *collecte_fichiers

artifacts:
  - *recuperation_exportation
```

Assurez-vous alors que votre flux ressemble mainten/ant à ceci :

```yaml
flux-godot-web:
  ...
  environment: ...
  scripts: ... # [!code ++]
  artifacts: ... # [!code ++]
```

Et voilà ! il ne nous reste plus qu'à lancer une nouvelle compilation(`build`) pour exporter votre projet. Vous pouvez pour ce faire, utiliser l'interface de Codemagic, ou des évènements affectant votre dépôt tels que les push.

- Consultez [Exécution automatique](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/) pour automatiser l'exécution de votre configuration Codemagic.
- Consultez également [Notifications d'exécution](https://docs.codemagic.io/yaml-notification/email/) pour obtenir une notification vous informant du résultat de l'exécution de votre configuration Codemagic.


## Récapitulatif {#overview}

Voici un résumé de ce que nous avons couvert sur cette page :
- Exportation d'un projet Godot pour le Web en utilisant une machine de compilation de Codemagic

**Tableau de téléchargement**

| Fichier   | Contenu        | Tutoriels                        |
| --------- | -------------- | -------------------------------- |
| <a href="/codemagic-godot-pipeline/templates/fr/web/web-workflow.yaml" download="codemagic.yaml">Télécharger</a> | Configuration d'une exportation vers le Web | [Aller au tutoriel](#web-workflow) |

:::warning Attention !!!
Pour utiliser efficacement ce script, consultez son [tutoriel](#web-workflow).  
Les scripts de la série de tutoriels sont généralisés et s'adapteront à la pluspart des cas d'utilisation. Néanmoins, des ajustements spécifiques à votre projet peuvent être nécessaires.
:::

Ressources optionnelles pour vous aider à affiner votre configuration :
- [Mise en cache](https://docs.codemagic.io/knowledge-codemagic/caching/)
- [Exécution automatique](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/)
- [Notifications d'exécution](https://docs.codemagic.io/yaml-notification/email/)
- [Déploiements](https://docs.codemagic.io/yaml-publishing/google-play/)
- [Utilisation de modèles d'exportation personnalisés](./using-custom-export-templates.md)

<img src="/images/builds/web-build.png" alt="Résultat de l'exportation d'un projet Godot vers le Web à l'aide de Codemagic." style="border-radius: 16px;">


## Obtenir de l'aide et de l'assistance {#getting-help-and-support}

Si vous avez une question technique ou si vous avez besoin d'aide pour résoudre un problème particulier, vous pouvez obtenir de l'aide dans la [discussion de communauté GitHub](https://github.com/sabinayo/codemagic-godot-pipeline/discussions).
