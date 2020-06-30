const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Agenda Pro',
		contactos: [],
		contactoNombre: '',
		contactoTelefono: '',
		contactoInsta: '',
	},
	methods: {
		agregarContacto: function (params) {
			//console.log('Clik', this.nuevoContacto);
			this.contactos.push({
				nombre: this.contactoNombre,
				telefono: this.contactoTelefono,
				insta: this.contactoInsta,
			});

			console.log(this.contactos);
			this.contactoNombre = '';
			this.contactoTelefono = '';
			this.contactoInsta = '';
		},
		mostrarContacto: function (index) {
			console.log('editar', index);
			this.contactoNombre = this.contactos[index].nombre;
			this.contactoTelefono = this.contactos[index].telefono;
			this.contactoInsta = this.contactos[index].insta;
		},
	},
});
