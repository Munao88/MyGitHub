
import java.util.Scanner;


public class MainSquare {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("ต้องการสี่เหลี่ยม : ");
        int x = in.nextInt();
        System.out.println("-----------------");
        Square[] list = new Square[x];
        for(int i = 0 ; i<x ; i++){
            Square c = new Square();
            System.out.println("Square : "+(i+1));
            System.out.print("Enter Width : ");
            c.SumArea(in.nextInt());
            //System.out.println();
            System.out.println("Area : "+c.getArea());
            System.out.println("======================");
        }
        
        
    }
}
