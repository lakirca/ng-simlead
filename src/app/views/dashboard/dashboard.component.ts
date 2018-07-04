import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { EmployeeService } from "../employees/shared/employee.service";
import { Employee } from "../employees/shared/employee.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  // selectedFile: File = null;
  // constructor(private authService: AuthService, private http: HttpClient) {}

  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log(event);
  // }

  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post()
  // }
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.resetForm();
    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(key);
      console.log("Deleted Successfully");
    }
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null)
      this.employeeService.insertEmployee(employeeForm.value);
    else this.employeeService.updateEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    console.log("Submitted Succcessfully");
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: "",
      position: "",
      office: "",
      salary: 0
    };
  }
}
