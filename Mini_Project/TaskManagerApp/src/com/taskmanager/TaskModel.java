package com.taskmanager;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class TaskModel {
    private Connection connection;

    public TaskModel(String url, String username, String password) throws SQLException {
        connection = DriverManager.getConnection(url, username, password);
    }

    public void addTask(Task task) throws SQLException {
        String query = "INSERT INTO tasks (task_name, due_date, is_completed) VALUES (?, ?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, task.getTaskName());
            stmt.setDate(2, task.getDueDate());
            stmt.setBoolean(3, task.isCompleted());
            stmt.executeUpdate();
        }
    }
    
    public void markTaskAsCompleted(int taskId) throws SQLException {
        String query = "UPDATE tasks SET is_completed = ? WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setBoolean(1, true);
            stmt.setInt(2, taskId);
            stmt.executeUpdate();
        }
    }

    public void updateTask(Task task) throws SQLException {
        String query = "UPDATE tasks SET task_name = ?, due_date = ?, is_completed = ? WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, task.getTaskName());
            stmt.setDate(2, task.getDueDate());
            stmt.setBoolean(3, task.isCompleted());
            stmt.setInt(4, task.getId());
            stmt.executeUpdate();
        }
    }

    public void deleteTask(int taskId) throws SQLException {
        String query = "DELETE FROM tasks WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setInt(1, taskId);
            stmt.executeUpdate();
        }
    }

    public List<Task> getAllTasks() throws SQLException {
        List<Task> tasks = new ArrayList<>();
        String query = "SELECT * FROM tasks";
        try (Statement stmt = connection.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                int id = rs.getInt("id");
                String taskName = rs.getString("task_name");
                Date dueDate = rs.getDate("due_date");
                boolean isCompleted = rs.getBoolean("is_completed");
                tasks.add(new DefaultTask(id, taskName, dueDate, isCompleted));
            }
        }
        return tasks;
    }

    public void close() throws SQLException {
        connection.close();
    }
}
