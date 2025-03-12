export type User = {
    id: string;
    name: string;
    age: number;
    weight: number;
    height: number;
};

export type Workout = {
    userId: string;
    type: string;
    duration: number; // in minutes
    caloriesBurned: number;
    date: string; // YYYY-MM-DD
};

const users: User[] = [];
const workouts: Workout[] = [];

// Add a user
export function addUser(user: User): void {
    if (users.some(u => u.id === user.id)) {
        console.log("User with this ID already exists!");
        return;
    }
    users.push(user);
    console.log("User added successfully!");
}

// Log a workout
export function logWorkout(workout: Workout): void {
    if (!users.some(u => u.id === workout.userId)) {
        console.log("User not found!");
        return;
    }
    workouts.push(workout);
    console.log("Workout logged successfully!");
}

// Get all workouts of a user
export function getAllWorkoutsOf(userId: string): void {
    const userWorkouts = workouts.filter(w => w.userId === userId);
    if (userWorkouts.length) console.table(userWorkouts);
    else console.log("No workouts found!");
}

// Get workouts by type
export function getAllWorkoutsByType(userId: string, type: string): void {
    const filteredWorkouts = workouts.filter(w => w.userId === userId && w.type === type);
    if (filteredWorkouts.length) console.table(filteredWorkouts);
    else console.log("No workouts found for this type!");
}

// Get all users
export function getUsers(): void {
    if (users.length) console.table(users);
    else console.log("No users found!");
}

// Get a single user
export function getUser(id: string): void {
    const user = users.find(u => u.id === id);
    if (user) console.table([user]);
    else console.log("User not found!");
}

// Update user details
export function updateUser(id: string, updatedFields: Partial<Omit<User, 'id'>>): void {
    const user = users.find(u => u.id === id);
    if (!user) {
        console.log("User not found!");
        return;
    }
    Object.assign(user, updatedFields);
    console.log("User updated successfully!");
}
