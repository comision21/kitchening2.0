const $ = id => document.getElementById(id);

window.onload = function(e) {


    $('name').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-name').innerHTML = "El nombre es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                $('msgError-name').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                $('msgError-name').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-name').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });


    $('surname').addEventListener('blur', function(e) {
        switch (true) {
            case !this.value.trim():
                $('msgError-surname').innerHTML = "El apellido es obligatorio";
                this.classList.add("is-invalid");
                break;
            case !/^[A-Za-z]+$/.test(this.value) :
                $('msgError-surname').innerHTML = "Solo caracteres alfabéticos";
                this.classList.add("is-invalid");
                break
            case this.value.trim().length < 2 :
                $('msgError-surname').innerHTML = "Mínimo dos caracteres";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-surname').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    });

    $('birthday').addEventListener('blur', function(e) {
        const birthDate = moment(this.value);
        const currentDate = moment();
        const minDate = moment().subtract(120, 'years');

        switch (true) {
            case !this.value.trim():
                $('msgError-birthday').innerHTML = "La fecha es obligatoria";
                this.classList.add("is-invalid");
                break;
            case birthDate.isAfter(currentDate) :
                $('msgError-birthday').innerHTML = "Que sos, termitator??";
                this.classList.add("is-invalid");
                break
            case birthDate.isBefore(minDate):
                $('msgError-birthday').innerHTML = "Tan viejo/a sos??";
                this.classList.add("is-invalid");
                break
            default:
                $('msgError-birthday').innerHTML = null;
                this.classList.remove("is-invalid");
                this.classList.add("is-valid");
                break;
        }
    })
}