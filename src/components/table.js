 
import React,{useState}from 'react';
import MaterialTable from 'material-table'
import'../App.css';

const datalist = [
	{name:'Haffiz', username:'hfz123',email:'hfz123@gmail.com',phone:1234567890,website:'www.blank.com'}
]

function Mytable(){

	const [data,setData]=useState(datalist)
	const columns =[
	{title:"Name",field:"name"},
	{title:"Username",field:"username"},
	{title:"Email",field:"email"},
	{title:"Phone",field:"phone"},
	{title:"Website",field:"website"}
]
	return (
		<div className="App">
		<h1>React App</h1>
		<MaterialTable
		title="Employee"
		data={data}
		columns={columns}
		editable={{
			onRowAdd: (newRow)=> new Promise((resolve,reject)=> {
				const updatedRows =[...data,{...newRow}]
				setTimeout(()=> {
					setData(updatedRows)
					resolve()
				},1000)
			}),
			onRowDelete:selectedRow=> new Promise((resolve,reject)=> {
				const index = selectedRow.tableData.name;
				const updatedRows=[...data]
				updatedRows.splice(index,1)
				setTimeout(() => {
					setData(updatedRows)
					resolve()
				},1000)
			}),
			onRowUpdate:(updatedRow,oldRow)=> new Promise((resolve,reject)=>{
				const index=oldRow.tableData.id;
				const updatedRows=[...data]
				updatedRows[index]=updatedRow
				setTimeout(() => {
					setData(updatedRows)
					resolve()
				},2000)
			})
		}}
		options={{
			actionsColumnIndex:-1,addRowsPosition: "first"
		}}
		/>
		</div>
		);
	}
 export default Mytable;
