import java.lang.*;
public class SuperApp extends RuntimeException{
	public SuperApp(String message) {
		super(message);
	}

	public static void main(String[] args) {
		SuperApp app = new SuperApp("error error william error "); 
		System.out.println(app);

	}



}
