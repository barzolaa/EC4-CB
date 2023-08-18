package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final MascotaRepository repositoryI;
	private final UsuarioRepository repositoryM;
	private final EspecialistaRepository repositoryB;
	private final PacienteRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		MascotaRepository repositoryI,
		 UsuarioRepository repositoryM,
		 EspecialistaRepository repositoryB,
		 PacienteRepository repositoryN) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Mascota A = new Mascota("Luna", "5 meses", "San Bernardo");
		Mascota B = new Mascota("Bigotes", "1", "Schnauzer");
		Mascota C = new Mascota("Scoby", "3 meses", "Chihuahua");
		this.repositoryI.save(new Mascota("Ozi", "2 meses", "Pug"));
		this.repositoryI.save(new Mascota("Star","4 meses","Shih Tzu"));
		this.repositoryI.save(A);
		this.repositoryI.save(B);
		this.repositoryI.save(C);
		this.repositoryI.save(new Mascota("Alaska", "1 mes", "Husky siberiano"));

		Usuario mEnrique = new Usuario("Enrique Hector");
		Usuario mEduardo = new Usuario("Eduardo Jorge");
		Usuario mGuillermo = new Usuario("Guillermo");
		this.repositoryM.save(mEnrique);
		this.repositoryM.save(mEduardo);
		this.repositoryM.save(mGuillermo);
		this.repositoryM.save(new Usuario("Roberto"));

		Especialista bHellen = new Especialista("Hellen");
		Especialista bRosario = new Especialista("Rosario");
		this.repositoryB.save(bHellen);
		this.repositoryB.save(bRosario);

		Paciente intEnrique = new Paciente(bHellen, mEnrique, A);
		this.repositoryN.save(intEnrique);
		Paciente intEduardo = new Paciente(bHellen, mEduardo, B);
		this.repositoryN.save(intEduardo);
		Paciente intGuillermo = new Paciente(bRosario, mGuillermo, C);
		this.repositoryN.save(intGuillermo);


	}

	
}