import java.util.Scanner;

public class program {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int check, height, width, ans;
        System.out.println("Press 1 for the rectangle, 2 for the triangle, and 3 to exit the program");
        check = in.nextInt();
        while (check != 3) {
            System.out.println("Enter height and width");
            height = in.nextInt();
            width = in.nextInt();
            if (check == 1) {
                if (Math.abs(width - height) > 5 || width == height)
                    System.out.println(width * height); //Area printing
                else
                    System.out.println((height + width) * 2); //Print scope
            } else {
                System.out.println("Press 1 to calculate the perimeter, 2 to print");
                ans = in.nextInt();
                if (ans == 1)
                    //Calculating the perimeter of the triangle using the Pythagorean theorem
                    System.out.println((int) Math.sqrt(Math.pow(height, 2) + Math.pow((width) / 2, 2)));
                else {
                    if (width % 2 == 0 || width > 2 * height) //integrity check
                        System.out.println("The triangle cannot be printed");
                    else {
                        int types = (width / 2) + 1; //number of levels
                        int timesToLine = 1; //Number of instances per level
                        int addToSecondLine = 1; //Number of shows to the top level
                        if (types - 2 != 0) //Blocking edge cases
                            timesToLine = (height - 2) / (types - 2);
                        if (types - 2 != 0) //Blocking edge cases
                            addToSecondLine = (height - 2) % (types - 2);
                        int times;
                        for (int i = 1; i <= width; i += 2) {
                            //Blocking edge case: width = height = 3
                            if ((i == 3 && !(height == 3 && width == 3)) || (i != 3) && (height == 3 && width == 3))
                                times = timesToLine + addToSecondLine;
                            //Blocking edge case: width = 1
                            else if (width == 1)
                                times = height;
                            else if (i == 1 || i == width)
                                times = 1;
                            else
                                times = timesToLine;
                            for (int k = 0; k < times; k++) {
                                String str = " ".repeat((width - i) / 2);
                                str += "*".repeat(i);
                                System.out.println(str);
                            }
                        }
                    }
                }
            }
            System.out.println("Press 1 for the rectangle, 2 for the triangle, and 3 to exit the program");
            check = in.nextInt();
        }


    }
}
