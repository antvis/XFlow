# Code Contribution Guidelines

<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> English | [简体中文](./CONTRIBUTING.zh-CN.md)

If you have any questions, please submit [issue](https://github.com/antvis/xflow/issues) or consider submiting a code change via a [Pull Request](https://github.com/antvis/xflow/pulls)!

## Submit an issue

- Determine the type of issue.
- Demonstrate clear intent in labels, titles or content.
- Avoid submitting duplicate issues, please refer to the links below to check if your issue already existsbefore submitting:
  - XFlow's Issue's tab: https://github.com/antvis/XFlow/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
  - XFlow's Closed issues tab: https://github.com/antvis/XFlow/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed
  - XFlow Discussion's tab: https://github.com/antvis/XFlow/discussions

Then the AntV person in charge will confirm the intention of the issue, update the appropriate tags, associate milestones, and assign developers.

## Submit Code

### Submit Pull Request

If you have developer permission in the repository and want to contribute code, you can create a branch to modify the code and submit a PR, and the AntV development team will review the code and merge it into the trunk.

```bash
# First create a development branch for development, the branch name should have meaning, avoid using update, tmp and the like
$ git checkout -b branch-name
# First create a development branch for development, the branch name should have meaning, avoid using update, tmp and the like
$ npm test
# After the test is passed, submit the code, message see the specification below
$ git add . # git add -u delete files
$ git commit -m "fix(role): role.use must xxx"
$ git push origin branch-name
```

After submitting, you can create a Pull Request at [xflow](https://github.com/antvis/xflow/pulls).

Since no one can guarantee how much will be remembered after a long time, for the convenience of retrospecting the history later, please make sure to provide the following information when submitting a Pull Request

1. Demand points (generally related issues or comments are counted)
2. The reason for the upgrade (different from the issue, you can briefly describe why it needs to be dealt with)
3. Framework test points (can be associated with test files, no need to describe in detail, just the key points)
4. Concerns (for users, it is optional, generally incompatible updates, etc., additional prompts are required)

### Code Style

Your code style must pass eslint, you can run `$ pnpm lint -r` to test locally.

### Commit Specification

Submit a commit according to the [angular specification](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format), so that the history looks clearer and the changelog can be automatically generated.

```xml
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

（1）type

Submit the type of commit, including the following

- feat: new function
- fix: fix issues
- docs: modify documentation
- style: Modify the code format without affecting the code logic
- refactor: refactoring code, theoretically does not affect existing functionality
- perf: improve performance
- test: add and modify test cases
- chore: Modify tool related (including but not limited to documentation, code generation, etc.)
- deps: upgrade dependencies

（2）scope

Modify the scope of the file

（3）subject

Modify the scope of the file

（4）body

Supplement subject, and appropriately add relevant factors such as reason and purpose, or not write it

（5）footer

- **When there are incompatible changes (Breaking Change), it must be clearly described here**
- Associate related issues, such as `Closes #1, Closes #2, #3`

Example

```
fix($compile): [BREAKING_CHANGE] couple of unit tests for IE9
Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.
Document change on antvis/xflow#12
Closes #392
BREAKING CHANGE:
  Breaks foo.bar api, foo.baz should be used instead
```

See the specific [documentation](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)

## Release Management

- [Publishing maintenance releases](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/maintenance-releases.md)
- [Publishing pre-releases](https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/pre-releases.md)

XFlow is released based on the [semver](http://semver.org/lang/zh-CN/) semantic version number.

`master` The branch is the current stable release version.

- Branch the develop branch directly from `master`.
- All API deprecations require a `deprecate` prompt on the current stable version, and guarantee compatibility on the current stable version until the new version is released.

### Release Strategy

Every major release has a release manager managing (PM) what he/she has to do

#### Ready to work:

- Establish milestones, confirm requirements are associated with milestones, assign and update issues

#### Before Release

- Confirm that all current Milestone issues are closed or extendable, and complete performance testing.
- Initiate a new [Release Proposal MR](https://github.com/nodejs/node/pull/4181), follow [node CHANGELOG](https://github.com/nodejs/node/blob/master/ CHANGELOG.md) Write `History`, and correct the version-related content in the document.
- Specifies the PM for the next major release.

#### When Published:

- Back up the old stable version (master) to a branch with the name of the current major version (eg `1.x`), and set the tag to {v}.x`( v is the current version, such as`1.x` `).
- Publish a new stable version to [npm](http://npmjs.com) and notify the upper framework to update.
- Before `npm publish`, please read ["How I publish an npm package"](https://fengmk2.com/blog/2016/how-i-publish-a-npm-package).
