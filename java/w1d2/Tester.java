import java.util.ArrayList;
import java.util.Arrays;

public class Tester {
    // main function
    public static void main(String[] args){

        Randomizer myNewRandomizer = new Randomizer();
        myNewRandomizer.sayName();

        System.out.println(Randomizer.randomNumber(2, 11));

        System.out.println(Arrays.toString(myNewRandomizer.randomNumbersArray(10, 1, 100)));
        System.out.println(myNewRandomizer.randomNumbersArrayList(10, 1, 100));

        int number = 10;
        Integer otherNumber = 10;
        String word = "Hello!";

        // array
        int[] nums1 = new int[10]; // [0,0,0,0,0,0,0,0]
        // System.out.println(Arrays.toString(nums1));

        // ArrayList
        ArrayList<Integer> nums2 = new ArrayList<Integer>(); // push, pop
        nums2.add(10);
        nums2.add(10);
        nums2.add(10);
        nums2.add(10);
        nums2.add(10);
        nums2.add(10);
        // System.out.println(nums2);
    }
}