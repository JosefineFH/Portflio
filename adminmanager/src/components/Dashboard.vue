<template>
  <div class="dashboard">
    <h2>Employees</h2>
    <table>
      <tr>
        <th>Department</th>
        <th>Start Date</th>
        <th>Id</th>
        <th>Name</th>
        <th></th>
      </tr>
      <tr v-for="employee in employees" v-bind:key="employee.id">
        <td class="chip">{{employee.dept}}</td>
        <td>{{employee.startDate}}</td>
        <td>{{employee.employee_id}}</td>
        <td>{{employee.name}}</td>
        <td>
          <router-link
            class="button"
            v-bind:to="{name: 'view-employee', 
            params: {employee_id: employee.employee_id}}"
          >Edit</router-link>
        </td>
      </tr>
    </table>
    <router-link v-bind:to="{name:'new-employee', params: {currentUser}}">
      <img src="../assets/img/plus.png" class="plus" />
    </router-link>
  </div>
</template>

<script>
import db from "../Firebase/firebaseInit.js";
import firebase from "firebase";

export default {
  name: "dashboard",
  data() {
    return {
      employees: [],
      currentUser: []
    };
  },

  created() {
    
    if (firebase.auth().currentUser) {
      this.currentUser.push(firebase.auth().currentUser.uid);
    }

    db.collection("employees")
      .orderBy("employee_id")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            employee_id: doc.data().employee_id,
            name: doc.data().name,
            dept: doc.data().dept,
            position: doc.data().position,
            startDate: doc.data().startDate,
            uid: doc.data().uid
          };
          if (doc.data().uid == this.currentUser) {
            this.employees.push(data);
          }
          
        });
      });
  }
};
</script>
<style scoped>
.dashboard {
  padding: 0px 50px 0px 50px;
}

.chip {
  margin-top: 10px;
  display: inline-block;
  padding: 0 20px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #8ca3a3;
  color: white;
}
.edit:hover {
  background-color: #049ff9;
  box-shadow: 0px 0px 9px #0425f9;
}
.button {
  margin-left: 10%;
  background-color: #049ff9;
}

table {
  width: 99%;
  border-collapse: collapse;
  margin-right: 20px;
}
th {
  height: 50px;
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:hover {
  background-color: #f5f5f5;
}
</style>