package com.taskmanager;

import java.sql.Date;
import java.sql.SQLException;
import java.util.List;
import java.util.Scanner;

public class TaskManagerApp {
    public static void main(String[] args) {
        final String DB_URL = "jdbc:mysql://localhost:3306/task_manager";
        final String DB_USERNAME = "root";
        final String DB_PASSWORD = "Itech@402";

        try {
            TaskModel taskModel = new TaskModel(DB_URL, DB_USERNAME, DB_PASSWORD);

            Scanner scanner = new Scanner(System.in);
            boolean exit = false;

            while (!exit) {
                System.out.println("Task Manager Menu:");
                System.out.println("1. Add Task");
                System.out.println("2. Mark Task as Completed");
                System.out.println("3. Update Task");
                System.out.println("4. Delete Task");
                System.out.println("5. Display All Tasks");
                System.out.println("6. Exit");
                System.out.print("Enter your choice: ");
                int choice = scanner.nextInt();
                scanner.nextLine(); 

                switch (choice) {
                    case 1:
                       
                        System.out.print("Enter task name: ");
                        String taskName = scanner.nextLine();
                        System.out.print("Enter due date (YYYY-MM-DD): ");
                        String dueDateString = scanner.nextLine();
                        Date dueDate = Date.valueOf(dueDateString);

                        Task task = new DefaultTask(0, taskName, dueDate, false);
                        taskModel.addTask(task);

                        System.out.println("Task added successfully.");
                        break;

                    case 2:
                       
                        System.out.print("Enter task ID to mark as completed: ");
                        int taskIdToMarkCompleted = scanner.nextInt();
                        scanner.nextLine();

                        List<Task> tasks = taskModel.getAllTasks();
                        for (Task t : tasks) {
                            if (t.getId() == taskIdToMarkCompleted) {
                                t.setCompleted(true);
                                taskModel.updateTask(t);
                                System.out.println("Task marked as completed.");
                                break;
                            }
                        }
                        break;

                    case 3:
                       
                        System.out.print("Enter task ID to update: ");
                        int taskIdToUpdate = scanner.nextInt();
                        scanner.nextLine();

                        tasks = taskModel.getAllTasks();
                        for (Task t : tasks) {
                            if (t.getId() == taskIdToUpdate) {
                                System.out.print("Enter updated task name: ");
                                String updatedTaskName = scanner.nextLine();
                                System.out.print("Enter updated due date (YYYY-MM-DD): ");
                                String updatedDueDateString = scanner.nextLine();
                                Date updatedDueDate = Date.valueOf(updatedDueDateString);
                                System.out.print("Is task completed (true/false): ");
                                boolean updatedIsCompleted = scanner.nextBoolean();
                                scanner.nextLine();

                                t.setTaskName(updatedTaskName);
                                t.setDueDate(updatedDueDate);
                                t.setCompleted(updatedIsCompleted);
                                taskModel.updateTask(t);

                                System.out.println("Task updated successfully.");
                                break;
                            }
                        }
                        break;

                    case 4:
                        
                        System.out.print("Enter task ID to delete: ");
                        int taskIdToDelete = scanner.nextInt();
                        scanner.nextLine();

                        taskModel.deleteTask(taskIdToDelete);

                        System.out.println("Task deleted successfully.");
                        break;

                    case 5:
                        
                        tasks = taskModel.getAllTasks();
                        System.out.println("All Tasks:");
                        for (Task t : tasks) {
                            System.out.println(t);
                        }
                        break;

                    case 6:
                        
                        exit = true;
                        break;

                    default:
                        System.out.println("Invalid choice. Please try again.");
                }
            }

            // Closing the database connection
            taskModel.close();
        } catch (SQLException e) {
            System.err.println("Error connecting to the database: " + e.getMessage());
        }
    }
}


