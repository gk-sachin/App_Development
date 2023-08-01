package com.taskmanager;

import java.sql.Date;

public class DefaultTask extends Task {
    public DefaultTask(int id, String taskName, Date dueDate, boolean isCompleted) {
        super(id, taskName, dueDate, isCompleted);
    }

    @Override
    public String getTaskDetails() {
        return getId() + ". " + getTaskName() + " (Due Date: " + getDueDate() + ") - Completed: " + isCompleted();
    }
}
