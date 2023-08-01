package com.taskmanager;

import java.sql.Date;

public abstract class Task {
    private int id;
    private String taskName;
    private Date dueDate;
    private boolean isCompleted;

    public Task(int id, String taskName, Date dueDate, boolean isCompleted) {
        this.id = id;
        this.taskName = taskName;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
    }

    public int getId() {
        return id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

   
    public abstract String getTaskDetails();

    @Override
    public String toString() {
        return getTaskDetails();
    }
}
