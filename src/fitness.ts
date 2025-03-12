import { 
    addUser, 
    logWorkout, 
    getAllWorkoutsOf, 
    getAllWorkoutsByType, 
    getUsers, 
    getUser, 
    updateUser 
} from "./fitnessTracker";

// Add users
addUser({ id: "101", name: "Alice", age: 25, weight: 60, height: 165 });
addUser({ id: "102", name: "Bob", age: 30, weight: 75, height: 178 });

// Log workouts
logWorkout({ userId: "101", type: "running", duration: 30, caloriesBurned: 250, date: "2025-03-10" });
logWorkout({ userId: "101", type: "yoga", duration: 45, caloriesBurned: 150, date: "2025-03-11" });
logWorkout({ userId: "102", type: "cycling", duration: 45, caloriesBurned: 400, date: "2025-03-10" });

// Get all users
console.log("All Users:");
getUsers();

// Get a specific user
console.log("User 101 Details:");
getUser("101");

// Get all workouts for Alice
console.log("All Workouts of Alice (101):");
getAllWorkoutsOf("101");

// Get workouts of type "yoga" for Alice
console.log("Yoga Workouts of Alice (101):");
getAllWorkoutsByType("101", "yoga");

// Update user details
updateUser("101", { weight: 58, height: 166 });

// Get updated user details
console.log("Updated User 101 Details:");
getUser("101");


