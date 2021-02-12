import java.util.Arrays;


public class PuzzleJavaTest {
    public static void main(String[] args) {
        PuzzleJava pj = new PuzzleJava();

        int[] arr = {1, 3, 5, 7, 9};
        int[] newArr = pj.sumAndReturn(arr);
        System.out.println(Arrays.toString(newArr));
        
        
        String[] strArr = pj.shuffleStrings();
        System.out.println(Arrays.toString(strArr));
        
        
        pj.allLetters();
        
        
        arr = pj.randomInts();
        System.out.println(Arrays.toString(arr));
        
        
        arr = pj.randomSortedInts();
        System.out.println(Arrays.toString(arr));


        pj.tenRandomStrings();


    }
}
