 // Array for student data
 let students = [];

 // Function to add  student to list
 function addStudent(name, email) {
     students.push({ name, email });
     updateStudentList();
 }

 // Function to delete  student from list
 function deleteStudent(index) {
     students.splice(index, 1);
     updateStudentList();
 }

 // Function update list
 function updateStudentList() {
     const studentList = document.getElementById('student-list');
     studentList.innerHTML = '';

     students.forEach((student, index) => {
         const listItem = document.createElement('li');
         listItem.textContent = `${student.name} (${student.email})`;

        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete-button';
         deleteButton.textContent = 'Delete';
         deleteButton.addEventListener('click', () => deleteStudent(index));

         listItem.appendChild(deleteButton);
         studentList.appendChild(listItem);
     });
 }

 // event listener
 const signupForm = document.getElementById('registration-form');
 signupForm.addEventListener('submit', (event) => {
     event.preventDefault();

     const nameInput = document.getElementById('name');
     const emailInput = document.getElementById('email');

     try {
         // Validate name field
         if (nameInput.value.trim() === '') {
             throw new Error('Name is required');
         }

         // Validate email
         if (emailInput.value.trim() === '') {
             throw new Error('Email is required');
         }

         // Add student to list
         addStudent(nameInput.value, emailInput.value);
        // Display student list on console
        console.log(students);

         // Clear form
         nameInput.value = '';
         emailInput.value = '';
     } catch (error) {
         alert(error.message);
     }
 });