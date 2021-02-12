import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class BasicJava {
    public void printNumbers() {
        for (int i = 0; i < 256; i++) {
            System.out.println(i);
        }
    }


    public void printOddNumbers() {
        for (int i = 0; i < 256; i++) {
            if (i % 2 == 1) {
                System.out.println(i);
            }
        }
    }


    public void printSum() {
        int sum = 0;
        String str;
        for (int i = 0; i < 256; i++) {
            sum = sum + i;
            str = String.format("New number: %d Sum: %s", i, sum);
            System.out.println(str);
        }
    }


    public void iterateArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }


    public void findMax(int[] arr) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        System.out.println(String.format("The max is: %d", max));
    }


    public void findAvg(int[] arr) {
        int avg = 0;
        for (int i = 0; i < arr.length; i++) {
            avg += arr[i];
        }
        avg = avg / arr.length;
        System.out.println(String.format("The average is: %d", avg));
    }


    public void oddArray() {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < 256; i++) {
            if (i % 2 == 1) {
                list.add(i);
            }
        }
        System.out.println(list);
    }


    public int greaterThan(int[] arr, int y) {
        int greaterThan = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > y) {
                greaterThan += 1;
            }
        }
        return greaterThan;
    }


    public void square(int[] arr) {
        for (int i = 0; i < arr.length; i ++) {
            arr[i] = arr[i] * arr[i];
        }
        System.out.println(Arrays.toString(arr));
    }


    public void eliminateNegative(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = 0;
            }
        }
        System.out.println(Arrays.toString(arr));
    }


    public int[] maxMinAvg(int[] arr) {
        int[] newArr = {arr[0], arr[0], 0};
        for (int i = 0; i < arr.length; i++) {
            if (newArr[0] > arr[i]) {
                newArr[0] = arr[i];
            }
            if (newArr[1] < arr[i]) {
                newArr[1] = arr[i];
            }
            newArr[2] += arr[i];
        }
        newArr[2] = newArr[2] / arr.length;
        return newArr;
    }


    public void shiftArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (i == arr.length - 1) {
                arr[i] = 0;
                break;
            } else {
                arr[i] = arr[i + 1];
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
