# Sometimes it's a README fix, or something like that - which isn't relevant for
# including in a project's CHANGELOG for example
# declared_trivial = github.pr_title.include? "#trivial"

# Make it more obvious that a PR is a work in progress and shouldn't be merged yet
warn("PR is classed as Work in Progress") if (github.pr_title.include? "WIP" or
                                              github.pr_title.include? "Do not merge")

# Warn when there is a big PR
warn("Big PR") if git.lines_of_code > 500

# Don't let testing shortcuts get into master by accident
# fail("fdescribe left in tests") if `grep -r fdescribe specs/ `.length > 1
# fail("fit left in tests") if `grep -r fit specs/ `.length > 1

# Ensure a PR has someone assigned to it
warn "This PR does not have any assignees yet." unless github.pr_json["assignee"]

# PRs should reference an issue
unless github.pr_title.downcase.include? "no issue"
  body = github.pr_body.downcase
  unless (body.include? "closes #" or
          body.include? "connects #" or
          body.include? "connects to #")
    fail "This PR doesn't close or connect to an issue."
  end
end

# PRs should almost always merge to dev.
unless github.branch_for_base == "dev"
  warn "This PR will not be merged into dev."
end

# Warn if TODOs are present in code
todoist.warn_for_todos
todoist.print_todos_table

# Lint commit message
commit_lint.check warn: [:subject_length]

# Mention potential reviewers
# mention.run

# HTML coverage report
username = ENV['CIRCLE_PROJECT_USERNAME']
project_name = ENV['CIRCLE_PROJECT_REPONAME']
build_number = ENV['CIRCLE_BUILD_NUM']
artifacts = ENV['CIRCLE_ARTIFACTS']

if username && project_name && build_number
  # submit message giving the coverage report that was generated by coverage.py
  message(
    '[Code coverage report](https://circleci.com/api/v1.1/project/github'+
    '/weareredshift/'+
    project_name + '/' + build_number +
    '/artifacts/0' + artifacts + '/htmlcov/index.html)')
end

# Warn if package dependencies changed
yarn_lockfile_changes = git.modified_files.include?("yarn.lock")
package_lockfile_changes = git.modified_files.include?("package.json")
if yarn_lockfile_changes or package_lockfile_changes
  warn('Package dependencies were changed in this PR.')
end