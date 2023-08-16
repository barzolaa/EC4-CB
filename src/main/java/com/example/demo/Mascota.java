package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Mascota {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String edad;
	private String raza;

	private Mascota() {}

	public Mascota(String nombre, String edad, String raza) {
		this.nombre = nombre;
		this.edad = edad;
		this.raza = raza;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Mascota mascota = (Mascota) o;
		return Objects.equals(id, mascota.id) &&
			Objects.equals(nombre, mascota.nombre) &&
			Objects.equals(edad, mascota.edad) &&
			Objects.equals(raza, mascota.raza);
	}

	

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre, edad, raza);
	}

	@Override
	public String toString() {
		return "Mascota{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", edad='" + edad + '\'' +
			", raza='" + raza + '\'' +
			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEdad() {
		return edad;
	}

	public void setEdad(String edad) {
		this.edad = edad;
	}

	public String getRaza() {
		return raza;
	}

	public void setRaza(String raza) {
		this.raza = raza;
	}

	
}