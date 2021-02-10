import java.util.Random;
import java.util.ArrayList;
import java.util.Arrays;

public class Randomizer {

    public void sayName(){
        System.out.println("I am the randomizer!");
    }

    public Integer giveTen(){
        return null;
    }


    public static int randomNumber(int low, int high){
        Random myRandom = new Random();
        return myRandom.nextInt(high - low) + low;
    }

    public int[] randomNumbersArray(int length, int low, int high){
        int[] nums = new int[length];
        System.out.println(Arrays.toString(nums));

        for(int i = 0; i < length; i++) {
            nums[i] = Randomizer.randomNumber(low, high);
        }

        return nums;
    }

    public ArrayList<Integer> randomNumbersArrayList(int length, int low, int high){
        ArrayList<Integer> nums = new ArrayList<Integer>();
        System.out.println(nums);

        for(int i = 0; i < length; i++){
            nums.add(Randomizer.randomNumber(low, high));
        }

        return nums;
    }
}