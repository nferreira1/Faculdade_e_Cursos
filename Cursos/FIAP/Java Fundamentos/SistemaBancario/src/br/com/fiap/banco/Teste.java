package br.com.fiap.banco;

public class Teste {
	
	public static void main(String[] args) {
		
		Conta conta = new Conta();		
		Conta cc = new ContaCorrente();
		
		ContaCorrente c1 = (ContaCorrente) cc;
		
		if (conta instanceof ContaCorrente) {
			ContaCorrente c2 = (ContaCorrente) conta;			
		}
	}

}
