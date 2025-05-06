---
title: iOS workflow
description: "This page presents a use case for using Codemagic to export a Godot project for iOS"
---

# iOS workflow

<br>

This page presents a use case for using Codemagic to export a Godot project for iOS. We will not cover the syntax, structure, or functionality of a `codemagic.yaml` file.

- You can skip the tutorial and grab the yaml files in [Overview](#overview)
- To learn how `codemagic.yaml` files work, see [Creating codemagic.yaml](https://docs.codemagic.io/partials/quickstart/create-yaml-intro/).
- To better understand what we'll do here, take a look at [Workflow Configuration](./workflow-configuration.md) if its not already done.
- To learn how to configure your Godot project and repository, see [Process Overview](../process-overview.md).

<img src="../images/workflows/godot-codemagic-ios-workflow.png" alt="Workflow for exporting a Godot project to iOS with Codemagic." style="border-radius: 16px;">

Image by Codemagic, used under [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/) license. See [gallery](https://codemagic.io/gallery/)


## Requirements

- A text editor
- Workflow Configuration file. (See [Workflow Configuration](./workflow-configuration.md))

Apple tools such as [XCode](https://developer.apple.com/xcode/) required for Godot iOS export are pre-installed on the Codemagic machine we will use(Apple Silicon M2 Mac mini).

- You can find the full list of tools and software installed on Codemagic machines in [Codemagic Integrations](https://codemagic.io/integrations/).
- Also, check the list of other tools installed on the machine we will be using throughout the tutorials in [Other pre-installed tools on macOS machines](https://docs.codemagic.io/specs-macos/xcode-16-2/#other-pre-installed-tools).

As explained in [Project Configuration](../process-overview.md#project-configuration), you should configure your project for export as if you were exporting it on your local machine.

- Learn more about how to export a Godot project to iOS with [Exporting for iOS](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_ios.html).


## Configuration

We need to create a new workflow in which we will define its own specific variables. Add the following code to your `codemagic.yaml` file, right after the `definitions` section:

```yaml
workflows:
  godot-ios-workflow:
    name: iOS Export
    max_build_duration: 120
    instance_type: mac_mini_m2
    working_directory: /Users/builder/Downloads
    
    environment:
      xcode: latest
      vars:
        <<: *godot_variables
        OUTPUT_FILE: test.ipa
        EXPORT_PRESET: iOS
```

Make sure your workflow now looks like this:

```yaml
definitions: ...

workflows: # [!code ++]
  godot-ios-workflow: ... # [!code ++]
```

<br>

Do you remember the [Workflow Configuration](./workflow-configuration.md#minimal-configuration) file ?  
We use the `<<` and `*` operators to reuses its sections.  
- Learn more about reusable sections in a `codemagic.yaml` file with [Reusing sections](https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/#reusing-sections)
- For more details on the reused variables, see [Minimal Configuration](./workflow-configuration.md#minimal-configuration)

Here a description of variables we defined:

| Variable        | Description
| --------------- | ----------------------------------------------------------------------- |
| OUTPUT_FILE     | The name of the exported file. Format: `<PROJECT_NAME>.<EXTENSION>`. The output file extension should match the one used by the Godot export process. See [Exporting from the command line](https://docs.godotengine.org/en/latest/tutorials/export/exporting_projects.html#exporting-from-the-command-line) |
| EXPORT_PRESET   | The name of the export preset that will be used to export your project. |

- To learn more about environment variables in a `codemagic.yaml` file see [Configuring Environment Variables](https://docs.codemagic.io/yaml-basic-configuration/configuring-environment-variables/)

<br>

Now we need to configure the export process. Add the following code to your `godot-ios-workflow` section:

```yaml
scripts:
  - *install_godot
  - *install_godot_export_templates
  - *export_project
  - *gather_files

artifacts:
  - *zipped_export
``` 

Then, make sure your workflow now looks like this:

```yaml
workflows:
  godot-ios-workflow:
    ...
    environment: ...
    scripts: ... # [!code ++]
    artifacts: ... # [!code ++]
```

And that's it, all that's left is to configure your credentials to export your project. If you don't plan to sign your exported project, you can simply start the build. Your project will be available for download in .zip format once the process is complete.
To start a new build, you can use Codemagic's interface, or events affecting your repository such as push.

- See [Build Automatically](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/) to automate the execution of your Codemagic configuration.
- See also [Build Notifications](https://docs.codemagic.io/yaml-notification/email/) to get a notification informing you of the result of your build.


## Credentials

Before continuing, make sure to set up Xcode certificates and/or profiles as explained in this [tutorial](https://docs.codemagic.io/yaml-code-signing/signing-ios/). See [Adding Provisioning file](https://docs.codemagic.io/partials/quickstart/code-signing-ios-add-provisioning-profile/) to upload a provisionning file on Codemagic.

The following variable groups and variables will be used to retrieve credential information that Godot does not store in the `export_presets.cfg` file.  
- Learn more about some of these variables in [Godot 4 iOS environment variable](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_ios.html#environment-variables). See also [EditorExportPlatformIOS](https://docs.godotengine.org/en/latest/classes/class_editorexportplatformios.html)

:::tip
You don't need to define all of these variables, just the ones that match your project's configuration.
:::

| Variable name                                  |	Variable value                             | Group             |
| ---------------------------------------------- | ------------------------------------------- | ----------------- |
| GODOT_IOS_PROVISIONING_PROFILE_UUID_DEBUG  	 | UUID of the provisioning profile. [See the documentation](https://docs.godotengine.org/en/latest/classes/class_editorexportplatformios.html#class-editorexportplatformios-property-application-provisioning-profile-uuid-debug). | apple_credentials |
| GODOT_IOS_PROVISIONING_PROFILE_UUID_RELEASE	 | UUID of the provisioning profile. [See the documentation](https://docs.godotengine.org/en/latest/classes/class_editorexportplatformios.html#class-editorexportplatformios-property-application-provisioning-profile-uuid-release). | apple_credentials |

Add these variables in the Codemagic interface (either as Application or as Team variables), make sure to click Secure to make sensitive data encrypted.
- Learn how to store these variables using the Codemagic interface by watching this video: 

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe width="897" height="504" src="https://www.youtube.com/embed/7pAxVFe66hI?start=37" title="Environment variables and groups with codemagic.yaml" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-
origin-when-cross-origin" style="position: absolute; top:0; left: 0; width: 100%; height: 100%;" allowfullscreen></iframe>
</div>


- To learn more about environment variables in a `codemagic.yaml` file see [Configuring Environment Variables](https://docs.codemagic.io/yaml-basic-configuration/configuring-environment-variables/)
- To learn more about storing binary files with Codemagic, see [Storing Binary files](https://docs.codemagic.io/yaml-basic-configuration/configuring-environment-variables/#storing-binary-files)
- If you don't own a PC, you can use a website like [base64.guru](https://base64.guru/converter/encode/text) or [base64encode](https://www.base64encode.org/) to encode your `keystore` file to base64.

<br>

To use the defined variables in our workflow, we have to add their group(`apple_credentials`) to our configuration file(`codemagic.yaml` file). To do so, add the following code to the `environment` section of `godot-ios-workflow`:

```yaml
groups:
  - apple_credentials
```

Then make sure your workflow now looks like this:

```yaml
godot-ios-workflow:
  ...
  environment:
    groups: # [!code ++]
      - apple_credentials # [!code ++]
    ...
```

:::tip
If you already have a `groups` section in your script, simply add the `- apple_credentials` line to it.
:::

<br>

And it's done! All we need to do is to export the project. To do this, you can use Codemagic's interface, or events affecting your repository such as push.

Sometimes you can get an errors like [xcode-select points at wrong SDK location](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_ios.html#xcode-select-points-at-wrong-sdk-location). In this case, inside the `scripts` section of your `godot-ios-workflow`, just before the `export_project` section, add the following section:

```yaml
- name: xcode-select Setup
  script: sudo xcode-select -switch /Applications/Xcode.app
```

Then, make sure your workflow now looks like this:

```yaml
scripts:
  - *install_godot_export_templates ...
  - name: xcode-select Setup # [!code ++]
    script: sudo xcode-select -switch /Applications/Xcode.app # [!code ++]
  - *export_project ...
```

- See [Build Automatically](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/) to automate the execution of your Codemagic configuration.
- See also [Build Notifications](https://docs.codemagic.io/yaml-notification/email/) to get a notification informing you of the result of your build.


## Overview

Summary of what we've covered on this page:
- Exported a Godot project to iOS using a Codemagic build machine.

| File    | Content | Tutorial |
| ------- | ------- | -------- |
| <a href="/codemagic-godot-pipeline/templates/en/ios/ios-workflow.yaml" download="codemagic.yaml">Download</a> | Unsigned Godot iOS Export Configuration | [Jump to tutorial](#configuration) |
| <a href="/codemagic-godot-pipeline/templates/en/ios/ios-workflow-signed.yaml" download="codemagic.yaml">Download</a> | Signed Godot iOS Export Configuration | [Jump to tutorial](#credentials) |

:::warning Caution !!!
To use this script effectively, refer to the script [tutorial](#ios-workflow).  
Note that this script is based on a specific project configuration and may not fit your setup.  
Some environment variables have to be defined using the Codemagic interface, as explained in this [tutorial](#credentials).
:::

Optional resources to help refine your configuration:
- [Caching](https://docs.codemagic.io/yaml-notification/email/)
- [Build automatically](https://docs.codemagic.io/yaml-running-builds/starting-builds-automatically/)
- [Build notifications](https://docs.codemagic.io/yaml-notification/email/)
- [Publishing](https://docs.codemagic.io/yaml-publishing/google-play/)
- [Using custom export templates](./using-custom-export-templates.md)

<img src="/images/builds/ios-build.png" alt="Result of exporting a Godot project to iOS using Codemagic." style="border-radius: 16px;">


## Getting help and support

If you have a technical question or need help with some particular issue, you can get help in the [GitHub Discussions community](https://github.com/sabinayo/codemagic-godot-pipeline/discussions).
