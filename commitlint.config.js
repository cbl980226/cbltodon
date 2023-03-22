// prettier-ignore
const scopes = [
  { value: 'core',          name: 'core:            anything Core specific' },
  { value: 'misc',          name: 'misc:            misc stuff' },
  { value: 'repo',          name: 'repo:            anything related to managing the repo itself' },
  { value: 'testing',       name: 'testing:         anything testing specific (e.g. jest or cypress)' },
  { value: 'web',           name: 'web:             anything Web specific' },
  { value: 'utils',         name: 'utils:           anything Utils specific' },
  { value: 'ui-common',     name: 'ui-common:       anything Ui Common specific' },
  { value: 'ui-theme',      name: 'ui-theme:        anything Ui Theme specific' },
];

// prettier-ignore
const types = [
  { value: 'feat',          name: 'feat:     ✨  A new feature', emoji: ':sparkles:' },
  { value: 'fix',           name: 'fix:      🐛  A bug fix', emoji: ':bug:' },
  { value: 'docs',          name: 'docs:     📝  Documentation only changes', emoji: ':memo:' },
  { value: 'style',         name: 'style:    💄  Changes that do not affect the meaning of the code', emoji: ':lipstick:' },
  { value: 'test',          name: 'test:     ✅  Adding missing tests or correcting existing tests', emoji: ':white_check_mark:' },
  { value: 'ci',            name: 'ci:       🍥  Changes to our CI configuration files and scripts', emoji: ':fish_cake:' },
  { value: 'cleanup',       name: 'cleanup:  🛁  A code change that neither fixes a bug nor adds a feature', emoji: ':bathtub:' },
  { value: 'chore',         name: "chore:    🔨  Other changes that don't modify src or test files", emoji: ':hammer:' }
]

const workspaceLayout = ['apps', 'libs']

// precomputed scope
// prettier-ignore
const scopeComplete = require('child_process')
  .execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')
  .find(r => workspaceLayout.some(dir => ~r.indexOf(`M  ${dir}`)))
  ?.replace(/(\/)/g, '%%')
  ?.match(new RegExp(`(?:${workspaceLayout.join('|')})%%(\\w(?:\\w|-)*\\w)%%`))?.[1]
  ?.replace(/-e2e$/, '')

/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  /** @usage `yarn commit :f` */
  alias: {
    f: 'docs(core): fix typos',
    b: 'chore(repo): bump dependencies'
  },
  types,
  scopes,
  defaultScope: scopeComplete,
  scopesSearchValue: true,
  maxSubjectLength: 100,
  markBreakingChangeMode: false,
  allowBreakingChanges: ['feat', 'fix'],
  allowCustomScopes: false,
  allowCustomIssuePrefix: false,
  allowEmptyScopes: false,
  allowEmptyIssuePrefix: false,
  customIssuePrefixAlign: 'top',
  useEmoji: true,
  emojiAlign: 'center',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types.map(t => t.value)]
  }
}
