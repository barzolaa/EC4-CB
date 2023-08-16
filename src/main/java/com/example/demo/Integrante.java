package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Integrante {

	private @Id @GeneratedValue Long id;

	@ManyToOne()
	@JoinColumn(name = "id_especialista")
	private Especialista especialista;

	@ManyToOne()
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

	@ManyToOne()
	@JoinColumn(name = "id_mascota")
	private Mascota mascota;

	public Integrante() {}

	public Integrante (Especialista especialista, Usuario usuario, Mascota mascota) {
		this.especialista = especialista;
		this.usuario = usuario;
		this.mascota = mascota;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

    public Especialista getEspecialista() {
        return especialista;
    }

    public void setEspecialista(Especialista especialista) {
        this.especialista = especialista;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Mascota getMascota() {
        return mascota;
    }

    public void setMascota(Mascota mascota) {
        this.mascota = mascota;
    }

	

}