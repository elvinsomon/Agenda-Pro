const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Agenda Pro',
		btnEdicion: 'Editar',
		contactos: [],
		contactoNombre: '',
		contactoTelefono: '',
		contactoInsta: '',
		seleccionado: false,
	},
	methods: {
		limpiar: function () {
			this.contactoNombre = '';
			this.contactoTelefono = '';
			this.contactoInsta = '';
		},
		agregarContacto: function () {
			//console.log('Clik', this.nuevoContacto);

			//Validaciones
			this.contactos.push({
				nombre: this.contactoNombre,
				telefono: this.contactoTelefono,
				insta: this.contactoInsta,
			});

			this.limpiar();
			localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
		},
		//Falta de pruebas
		mostrarContacto: function (index) {
			if (this.contactoNombre === '') {
				this.contactoNombre = this.contactos[index].nombre;
				this.contactoTelefono = this.contactos[index].telefono;
				this.contactoInsta = this.contactos[index].insta;
				this.btnEdicion = 'Actualizar';
				this.contactos[index].seleccionado = true;
			} else {
				this.editarContacto(index);
			}
		},
		editarContacto: function (index) {
			this.contactos[index].nombre = this.contactoNombre;
			this.contactos[index].telefono = this.contactoTelefono;
			this.contactos[index].insta = this.contactoInsta;
			this.btnEdicion = 'Editar';
			this.limpiar();
			localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
		},
		eliminar: function (index) {
			console.log(index);
			this.contactos.splice(index, 1);
			localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
		},
	},
	created: function () {
		let datosDB = JSON.parse(localStorage.getItem('agenda-pro'));
		console.log(datosDB);

		if (datosDB === null) {
			this.contactos = [];
		} else {
			this.contactos = datosDB;
		}
	},
});
