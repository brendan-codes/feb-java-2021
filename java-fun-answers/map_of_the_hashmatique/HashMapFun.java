import java.util.HashMap;
import java.util.Set;

public class HashMapFun {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();
    
        trackList.put("Heros of Our Time", "We'll all find our sacrifice tomorrow.");
        trackList.put("Valley of the Damned", "In the valley of the damend a warrior with sword in hand.");
        trackList.put("Through the Fire and the Flames", "Through the fire and the flames we carry on.");
        trackList.put("The Warrior Inside", "Take my hand, this one last time. Face the world before us, the warrior inside");
        
        System.out.println(trackList.get("The Warrior Inside"));

        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(key + ": " + trackList.get(key));
        }

    }
}
