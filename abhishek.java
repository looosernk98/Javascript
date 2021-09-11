import java.util.*;

public class abhishek{
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.nextLine();
        server(str);
    }

    public static void server(String str){

        String arr[] = str.split("@");

        String ques = arr[1];

        for(int i=0; i<ques.length(); i++){
            char ch = ques.charAt(i);
            if(ch=='.'){
                System.out.println(ques.substring(0,i));
                return ;
            }
        }
    }
}
