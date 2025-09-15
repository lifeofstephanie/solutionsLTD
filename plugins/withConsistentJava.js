const { withAppBuildGradle } = require('@expo/config-plugins');

function withConsistentJava(config) {
  return withAppBuildGradle(config, (config) => {
    config.modResults.contents = config.modResults.contents.replace(
      '// The Expo config plugins',
      `// The Expo config plugins

  // Force consistent Java version for all subprojects
  subprojects {
    afterEvaluate { project ->
      if (project.hasProperty("android")) {
        project.android {
          compileOptions {
            sourceCompatibility JavaVersion.VERSION_17
            targetCompatibility JavaVersion.VERSION_17
          }
        }
      }
      if (project.hasProperty("kotlinOptions")) {
        project.kotlinOptions.jvmTarget = "17"
      }
    }
  }`
    );

    return config;
  });
}

module.exports = withConsistentJava;