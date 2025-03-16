import { logistics_api } from "./config";

function addUser(userData) {
    console.log(userData,"hi...");
    return logistics_api.post("/users/addUser", userData);
}

function addVehicle(vehicleDetails) {
    console.log(vehicleDetails);
    return logistics_api.post("/vehicles/addVehicle", vehicleDetails);
}  

function getVehicles() {
    return logistics_api.get("/vehicles/getVehicles");
}  

function addOrder(orderData) {
    console.log(orderData);
    return logistics_api.post("/orders/addOrder", orderData);
}

function getUserProfile(userId) {
    return logistics_api.get(`/users/getUserProfile/${userId}`);

}
  
function updateUserProfile(userId, profileData) {
    // return logistics_api.post(`/users/profile/update/${userId}`, profileData);
    return null;

}

export default { 
    addUser,
    addVehicle,
    addOrder,
    getUserProfile,
    updateUserProfile,
    getVehicles
};
