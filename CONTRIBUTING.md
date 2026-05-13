## Release Publishing

Package releases are handled through GitHub Actions and Lerna. Do not push version bumps or release tags directly to `main`.

1. A maintainer manually triggers the **Version Bump** workflow and selects a `patch`, `minor`, or `major` bump.
2. The workflow runs checks, then uses Lerna to update package versions and changelogs locally with no push and no git tags.
3. The workflow opens a release pull request from `release/version-bump` with the `release` label.
4. The team reviews the package version changes and changelogs, then approves and merges the PR.
5. The **Publish to npm** workflow runs when the release PR changes are pushed to `main`.
6. The publish workflow creates or reuses the fixed Lerna release tag from `lerna.json` (for example, `v1.9.0`) and creates the matching GitHub Release.
7. Lerna publishes the packages from the git tag to npm with public access.

The publish job runs in the GitHub Actions `npm` environment and requires npm Trusted Publishing to be configured for the packages in this repository.
