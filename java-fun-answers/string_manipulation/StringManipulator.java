public class StringManipulator {
    public String trimAndConcat(String s1, String s2) {
        return s1.trim() + s2.trim();
    }

    
    public Integer getIndexOrNull(String s1, char c1) {
        int index = s1.indexOf(c1);
        if (index == -1) {
            return null;
        } else {
            return index;
        }
    }


    public Integer getIndexOrNull(String s1, String s2) {
        int index = s1.indexOf(s2);
        if (index == -1) {
            return null;
        } else {
            return index;
        }
    }


    public String concatSubstring(String s1, int index1, int index2, String s2) {
        String subStr = s1.substring(index1, index2);
        return subStr + s2;
    }
}
