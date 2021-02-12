import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.List;


public class PuzzleJava {
    public int[] sumAndReturn(int[] arr) {
        ArrayList<Integer> myArr = new ArrayList<Integer>();
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (arr[i] > 10) {
                myArr.add(arr[i]);
            }
        }
        System.out.println(String.format("The sum of the array is: %d", sum));
        int[] newArr = new int[myArr.size()];
        for (int i = 0; i < newArr.length; i++) {
            newArr[i] = myArr.get(i);
        }
        return newArr;
    }


    public String[] shuffleStrings() {
        String[] names = {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
        List<String> list = Arrays.asList(names);
        List<String> namesGreaterThanFive = new ArrayList<String>();
        Collections.shuffle(list);
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
            if (list.get(i).length() > 5) {
                namesGreaterThanFive.add(list.get(i));
            }
        }
        String[] newArr = new String[namesGreaterThanFive.size()];
        for (int i = 0; i < newArr.length; i++) {
            newArr[i] = namesGreaterThanFive.get(i);
        }
        return newArr;
    }


    public void allLetters() {
        String[] letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};

        List<String> list = Arrays.asList(letters);
        Collections.shuffle(list);
        String[] shuffledLetters = new String[list.size()];
        for (int i = 0; i < shuffledLetters.length; i++) {
            shuffledLetters[i] = list.get(i);
        }
        System.out.println(String.format("The last letter in the array is: %s", shuffledLetters[shuffledLetters.length -1]));
        System.out.println(String.format("The first letter in the array is: %s", shuffledLetters[0]));
        String[] vowels = {"a", "e", "i", "o", "u"};
        for (String vowel : vowels) {
            if (shuffledLetters[0] == vowel) {
                System.out.println("The first letter is also a vowel");
            }
        } 
    }   


    public int[] randomInts() {
        int[] randInts = new int[10];
        Random r = new Random();
        for (int i = 0; i < randInts.length; i++) {
            randInts[i] = r.nextInt((100 - 55) +1) + 55; 
        }
        return randInts;
    }


    public int[] randomSortedInts() {
        int[] randInts = new int[10];
        Random r = new Random();
        for (int i = 0; i < randInts.length; i++) {
            randInts[i] = r.nextInt((100 - 55) +1) + 55; 
        }
        Arrays.sort(randInts);
        return randInts;
    }


    public String randomStr() {
        int leftLimit = 97;
        int rightLimit = 122;
        char[] charArr = new char[5];
        Random r = new Random();
        for (int i = 0; i < charArr.length; i++) {
            int randomInt = r.nextInt((rightLimit - leftLimit) + 1) + leftLimit;
            charArr[i] = (char) randomInt;
        }
        String newStr = Arrays.toString(charArr);
        return newStr;
    }


    public void tenRandomStrings() {
        for (int i = 0; i < 10; i++) {
            System.out.println(randomStr()); 
        }
    }
}
