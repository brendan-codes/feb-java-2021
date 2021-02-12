public class StringManipulatorTest {
    public static void main(String[] args) {
        StringManipulator mani = new StringManipulator();

        String str = mani.trimAndConcat("     Hello     ", "     World!     ");
        System.out.println(str);

        char letter = 'o';
        Integer a = mani.getIndexOrNull("Coding", letter);
        Integer b = mani.getIndexOrNull("Hello World!", letter);
        Integer c = mani.getIndexOrNull("Hi", letter);
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);

        String word = "Hello";
        String subString = "llo";
        String notSubString = "world";
        a = mani.getIndexOrNull(word, subString);
        b = mani.getIndexOrNull(word, notSubString);
        System.out.println(a);
        System.out.println(b);

        word = mani.concatSubstring("Hellow", 1, 2, "world");
        System.out.println(word);
    }
}
