const Employee = require('../models/employees.model');
const employeeCtrl = {};


employeeCtrl.getLogin = async (req,res) => {
  const {nombre , codigo} = req.body;
  const employees = await Employee.find({nombre, codigo});
  res.json(employees); 
}

employeeCtrl.getEmployees = async (req,res) => {
  console.log('Employee',Employee);
  const employees = await Employee.find({activo: true});
  res.json(employees); 
}

employeeCtrl.createEmployee = async (req,res) =>{
    const employee = new Employee({
      nombre: req.body.nombre,
      edad: req.body.edad,
      sexo: req.body.sexo,
      codigo: req.body.codigo,
      activo: req.body.activo,
    });
    await employee.save();
    res.json({ status: "Employee created" });
}

employeeCtrl.getEmployee = async (req, res, next) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Employee Updated" });
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  await Employee.findByIdAndUpdate(id, {$set:{"activo":false}});
  res.json({ status: "Employee Deactivated" });
};


module.exports = employeeCtrl;