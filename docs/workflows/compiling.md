---
title: Compilation
description: "This page provides a simple example of how to use Codemagic to compile the Godot editor or export templates for Godot."
---

# Compiling

<br>

This page provides a simple example of how to use a `codemagic.yaml` file to compile Godot export templates on a Codemagic build machine. It can also serve as a template for compiling the Godot Editor. We will not discuss how to write a `codemagic.yaml` file or what are the rules related to this file.  

- To learn how `codemagic.yaml` files work, see [Creating codemagic.yaml](https://docs.codemagic.io/partials/quickstart/create-yaml-intro/).

<img src="../images/workflows/codemagic-blog-header-Xcode-12-deprecation.png" alt="Workflow for compilin Godot or its export templates with Codemagic." style="border-radius: 16px;">

Image by Codemagic, used under [CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/) license. See [gallery](https://codemagic.io/gallery/)


## Requirements

To better understand what is done on this page, refers to the following articles:
- [Getting Godot source code](https://docs.godotengine.org/en/stable/contributing/development/compiling/getting_source.html)
- [Introduction to build system](https://docs.godotengine.org/en/stable/contributing/development/compiling/introduction_to_the_buildsystem.html)
- [Compiling with Script Encryption Key](https://docs.godotengine.org/en/latest/contributing/development/compiling/compiling_with_script_encryption_key.html)
- [Exporting for Android](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_android.html).
- [Compiling for Android](https://docs.godotengine.org/en/4.3/contributing/development/compiling/compiling_for_android.html#doc-compiling-for-android)

<br>

[Python](https://www.python.org/), [Android SDK](https://developer.android.com/studio), [Gradle](https://gradle.org/), [Java](https://www.oracle.com/java/technologies/java-se-glance.html) and some other tools required for Godot compilation are pre-installed on all Codemagic machines. Any additional tools or software required have to be downloaded to the build machine.

- For a complete list of tools and software pre-installed on Codemagic construction machines, go to [Integration](https://codemagic.io/integrations/).
- Additionnaly consult the full list of other pre-installed tools on the build machine we'll use in [Other pre-installed tolls on macOS](https://docs.codemagic.io/specs-macos/xcode-16-2/#other-pre-installed-tools)


## Sample Script

**Godot v4.4.1-stable**:

```yaml
workflows:
  android-export-templates-workflow:
    name: Compiling Android Export templates
    max_build_duration: 120
    instance_type: mac_mini_m2
    working_directory: /Users/builder/Downloads

    environment:
      vars:
        GODOT_BRANCH: 4.4.1-stable
        FILE_COLLECTION_DIRECTORY: /Users/builder/Downloads/templates

    scripts:
      - name: Setting Up
        script: |
          mkdir -p $FILE_COLLECTION_DIRECTORY
          
          git clone https://github.com/godotengine/godot.git -b $GODOT_BRANCH
          export SOURCE_CODE_DIRECTORY=$(pwd)/godot
          echo "BUILD_DIRECTORY=$SOURCE_CODE_DIRECTORY" >> $CM_ENV
          echo "BUILD_RESULT_DIRECTORY=$SOURCE_CODE_DIRECTORY/bin" >> $CM_ENV
          echo "ANDROID_HOME=$ANDROID_SDK_ROOT" >> $CM_ENV
          
          cd $SOURCE_CODE_DIRECTORY
          pip install scons
          scons platform=list
        
      - name: Compiling
        script: |
          cd $BUILD_DIRECTORY
          export SCRIPT_AES256_ENCRYPTION_KEY="aeb1bc56aaf580cc31784e9c41551e9ed976ecba10d315db591e749f3f64890f"
          scons platform=android target=template_release arch=arm32
          scons platform=android target=template_release arch=arm64
          scons platform=android target=template_release arch=x86_32
          scons platform=android target=template_release arch=x86_64 generate_apk=yes
      
      - name: Files Gathering
        script: zip -r $FILE_COLLECTION_DIRECTORY/export_templates.zip $BUILD_RESULT_DIRECTORY
    
    artifacts:
      - $FILE_COLLECTION_DIRECTORY/*.zip
```

<br>

<h3>Explanations</h3>

This script first clones the Godot source code for the given `GODOT_BRANCH` and installs [scons](https://scons.org/) to compile the export templates.  
It then displays all available platforms for which `scons` can compile on the build machine (`scons platform=list`).  
Finally, the script compiles the Android export templates using an encryption key for all Android platforms.  
Once compiled successfully, you can download the export templates as a zip file.

Here is a description of the variables used:

| Variable name | Description |
| ------------- | ----------- |
| GODOT_BRANCH | The Git branch of Godot to be cloned for compilation |
| FILE_COLLECTION_DIRECTORY | The directory in which the zip containing the export templates will be stored |
| SOURCE_CODE_DIRECTORY | The directory in which Godot's source code is located |
| BUILD_DIRECTORY | The directory used to launch compilation (identical to `SOURCE_CODE_DIRECTORY`) |
| BUILD_RESULT_DIRECTORY | The directory in which compiled models will be stored after compilation |
| SCRIPT_AES256_ENCRYPTION_KEY | The AES- 256 encryption key to be stored in export templates. |

You can now <a href="/codemagic-godot-pipeline/templates/en/compiling.yaml" download="codemagic.yaml">Download configuration file</a>.

:::warning Caution!!!
To use this script effectively, consult its [Requirements](#requirements).  
This script is based on a specific configuration and may not match your configuration.
:::


## Getting help and support

If you have a technical question or need help with some particular issue, you can get help in the [GitHub Discussions community](https://github.com/sabinayo/codemagic-godot-pipeline/discussions).