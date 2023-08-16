package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final MascotaRepository repositoryI;
	private final UsuarioRepository repositoryM;
	private final EspecialistaRepository repositoryB;
	private final IntegranteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		MascotaRepository repositoryI,
		 UsuarioRepository repositoryM,
		 EspecialistaRepository repositoryB,
		 IntegranteRepository repositoryN) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Mascota grande = new Mascota("Luna", "5 meses", "San Bernardo");
		Mascota mediano = new Mascota("Bigotes", "1", "Schnauzer");
		Mascota pequeño = new Mascota("Scoby", "3 meses", "Chihuahua");
		this.repositoryI.save(new Mascota("Ozi", "2 meses", "Pug"));
		this.repositoryI.save(new Mascota("Star","4 meses","Shih Tzu"));
		this.repositoryI.save(grande);
		this.repositoryI.save(mediano);
		this.repositoryI.save(pequeño);
		this.repositoryI.save(new Mascota("Alaska", "1 mes", "Husky siberiano"));

		Usuario mFreddie = new Usuario("Freddie");
		Usuario mBrian = new Usuario("Brian");
		Usuario mRogerWaters = new Usuario("Roger Waters");
		this.repositoryM.save(mFreddie);
		this.repositoryM.save(mBrian);
		this.repositoryM.save(mRogerWaters);
		this.repositoryM.save(new Usuario("Roger"));

		Especialista bQueen = new Especialista("Queen");
		Especialista bPinkFloyd = new Especialista("Pink Floyd");
		this.repositoryB.save(bQueen);
		this.repositoryB.save(bPinkFloyd);

		Integrante intFreddie = new Integrante(bQueen, mFreddie, grande);
		this.repositoryN.save(intFreddie);
		Integrante intBrian = new Integrante(bQueen, mBrian, mediano);
		this.repositoryN.save(intBrian);
		Integrante intRogerWaters = new Integrante(bPinkFloyd, mRogerWaters, pequeño);
		this.repositoryN.save(intRogerWaters);


	}

	
}