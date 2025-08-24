// patient

const role = document.getElementById('role');
const patientSignup = document.querySelector('.signup__patient');

role.addEventListener('change', function () {
    if (role.value === 'Patient') {
        patientSignup.style.display = 'block';
    } else {
        patientSignup.style.display = 'none';
    }
})

// hospital

const hospitalSignup = document.querySelector('.signup__hospital');

role.addEventListener('change', function () {
    if (role.value === 'Hospital') {
        hospitalSignup.style.display = 'block';
    } else {
        hospitalSignup.style.display = 'none';
    }
})

// clinic

const clinicSignup = document.querySelector('.signup__clinic');

role.addEventListener('change', function () {
    if (role.value === 'Clinic') {
        clinicSignup.style.display = 'block';
    } else {
        clinicSignup.style.display = 'none';
    }
})