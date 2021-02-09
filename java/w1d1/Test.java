public class Test {
    // public - access modifer
    // static - oop
    // void - return type
    // main - name of function
    // String[] args - inputs
    public static void main(String[] args){
        System.out.println("Hello world, my name is Brendan!");

        int age = 10;
        String name = "Brendan";
        char singleChar = 'b';
        int[] numbers = {1, 2, 3, 4, 5};

        // Example example = new Example();
        // example.doStuff();

        // int number = example.giveTen() + example.giveTen();
        // System.out.println(number);

        Thing mything = new Thing();

        String output1 = mything.trimAndConcat("   example   ","    string   ");
        System.out.println(output1);

        String output2 = mything.trimAndConcat(" a", " b ");
        System.out.println(output2);

        String output3 = mything.trimAndConcat(" a", " b ");
        System.out.println(output3);

        String output4 = mything.trimAndConcat(" a", " b ");
        System.out.println(output4);
    }
}