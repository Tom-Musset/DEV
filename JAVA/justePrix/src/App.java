import java.util.Random;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        final int lePrix = genereLePrix();
        int proposition = 0;

        proposition = demandeUnChiffre();
        do{ if(proposition<lePrix){
                System.out.println("c'est Plus !");
                proposition = demandeUnChiffre();
            }if(proposition > lePrix){
                System.out.println("c'est Moins !");
                proposition = demandeUnChiffre();
            }
        }while(proposition != lePrix);

        if(proposition == lePrix){
            System.out.println("Juste Prix !");
        }
        
    }

    private static int genereLePrix(){
      final int lePrix;
      final Random r = new Random();

      lePrix = r.nextInt(200);

      return lePrix;  
    }

    private static int demandeUnChiffre(){
        Scanner scanner = new Scanner(System.in);
        int laProposition;

        System.out.println("proposez un prix :");
        laProposition = scanner.nextInt();
        
        return laProposition;
    }
}
