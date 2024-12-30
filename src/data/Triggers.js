const WORKFLOW_TRIGGERS = [

    // Issues
    {
        name: 'Issues',
        description: "Runs your workflow when an issue in the workflow's repository is created or modified.",
        event_payload: 'issues',
        trigger_activities: [
            "opened",
            "edited",
            "deleted",
            "transferred",
            "pinned",
            "unpinned",
            "closed",
            "reopened",
            "assigned",
            "unassigned",
            "labeled",
            "unlabeled",
            "locked",
            "unlocked",
            "milestoned",
            "demilestoned",
        ],
        GITHUB_SHA: 'Last commit on default branch',
        GITHUB_REF: "Default branch",
    },

    // Push 
    {
        name: 'Push',
        description: "Runs your workflow when a commit is pushed to the repository.",
        event_payload: 'push',
        trigger_activities: [],
        GITHUB_SHA: 'Last commit on default branch',
        GITHUB_REF: "Branch name",
    },

    // Pull Request

]

export default WORKFLOW_TRIGGERS;